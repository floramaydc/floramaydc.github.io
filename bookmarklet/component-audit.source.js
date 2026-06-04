/* eslint-disable */
// Floramay Component Audit — bookmarklet source.
// Runs entirely in the user's browser, on the page they're already viewing.
// Nothing leaves their device. Use for pages behind sign-in (admin consoles,
// internal apps, dashboards) where the server-side audit can't reach.
//
// Build: node scripts/build-bookmarklet.mjs
// (produces public/bookmarklet/component-audit.bookmarklet.txt)

(function () {
  'use strict';

  // ── Private DS registry (mirrors src/lib/componentAuditEngine.mjs) ─────────
  var PRIVATE_DS = [
    { rx: /(^|[\/.])encore[\/.-]/i, label: 'Encore', owner: 'Spotify' },
    { rx: /\bpolaris[\/.-]/i, label: 'Polaris', owner: 'Shopify' },
    { rx: /\bprimer[\/.-]/i, label: 'Primer', owner: 'GitHub' },
    { rx: /\batlaskit[\/.-]/i, label: 'Atlaskit', owner: 'Atlassian' },
    { rx: /\blightning[-_]?design/i, label: 'Lightning Design System', owner: 'Salesforce' },
    { rx: /\bspectrum[\/.-]/i, label: 'Spectrum', owner: 'Adobe' },
    { rx: /\bgestalt[\/.-]/i, label: 'Gestalt', owner: 'Pinterest' },
    { rx: /\bbaseweb[\/.-]/i, label: 'Base Web', owner: 'Uber' },
    { rx: /\bpaste[\/.-]/i, label: 'Paste', owner: 'Twilio' },
    { rx: /\bevergreen[\/.-]/i, label: 'Evergreen', owner: 'Segment' },
    { rx: /\bcarbon[-_]?components/i, label: 'Carbon', owner: 'IBM (public)' },
    { rx: /\bfluentui[\/.-]/i, label: 'Fluent UI', owner: 'Microsoft (public)' },
    { rx: /\bcanvas[-_]?kit/i, label: 'Canvas Kit', owner: 'Workday' },
    { rx: /\bmineral[-_]?ui/i, label: 'Mineral UI', owner: 'CA Technologies' },
  ];

  var CUSTOM_ELEMENT_LIBS = {
    'md-': { lib: 'material', label: 'Material Web Components' },
    'mwc-': { lib: 'material', label: 'Material Web Components (legacy)' },
    'mat-': { lib: 'material', label: 'Angular Material' },
    'fluent-': { lib: 'fluent', label: 'Fluent UI Web Components' },
    'fast-': { lib: 'fluent', label: 'FAST (Fluent foundation)' },
    'cds-': { lib: 'carbon', label: 'Carbon Web Components' },
  };

  function detectPrivateFromAssets() {
    var urls = [];
    document.querySelectorAll('link[rel=stylesheet][href], script[src]').forEach(function (el) {
      var u = el.getAttribute('href') || el.getAttribute('src');
      if (u) urls.push(u);
    });
    for (var i = 0; i < urls.length; i++) {
      for (var j = 0; j < PRIVATE_DS.length; j++) {
        if (PRIVATE_DS[j].rx.test(urls[i])) {
          return { label: PRIVATE_DS[j].label, owner: PRIVATE_DS[j].owner, sourceUrl: urls[i] };
        }
      }
    }
    return null;
  }

  function analyzeCustomElements() {
    var counts = {}; var total = 0; var matchedLib = null;
    document.querySelectorAll('*').forEach(function (el) {
      var tag = el.tagName.toLowerCase();
      if (tag.indexOf('-') === -1) return;
      counts[tag] = (counts[tag] || 0) + 1;
      total++;
      var prefix = tag.split('-')[0] + '-';
      if (CUSTOM_ELEMENT_LIBS[prefix] && !matchedLib) matchedLib = CUSTOM_ELEMENT_LIBS[prefix];
    });
    var topTags = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; }).slice(0, 5);
    return { total: total, topTags: topTags.map(function (t) { return { tag: t, count: counts[t] }; }), knownLib: matchedLib };
  }

  function topClassPrefix() {
    var classCounts = {};
    document.querySelectorAll('[class]').forEach(function (el) {
      String(el.className || '').split(/\s+/).forEach(function (c) {
        if (!c) return;
        var m = c.match(/^([a-z]{1,6})[-_]/i);
        if (m) {
          var p = m[1].toLowerCase();
          classCounts[p] = (classCounts[p] || 0) + 1;
        }
      });
    });
    var total = 0; var top = null; var topN = 0;
    Object.keys(classCounts).forEach(function (k) {
      total += classCounts[k];
      if (classCounts[k] > topN) { topN = classCounts[k]; top = k; }
    });
    return { prefix: top, count: topN, share: total ? topN / total : 0, totalSamples: total };
  }

  function detectScopedSignature() {
    var styled = 0, modulesLong = 0, modulesShort = 0, emotion = 0, linaria = 0, vanilla = 0;
    document.querySelectorAll('[class]').forEach(function (el) {
      String(el.className || '').split(/\s+/).forEach(function (c) {
        if (/^sc-[a-z0-9]+/i.test(c)) styled++;
        else if (/^[A-Za-z][\w-]+_[A-Za-z][\w-]+__[A-Za-z0-9]{4,}/.test(c)) modulesLong++;
        else if (/^[A-Za-z][\w-]+_[a-z0-9]{5,}$/i.test(c)) modulesShort++;
        else if (/^css-[a-z0-9]+$/i.test(c)) emotion++;
        else if (/__[a-z0-9]{6,}$/i.test(c)) linaria++;
        else if (/^_[a-z0-9_-]{6,}__[a-z0-9]+$/i.test(c)) vanilla++;
      });
    });
    var winner = null; var max = 0;
    var picks = { 'styled-components': styled, 'CSS Modules': Math.max(modulesLong, modulesShort), 'Emotion': emotion, 'Linaria': linaria, 'vanilla-extract': vanilla };
    Object.keys(picks).forEach(function (k) { if (picks[k] > max) { max = picks[k]; winner = k; } });
    return { kind: max >= 5 ? winner : null, count: max };
  }

  function countCssVars() {
    var styles = getComputedStyle(document.documentElement);
    var n = 0;
    for (var i = 0; i < styles.length; i++) {
      if (styles[i].indexOf('--') === 0) n++;
    }
    return n;
  }

  function assess() {
    var priv = detectPrivateFromAssets();
    var custom = analyzeCustomElements();
    var scoped = detectScopedSignature();
    var prefix = topClassPrefix();
    var cssVars = countCssVars();
    var evidence = [];

    if (priv) {
      evidence.push('private DS asset matched: ' + priv.sourceUrl.slice(0, 80));
      return { confidence: 'high', label: priv.label, owner: priv.owner, evidence: evidence, cssVars: cssVars, custom: custom, scoped: scoped, prefix: prefix };
    }
    if (custom.knownLib) {
      evidence.push('custom-element library prefix matched (' + custom.knownLib.label + ')');
      return { confidence: 'high', label: custom.knownLib.label, owner: null, evidence: evidence, cssVars: cssVars, custom: custom, scoped: scoped, prefix: prefix };
    }
    if (custom.total > 0) {
      evidence.push(custom.total + ' custom elements present');
      return { confidence: 'medium', label: 'In-house design system (custom elements)', owner: null, evidence: evidence, cssVars: cssVars, custom: custom, scoped: scoped, prefix: prefix };
    }
    if (scoped.count >= 5) {
      evidence.push('scoped class signature: ' + scoped.kind + ' (' + scoped.count + ' samples)');
      return { confidence: 'medium', label: 'In-house design system (' + scoped.kind + ' styling)', owner: null, evidence: evidence, cssVars: cssVars, custom: custom, scoped: scoped, prefix: prefix };
    }
    if (prefix.share >= 0.35 && prefix.count >= 8) {
      evidence.push('dominant class prefix "' + prefix.prefix + '" (' + Math.round(prefix.share * 100) + '%)');
      return { confidence: 'low', label: 'Possible in-house DS (prefix "' + prefix.prefix + '-")', owner: null, evidence: evidence, cssVars: cssVars, custom: custom, scoped: scoped, prefix: prefix };
    }
    if (cssVars >= 30) {
      evidence.push(cssVars + ' CSS custom properties on :root');
      return { confidence: 'low', label: 'Possible design tokens detected', owner: null, evidence: evidence, cssVars: cssVars, custom: custom, scoped: scoped, prefix: prefix };
    }
    return { confidence: 'none', label: null, owner: null, evidence: ['no library signature, no dominant prefix, no scoped classes, no significant token surface'], cssVars: cssVars, custom: custom, scoped: scoped, prefix: prefix };
  }

  function recommendation(a) {
    if (a.confidence === 'high' && a.label && a.owner) {
      return 'You\u2019re looking at ' + a.label + ' (' + a.owner + '), a private design system. You can\u2019t adopt it directly. If you\u2019re studying an interaction or benchmarking accessibility, capture the focus order, ARIA, and keyboard behavior you observe \u2014 then compare against Carbon / Fluent UI / Material UI for accessible public analogues.';
    }
    if (a.confidence === 'high' && a.label) {
      return 'Public design system detected: ' + a.label + '. Verify version + accessibility against the library\u2019s own docs.';
    }
    if (a.confidence === 'medium') {
      return 'This appears to use an in-house design system. Useful for benchmarking, not for direct adoption. Compare keyboard / focus / ARIA parity against Carbon, Fluent UI, or Material UI.';
    }
    if (a.confidence === 'low') {
      return 'Only structural hints of a design system. Could be a private design language or just consistent custom CSS. Run a full audit on a public version if available.';
    }
    return 'No design system signature detected. If your team is picking a library, accessible public options include Carbon, Fluent UI, and Material UI.';
  }

  function countInteractive() {
    var c = { button: 0, input: 0, select: 0, link: 0, dialog: 0, table: 0, form: 0 };
    c.button = document.querySelectorAll('button, [role="button"]').length;
    c.input = document.querySelectorAll('input, textarea, [role="textbox"], [contenteditable="true"]').length;
    c.select = document.querySelectorAll('select, [role="combobox"], [role="listbox"]').length;
    c.link = document.querySelectorAll('a[href]').length;
    c.dialog = document.querySelectorAll('dialog, [role="dialog"], [role="alertdialog"]').length;
    c.table = document.querySelectorAll('table, [role="table"], [role="grid"]').length;
    c.form = document.querySelectorAll('form').length;
    return c;
  }

  function render(a) {
    // Remove prior overlay if present.
    var existing = document.getElementById('fmdc-audit-overlay');
    if (existing) existing.remove();

    var overlay = document.createElement('div');
    overlay.id = 'fmdc-audit-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'fmdc-audit-title');
    overlay.style.cssText = [
      'position:fixed', 'top:16px', 'right:16px', 'z-index:2147483647',
      'width:380px', 'max-height:90vh', 'overflow:auto',
      'background:#ffffff', 'color:#303636',
      'border:1px solid rgba(0,0,0,0.15)', 'border-radius:8px',
      'box-shadow:0 10px 30px rgba(0,0,0,0.25)',
      'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',
      'font-size:13px', 'line-height:1.5'
    ].join(';');

    var intent = countInteractive();
    var totalInteractive = intent.button + intent.input + intent.select + intent.dialog + intent.table;

    var confColor = a.confidence === 'high' ? '#a24a2a' : a.confidence === 'medium' ? '#5a6362' : a.confidence === 'low' ? '#bcc0bb' : '#303636';

    overlay.innerHTML = [
      '<div style="padding:14px 16px;border-bottom:1px solid rgba(0,0,0,0.08);display:flex;justify-content:space-between;align-items:center;gap:8px">',
        '<div>',
          '<div style="font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:#5a6362">Floramay \u00b7 Component Audit</div>',
          '<h2 id="fmdc-audit-title" style="margin:2px 0 0;font-size:15px;font-weight:600">Detection on this page</h2>',
        '</div>',
        '<button id="fmdc-audit-close" aria-label="Close audit overlay" style="background:transparent;border:0;font-size:18px;cursor:pointer;color:#303636;padding:4px 8px;line-height:1">\u00d7</button>',
      '</div>',
      '<div style="padding:14px 16px;display:flex;flex-direction:column;gap:12px">',
        '<div>',
          '<div style="font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:#5a6362">Design system</div>',
          '<div style="margin-top:2px;font-weight:600;color:' + confColor + '">',
            (a.label || 'None detected'),
            ' \u00b7 ', a.confidence.toUpperCase(), ' confidence',
          '</div>',
        '</div>',
        '<div>',
          '<div style="font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:#5a6362">Evidence</div>',
          '<ul style="margin:4px 0 0;padding-left:18px;color:#5a6362">',
            a.evidence.map(function (e) { return '<li>' + e.replace(/[<>]/g, '') + '</li>'; }).join(''),
          '</ul>',
        '</div>',
        '<div>',
          '<div style="font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:#5a6362">Recommendation</div>',
          '<p style="margin:4px 0 0;color:#303636">', recommendation(a).replace(/[<>]/g, ''), '</p>',
        '</div>',
        '<div>',
          '<div style="font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:#5a6362">Interactive inventory</div>',
          '<div style="margin-top:4px;display:grid;grid-template-columns:1fr 1fr;gap:4px 12px;color:#303636">',
            '<span>Buttons: <strong>' + intent.button + '</strong></span>',
            '<span>Inputs: <strong>' + intent.input + '</strong></span>',
            '<span>Selects/combos: <strong>' + intent.select + '</strong></span>',
            '<span>Links: <strong>' + intent.link + '</strong></span>',
            '<span>Dialogs: <strong>' + intent.dialog + '</strong></span>',
            '<span>Tables/grids: <strong>' + intent.table + '</strong></span>',
            '<span>Forms: <strong>' + intent.form + '</strong></span>',
            '<span>Custom elements: <strong>' + a.custom.total + '</strong></span>',
          '</div>',
        '</div>',
        '<div style="border-top:1px solid rgba(0,0,0,0.08);padding-top:10px;font-size:11px;color:#5a6362">',
          'This ran entirely in your browser. Nothing was sent to any server. ',
          '<a href="https://floramaydc.com/toybox/component-audit-tool/" target="_blank" rel="noopener" style="color:#a24a2a">Open full tool</a>',
        '</div>',
      '</div>'
    ].join('');

    document.body.appendChild(overlay);
    document.getElementById('fmdc-audit-close').onclick = function () { overlay.remove(); };
    // Close on Escape.
    var onKey = function (e) { if (e.key === 'Escape') { overlay.remove(); document.removeEventListener('keydown', onKey); } };
    document.addEventListener('keydown', onKey);
  }

  try {
    render(assess());
  } catch (err) {
    alert('Component Audit bookmarklet failed: ' + (err && err.message ? err.message : err));
  }
})();
