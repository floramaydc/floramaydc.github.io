const g="https://floramaydc-audit-api.vercel.app/api/dark-pattern-audit";function s(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function x(e){try{const n=/^https?:\/\//i.test(e)?e:`https://${e}`;return new URL(n),!0}catch{return!1}}function p(e,n,t){e.innerHTML=`
    <div class="rounded border border-red-200 bg-red-50 p-4 text-red-900" role="alert">
      <p class="m-0 text-sm font-semibold break-words">${s(n)}</p>
      ${t?`<p class="mt-2 mb-0 text-sm text-red-800 break-words">${s(t)}</p>`:""}
    </div>`}function f(e){const n=Math.floor(e/1e3);return`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`}function h(e){const n=["Connecting to the M.ai scan service","Loading the page for analysis","Sweeping for deceptive patterns and collecting evidence","Packaging your report"],t=Date.now();let r=0;const a=()=>{const l=f(Date.now()-t),o=n.map((m,i)=>{const d=i===r;return`<li class="flex items-center gap-2 text-sm ${d?"text-ink font-semibold":"text-muted"}"><span class="inline-block h-2 w-2 rounded-full ${d?"bg-accent animate-pulse":"bg-ink/20"}" aria-hidden="true"></span>${s(m)}</li>`}).join("");e.innerHTML=`
      <div class="rounded border border-accent/25 bg-white/70 p-4 dark:bg-ink/10" role="status" aria-live="polite">
        <div class="flex items-baseline justify-between gap-2">
          <p class="m-0 text-sm font-semibold text-ink">Scanning for dark patterns</p>
          <p class="m-0 text-xs tabular-nums text-muted" aria-label="Elapsed time">${l}</p>
        </div>
        <p class="mt-2 mb-0 text-xs text-muted">This can take 10-60 seconds depending on page size and network conditions.</p>
        <ul class="mt-3 space-y-2">${o}</ul>
      </div>`};a();const c=window.setInterval(()=>{r=Math.min(r+1,n.length-1),a()},4e3);return{stop:()=>window.clearInterval(c)}}const y={high:"High severity",medium:"Medium severity",low:"Low severity"};function k(e){const n=y[e]||"Severity";return`<span class="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-paper px-2 py-0.5 text-xs font-semibold text-ink"><span class="inline-block h-2 w-2 rounded-full ${e==="high"?"bg-accent":e==="medium"?"bg-ink/60":"bg-ink/30"}" aria-hidden="true"></span>${s(n)}</span>`}function v(e){return e==="advisory"?'<span class="inline-flex items-center rounded-full border border-ink/15 bg-paper px-2 py-0.5 text-xs font-medium text-muted">Possible — needs a human read</span>':'<span class="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-xs font-medium text-ink dark:bg-accent/15">Confirmed by evidence</span>'}function b(e){return`
    <article class="rounded-lg border border-ink/12 bg-paper p-4">
      <header class="flex flex-wrap items-center gap-2">
        <span class="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-ink/10 px-1.5 text-xs font-semibold tabular-nums text-ink" aria-hidden="true">${e.annotationId}</span>
        <h4 class="m-0 text-base font-serif text-ink">${s(e.typeLabel)}</h4>
        ${k(e.severity)}
        ${v(e.status)}
        <span class="ml-auto text-xs tabular-nums text-muted">Confidence ${e.confidence}%</span>
      </header>
      <p class="mt-2 mb-0 text-sm text-muted">${s(e.definition)}</p>
      <figure class="mt-3 mb-0 border-l-2 border-accent/40 pl-3">
        <figcaption class="text-xs font-semibold uppercase tracking-wide text-muted">Evidence on the page</figcaption>
        <blockquote class="mt-1 mb-0 text-sm italic text-ink break-words">${s(e.evidence)}</blockquote>
      </figure>
      <div class="mt-3 grid gap-3 sm:grid-cols-2">
        <div>
          <p class="m-0 text-xs font-semibold uppercase tracking-wide text-muted">Why it manipulates</p>
          <p class="mt-1 mb-0 text-sm text-ink">${s(e.why)}</p>
        </div>
        <div>
          <p class="m-0 text-xs font-semibold uppercase tracking-wide text-muted">What to do instead</p>
          <p class="mt-1 mb-0 text-sm text-ink">${s(e.recommendation)}</p>
        </div>
      </div>
      ${e.selector?`<p class="mt-3 mb-0 text-xs font-mono text-muted break-all">${s(e.selector)}</p>`:""}
      <p class="mt-2 mb-0 text-xs text-muted">Pattern: <a class="underline hover:text-accent" href="${s(e.citation.url)}" target="_blank" rel="noopener noreferrer">${s(e.citation.type)} — ${s(e.citation.source)}</a></p>
    </article>`}function $(e){const n=["# Dark Pattern Detector report","",`- URL: ${e.url}`,`- Scanned: ${e.timestamp}`,`- Taxonomy: ${e.taxonomyVersion}`,`- Findings: ${e.summary.totalFindings} (${e.summary.confirmed} confirmed, ${e.summary.advisory} advisory)`,`- Severity: ${e.summary.high} high · ${e.summary.medium} medium · ${e.summary.low} low`,"","## Findings",""];return e.findings.length===0?n.push("No evidence-backed deceptive patterns were detected on this page.",""):e.findings.forEach(t=>{n.push(`### ${t.annotationId}. ${t.typeLabel} — ${t.severity} (${t.status}, confidence ${t.confidence}%)`,"",`- Evidence: "${t.evidence}"`,`- Why it manipulates: ${t.why}`,`- What to do instead: ${t.recommendation}`,`- Selector: ${t.selector||"n/a"}`,`- Pattern reference: ${t.citation.url}`,"")}),n.push("---",e.reference,""),n.join(`
`)}function w(e,n){const{summary:t}=n,r=n.findings.filter(d=>d.status==="confirmed"),a=n.findings.filter(d=>d.status==="advisory"),c=n.screenshot?`<details class="mt-4 rounded-lg border border-ink/12 bg-paper">
        <summary class="cursor-pointer select-none px-4 py-3 text-sm font-semibold text-ink">Page screenshot</summary>
        <div class="border-t border-ink/10 p-3">
          <img src="data:${n.screenshot.mimeType};base64,${n.screenshot.data}" alt="Screenshot of ${s(n.url)}" class="h-auto w-full rounded" loading="lazy" />
        </div>
      </details>`:"",l=n.findings.length===0?`<div class="rounded-lg border border-ink/12 bg-paper p-4">
          <p class="m-0 text-sm text-ink">No evidence-backed deceptive patterns were detected on this page.</p>
          <p class="mt-2 mb-0 text-xs text-muted">This scan reads a single page load. Patterns that only appear inside a checkout, sign-up, or cancellation flow won't surface here — run the Chrome extension on those steps directly.</p>
        </div>`:"",o=r.length?`<div class="mt-4 space-y-3">${r.map(b).join("")}</div>`:"",m=a.length?`<details class="mt-4 rounded-lg border border-ink/12 bg-paper" open>
        <summary class="cursor-pointer select-none px-4 py-3 text-sm font-semibold text-ink">Possible patterns — need a human read (${a.length})</summary>
        <div class="space-y-3 border-t border-ink/10 p-3">${a.map(b).join("")}</div>
      </details>`:"";e.innerHTML=`
    <div class="rounded-lg border border-accent/25 bg-white/70 p-4 dark:bg-ink/10">
      <div class="flex flex-wrap items-baseline justify-between gap-2">
        <h3 class="m-0 text-base font-serif text-ink">Scan complete</h3>
        <p class="m-0 text-xs text-muted break-all">${s(n.url)}</p>
      </div>
      <p class="mt-2 mb-0 text-sm text-ink">
        <strong>${t.totalFindings}</strong> finding${t.totalFindings===1?"":"s"}
        — ${t.confirmed} confirmed, ${t.advisory} advisory
        (${t.high} high · ${t.medium} medium · ${t.low} low).
      </p>
      <div class="mt-3 flex flex-wrap gap-2">
        <button id="dp-copy-mai" class="inline-flex items-center rounded-md border border-accent bg-accent px-3 py-1.5 text-xs font-semibold text-paper no-underline transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Copy report for M.ai</button>
        <a id="dp-open-mai" href="/mai" class="inline-flex items-center rounded-md border border-ink/20 bg-paper px-3 py-1.5 text-xs font-semibold text-ink no-underline hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Open M.ai →</a>
      </div>
    </div>
    ${l}
    ${o}
    ${m}
    ${c}
    <p class="mt-4 text-xs text-muted">${s(n.reference)}</p>`;const i=e.querySelector("#dp-copy-mai");i&&i.addEventListener("click",async()=>{const d=$(n);try{await navigator.clipboard.writeText(d),i.textContent="Copied ✓",window.setTimeout(()=>{i.textContent="Copy report for M.ai"},2e3)}catch{i.textContent="Copy failed — select manually"}})}function T(){const e=document.getElementById("dark-pattern-tool");if(!e)return;const n=e.getAttribute("data-dark-pattern-api-url")||g,t=document.getElementById("dark-pattern-url"),r=document.getElementById("run-dark-pattern-btn"),a=document.getElementById("dark-pattern-result-container");if(!t||!r||!a)return;let c=!1;const l=async()=>{if(c)return;const o=t.value.trim();if(!o){p(a,"Enter a URL to scan."),t.focus();return}if(!x(o)){p(a,"That doesn’t look like a valid URL.","Try something like https://example.com."),t.focus();return}c=!0,r.disabled=!0,r.textContent="Scanning…";const m=h(a);try{const i=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:o})});if(m.stop(),!i.ok){let u={};try{u=await i.json()}catch{}p(a,u.error||`The scan request failed (HTTP ${i.status}).`,u.hint||"Please try again in a moment.");return}const d=await i.json();w(a,d)}catch(i){m.stop(),p(a,"The scan could not be completed.",i instanceof Error?i.message:"Check your connection and try again.")}finally{c=!1,r.disabled=!1,r.textContent="Start scan"}};r.addEventListener("click",l),t.addEventListener("keydown",o=>{o.key==="Enter"&&(o.preventDefault(),l())})}T();
