/* empty css                                    */
import { p as createAstro, q as createComponent, w as renderComponent, D as renderTemplate, o as addAttribute, H as spreadAttributes, g as Fragment, v as maybeRenderHead } from '../../chunks/astro/server_D37m5tNR.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Dd7kTHl0.mjs';
import { b as getEntry } from '../../chunks/_astro_content_XxXwbPTn.mjs';
import { g as getPublicImageSize } from '../../chunks/publicImageSize_tT-4UM5E.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.floramaydc.com");
const $$Tabulas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tabulas;
  const base = "/".endsWith("/") ? "/" : "//";
  const entry = await getEntry("play", "tabulas");
  const siteUrl = (Astro2.site?.toString() ?? "https://www.floramaydc.com/").replace(/\/$/, "");
  const playUrl = `${siteUrl}/play/tabulas/`;
  function playImageMeta(folder, fileName) {
    const imagePath = `images/play/${folder}/${fileName}`;
    const imageSize = getPublicImageSize(imagePath);
    return {
      src: `${base}${imagePath}`,
      size: imageSize
    };
  }
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: entry?.data.title ?? "Tabulas",
      headline: entry?.data.title ?? "Tabulas",
      description: entry?.data.summary,
      url: playUrl,
      author: { "@type": "Person", name: "Flora May dela Cruz", url: `${siteUrl}/about` },
      genre: "Play"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Play", item: `${siteUrl}/play/` },
        { "@type": "ListItem", position: 2, name: entry?.data.title ?? "Tabulas", item: playUrl }
      ]
    }
  ];
  const pages = [
    { type: "blank" },
    // 0
    {
      type: "campaign-cover",
      // 1  cover (closed-book)
      fileLabel: "Campaign No. 03",
      candidate: "Flora",
      office: "For a Better Layout",
      slogan: "Vote Tabulas",
      tagline: "A campaign for the personal web · 2003 — 2012",
      image: "cover.jpg",
      badge: "Official Pamphlet",
      meta: [
        { k: "Candidate", v: "F.M. dela Cruz" },
        { k: "Running for", v: "A Better Layout" },
        { k: "Term", v: "2003 — 2012" },
        { k: "Class.", v: "Personal archive" }
      ]
    },
    {
      type: "platform",
      // 2
      eyebrow: "On the platform",
      title: "My fellow bloggers,",
      body: [
        "I started with the wrong three letters. Junior year, I was curious about XSS — ethical hacking sounded thrilling. Somewhere between forum posts I noticed people kept writing CSS, and the two looked close enough that I wandered over to see what the fuss was.",
        "Tabulas was the doorway. A blogging platform you could re-skin top to bottom: backgrounds, fonts, the way a post looked on a Tuesday. I taught myself by saving Notepad files at midnight and refreshing until something looked right.",
        "These are the layouts that survived. Some were earnest, some were experiments, all of them mine. Read this as a campaign pamphlet for the kid who picked the wrong three letters and ended up with a career."
      ],
      signoff: "Flora May"
    },
    {
      type: "ticket",
      // 3
      eyebrow: "On the ticket",
      title: "Nine planks. Nine layouts.",
      note: "Working layouts captured between high school and the early twenties. Most are gone now. These are what survived the wipe.",
      items: [
        { no: "01", title: "Layout 16", year: "c. 2006" },
        { no: "02", title: "Layout 22", year: "c. 2007" },
        { no: "03", title: "Layout 28", year: "c. 2008" },
        { no: "04", title: "Layout 30", year: "c. 2008" },
        { no: "05", title: "Layout 32", year: "c. 2009" },
        { no: "06", title: "Layout 33", year: "c. 2009" },
        { no: "07", title: "Layout 34", year: "c. 2010" },
        { no: "08", title: "Layout 36", year: "c. 2011" },
        { no: "09", title: "Layout 38", year: "c. 2012" }
      ]
    },
    { type: "section", roman: "I", label: "Posters", subtitle: "nine layouts" },
    // 4
    {
      type: "poster",
      // 5
      no: "No. 01",
      year: "c. 2006",
      image: "layout-16.jpg",
      alt: "Tabulas layout 16",
      slogan: "Paint it yourself.",
      note: "First serious skin. View-source, copy, learn, break, try again.",
      sig: "Flora '06"
    },
    {
      type: "poster",
      // 6
      no: "No. 02",
      year: "c. 2007",
      image: "layout-22.jpg",
      alt: "Tabulas layout 22",
      slogan: "More color, more voice.",
      note: "Picked palettes the way you pick a profile song.",
      sig: "Flora '07"
    },
    {
      type: "poster",
      // 7
      no: "No. 03",
      year: "c. 2008",
      image: "layout-28.jpg",
      alt: "Tabulas layout 28",
      slogan: "The personal page.",
      note: "A blog post is a small front page. Treat it like one.",
      sig: "Flora '08"
    },
    {
      type: "poster",
      // 8
      no: "No. 04",
      year: "c. 2008",
      image: "layout-30.jpg",
      alt: "Tabulas layout 30",
      slogan: "Blog, don’t borrow.",
      note: "Templates are starting lines, not finish lines.",
      sig: "Flora '08"
    },
    {
      type: "poster",
      // 9
      no: "No. 05",
      year: "c. 2009",
      image: "layout-32.jpg",
      alt: "Tabulas layout 32",
      slogan: "Own your layout.",
      note: "CSS as self-portrait. Margins included.",
      sig: "Flora '09"
    },
    {
      type: "poster",
      // 10
      no: "No. 06",
      year: "c. 2009",
      image: "layout-33.jpg",
      alt: "Tabulas layout 33",
      slogan: "Everyone gets a front page.",
      note: "The internet was a town square and we all printed posters.",
      sig: "Flora '09"
    },
    {
      type: "poster",
      // 11
      no: "No. 07",
      year: "c. 2010",
      image: "layout-34.jpg",
      alt: "Tabulas layout 34",
      slogan: "Hand-coded, hand-picked.",
      note: "Pixels chosen, not approved by a committee.",
      sig: "Flora '10"
    },
    {
      type: "poster",
      // 12
      no: "No. 08",
      year: "c. 2011",
      image: "layout-36.jpg",
      alt: "Tabulas layout 36",
      slogan: "View · Source.",
      note: "How a generation learned to make websites.",
      sig: "Flora '11"
    },
    {
      type: "poster",
      // 13
      no: "No. 09",
      year: "c. 2012",
      image: "layout-38.jpg",
      alt: "Tabulas layout 38",
      slogan: "A new blog in every browser.",
      note: "Last one I kept. The platform faded; the habit stayed.",
      sig: "Flora '12"
    },
    {
      type: "endorsements",
      // 14
      eyebrow: "Endorsements",
      title: "A few words from supporters.",
      items: [
        { src: "The Friendster Times", quote: "A rare candidate who knows her selectors.", year: "2008" },
        { src: "The Multiply Tribune", quote: "“Background-color” is a value, not a personality.", year: "2009" },
        { src: "Y!M Press", quote: "Pro-personalization. Anti-pop-ups.", year: "2010" },
        { src: "The Notepad Gazette", quote: "Saved at 2am, shipped at 2:05.", year: "2011" }
      ],
      note: "Endorsements imagined for effect. Layouts are real."
    },
    {
      type: "campaign-colophon",
      // 15
      title: "A note to the voter.",
      credits: [
        { role: "Candidate", name: "Flora" },
        { role: "Term", name: "2003 — 2012" },
        { role: "Layouts", name: "Nine surviving" },
        { role: "Status", name: "Career, no longer hobby" }
      ],
      note: "Paid for by the Committee for Better Layouts. Originally hosted on tabulas.com; archived here. No actual office was sought; only an opinion about what the personal web should feel like."
    }
  ];
  const spreads = [
    { label: "Cover", page: 1 },
    { label: "Platform", page: 2 },
    { label: "Ticket", page: 3 },
    { label: "Posters", page: 4 },
    { label: "Endorsements", page: 14 },
    { label: "Note", page: 15 }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${entry?.data.title ?? "Tabulas"} — Flora May dela Cruz`, "description": entry?.data.summary, "ogType": "article", "jsonLd": jsonLd, "data-astro-cid-thz6gilr": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<article class="mx-auto max-w-3xl" data-astro-cid-thz6gilr> <nav class="text-sm text-muted" aria-label="Breadcrumb" data-astro-cid-thz6gilr> <ol class="flex flex-wrap items-center gap-1" data-astro-cid-thz6gilr> <li data-astro-cid-thz6gilr><a', ' class="hover:text-accent underline" data-astro-cid-thz6gilr>Play</a></li> <li aria-hidden="true" data-astro-cid-thz6gilr>/</li> <li class="text-ink/70 truncate" data-astro-cid-thz6gilr>', '</li> </ol> </nav> <p class="mt-6 text-sm uppercase tracking-widest text-muted" data-astro-cid-thz6gilr>Play</p> <h1 class="mt-2 font-serif text-4xl md:text-5xl text-ink" data-astro-cid-thz6gilr>', '</h1> <p class="mt-3 text-lg text-muted" data-astro-cid-thz6gilr>', '</p> <dl class="mt-6 grid grid-cols-2 gap-4 text-sm border-t border-cream pt-6" data-astro-cid-thz6gilr> <div data-astro-cid-thz6gilr><dt class="text-muted uppercase tracking-wider text-xs" data-astro-cid-thz6gilr>Medium</dt><dd class="mt-1 text-ink" data-astro-cid-thz6gilr>', '</dd></div> <div data-astro-cid-thz6gilr><dt class="text-muted uppercase tracking-wider text-xs" data-astro-cid-thz6gilr>Period</dt><dd class="mt-1 text-ink" data-astro-cid-thz6gilr>', '</dd></div> </dl> <p class="mt-8 text-sm text-muted italic" data-astro-cid-thz6gilr>Use the arrows, your keyboard, or swipe to turn the pages.</p> </article> <div class="book book-campaign mx-auto mt-10" id="book" data-astro-cid-thz6gilr> <div class="book-page-static book-left" id="book-left" data-astro-cid-thz6gilr></div> <div class="book-page-static book-right" id="book-right" data-astro-cid-thz6gilr></div> <div class="book-leaf" id="book-leaf" aria-hidden="true" data-astro-cid-thz6gilr> <div class="book-face book-face-front" id="leaf-front" data-astro-cid-thz6gilr></div> <div class="book-face book-face-back" id="leaf-back" data-astro-cid-thz6gilr></div> </div> </div> <div class="mx-auto mt-6 flex max-w-3xl items-center justify-between" data-astro-cid-thz6gilr> <button id="ndtb-prev" class="book-nav-text" aria-label="Previous page" data-astro-cid-thz6gilr>← Previous</button> <span class="text-sm text-muted font-serif italic" data-astro-cid-thz6gilr><span id="ndtb-current" data-astro-cid-thz6gilr>1</span> of <span id="ndtb-total" data-astro-cid-thz6gilr>', '</span></span> <button id="ndtb-next" class="book-nav-text" aria-label="Next page" data-astro-cid-thz6gilr>Next →</button> </div> <nav class="mx-auto mt-10 max-w-3xl border-t border-cream pt-6" data-astro-cid-thz6gilr> <p class="text-xs uppercase tracking-widest text-muted mb-3" data-astro-cid-thz6gilr>Contents</p> <ul class="flex flex-wrap gap-2" id="ndtb-toc" data-astro-cid-thz6gilr> ', ' </ul> </nav> <div hidden id="page-sources" data-astro-cid-thz6gilr> ', " </div> <script>\n    (function () {\n      const sources = Array.from(document.querySelectorAll('#page-sources > [data-page]'));\n      const book = document.getElementById('book');\n      const left = document.getElementById('book-left');\n      const right = document.getElementById('book-right');\n      const leaf = document.getElementById('book-leaf');\n      const leafFront = document.getElementById('leaf-front');\n      const leafBack = document.getElementById('leaf-back');\n      const counter = document.getElementById('ndtb-current');\n      const totalEl = document.getElementById('ndtb-total');\n      const prevBtn = document.getElementById('ndtb-prev');\n      const nextBtn = document.getElementById('ndtb-next');\n      const chips = document.querySelectorAll('#ndtb-toc button[data-page]');\n\n      const MOBILE_MQ = window.matchMedia('(max-width: 900px)');\n      const DURATION = 700;\n\n      function srcKind(srcEl) {\n        const first = srcEl.firstElementChild;\n        if (!first) return 'unknown';\n        const cls = first.classList[0] || '';\n        return cls.startsWith('p-') ? cls.slice(2) : cls;\n      }\n      function isCoverKind(k) { return k === 'cover' || k === 'magazine-cover' || k === 'dossier-cover' || k === 'campaign-cover'; }\n\n      function buildPaginatedHTML(srcEl, childSubset) {\n        const clone = srcEl.firstElementChild.cloneNode(true);\n        const container = clone.querySelector('[data-paginate]');\n        if (!container) return clone.outerHTML;\n        container.innerHTML = '';\n        childSubset.forEach((c) => container.appendChild(c.cloneNode(true)));\n        return clone.outerHTML;\n      }\n\n      function paginate(isMobile) {\n        if (!isMobile) {\n          return sources.map((src, i) => ({\n            html: src.innerHTML,\n            srcKind: srcKind(src),\n            srcIdx: i,\n          }));\n        }\n        const vpages = [];\n        for (let i = 0; i < sources.length; i++) {\n          const src = sources[i];\n          const kind = srcKind(src);\n          const container = src.querySelector('[data-paginate]');\n          if (!container) {\n            vpages.push({ html: src.innerHTML, srcKind: kind, srcIdx: i });\n            continue;\n          }\n          const children = Array.from(container.children);\n          if (children.length === 0) {\n            vpages.push({ html: src.innerHTML, srcKind: kind, srcIdx: i });\n            continue;\n          }\n          const chunks = [];\n          let start = 0;\n          while (start < children.length) {\n            let end = children.length;\n            while (end > start + 1) {\n              right.innerHTML = buildPaginatedHTML(src, children.slice(start, end));\n              const measureEl = right.querySelector('[data-paginate]') || right;\n              if (measureEl.scrollHeight <= measureEl.clientHeight + 1) break;\n              end--;\n            }\n            chunks.push([start, end]);\n            start = end;\n          }\n          if (chunks.length >= 2) {\n            const last = chunks[chunks.length - 1];\n            const onlyChild = last[1] - last[0] === 1 ? children[last[0]] : null;\n            if (onlyChild && onlyChild.classList && onlyChild.classList.contains('c-signoff')) {\n              chunks[chunks.length - 2][1] = last[1];\n              chunks.pop();\n            }\n          }\n          for (const [s, e] of chunks) {\n            vpages.push({\n              html: buildPaginatedHTML(src, children.slice(s, e)),\n              srcKind: kind,\n              srcIdx: i,\n            });\n          }\n        }\n        right.innerHTML = '';\n        return vpages;\n      }\n\n      let virtualPages = [];\n      const vpHtml = (i) => (virtualPages[i] ? virtualPages[i].html : '');\n\n      function buildStops(isMobile) {\n        const coverVp = virtualPages.findIndex((v) => isCoverKind(v.srcKind));\n        const stops = coverVp >= 0 ? [{ right: coverVp, single: true, closed: true }] : [];\n        if (isMobile) {\n          for (let i = 0; i < virtualPages.length; i++) {\n            const k = virtualPages[i].srcKind;\n            if (k === 'blank' || isCoverKind(k)) continue;\n            stops.push({ right: i, single: true });\n          }\n          return stops;\n        }\n        const rest = [];\n        for (let i = 0; i < virtualPages.length; i++) {\n          const k = virtualPages[i].srcKind;\n          if (k === 'blank' || isCoverKind(k)) continue;\n          rest.push(i);\n        }\n        for (let i = 0; i < rest.length; i += 2) {\n          stops.push({ left: rest[i], right: rest[i + 1] });\n        }\n        return stops;\n      }\n\n      function stopIndexForVp(vpIdx) {\n        const i = stops.findIndex((s) => s.right === vpIdx || s.left === vpIdx);\n        return i < 0 ? 0 : i;\n      }\n      function firstVpForSrc(srcIdx) {\n        return virtualPages.findIndex((v) => v.srcIdx === srcIdx);\n      }\n\n      let isMobile = MOBILE_MQ.matches;\n      let stops = [];\n      let idx = 0;\n      let flipping = false;\n      const isSingle = (s) => !!(s && (s.single || isMobile));\n\n      function rebuild(preserveSrcIdx) {\n        virtualPages = paginate(isMobile);\n        stops = buildStops(isMobile);\n        if (preserveSrcIdx != null) {\n          const vp = firstVpForSrc(preserveSrcIdx);\n          idx = vp >= 0 ? stopIndexForVp(vp) : 0;\n        }\n        if (idx >= stops.length) idx = stops.length - 1;\n        if (idx < 0) idx = 0;\n        renderStatic();\n      }\n\n      function renderStatic() {\n        const s = stops[idx];\n        if (!s) return;\n        const single = isSingle(s);\n        book.classList.toggle('is-single', single);\n        book.classList.toggle('is-closed', !!s.closed);\n        if (single) {\n          right.innerHTML = vpHtml(s.right);\n          left.innerHTML = '';\n        } else {\n          left.innerHTML = vpHtml(s.left);\n          right.innerHTML = vpHtml(s.right);\n        }\n        if (counter) counter.textContent = String(idx + 1);\n        if (totalEl) totalEl.textContent = String(stops.length);\n        chips.forEach((c) => {\n          const srcIdx = Number(c.dataset.page);\n          const vp = firstVpForSrc(srcIdx);\n          c.classList.toggle('is-current', vp >= 0 && stopIndexForVp(vp) === idx);\n        });\n        if (prevBtn) prevBtn.disabled = idx === 0;\n        if (nextBtn) nextBtn.disabled = idx === stops.length - 1;\n      }\n\n      function flipForward() {\n        if (flipping || idx >= stops.length - 1) return;\n        const cur = stops[idx];\n        const next = stops[idx + 1];\n        if (!cur || !next) return;\n        flipping = true;\n        const single = isSingle(cur);\n        const nextSingle = isSingle(next);\n        leafFront.innerHTML = single ? vpHtml(cur.right) : vpHtml(cur.right);\n        leafBack.innerHTML  = nextSingle ? vpHtml(next.right) : vpHtml(next.left);\n        if (!single && !nextSingle) {\n          right.innerHTML = vpHtml(next.right);\n        } else if (single && !nextSingle) {\n          left.innerHTML = '';\n          right.innerHTML = vpHtml(next.right);\n          book.classList.remove('is-single');\n        } else if (!single && nextSingle) {\n          right.innerHTML = '';\n        }\n        leaf.classList.add('is-active', 'flip-forward');\n        setTimeout(() => {\n          leaf.classList.remove('is-active', 'flip-forward');\n          leafFront.innerHTML = ''; leafBack.innerHTML = '';\n          idx++;\n          flipping = false;\n          renderStatic();\n        }, DURATION);\n      }\n\n      function flipBackward() {\n        if (flipping || idx <= 0) return;\n        const cur = stops[idx];\n        const prev = stops[idx - 1];\n        if (!cur || !prev) return;\n        flipping = true;\n        const single = isSingle(cur);\n        const prevSingle = isSingle(prev);\n        leafFront.innerHTML = single ? vpHtml(cur.right) : vpHtml(cur.left);\n        leafBack.innerHTML  = prevSingle ? vpHtml(prev.right) : vpHtml(prev.right);\n        if (!single && !prevSingle) {\n          left.innerHTML = vpHtml(prev.left);\n        } else if (single && !prevSingle) {\n          left.innerHTML = vpHtml(prev.left);\n          right.innerHTML = vpHtml(prev.right);\n          book.classList.remove('is-single');\n        }\n        leaf.classList.add('is-active', 'flip-backward');\n        setTimeout(() => {\n          leaf.classList.remove('is-active', 'flip-backward');\n          leafFront.innerHTML = ''; leafBack.innerHTML = '';\n          idx--;\n          flipping = false;\n          renderStatic();\n        }, DURATION);\n      }\n\n      function jumpToStop(target) {\n        if (target < 0 || target >= stops.length) return;\n        if (target === idx) return;\n        if (Math.abs(target - idx) === 1) {\n          target > idx ? flipForward() : flipBackward();\n        } else {\n          idx = target;\n          renderStatic();\n        }\n      }\n\n      prevBtn?.addEventListener('click', flipBackward);\n      nextBtn?.addEventListener('click', flipForward);\n      chips.forEach((c) => {\n        c.addEventListener('click', () => {\n          const srcIdx = Number(c.dataset.page);\n          const vp = firstVpForSrc(srcIdx);\n          if (vp >= 0) jumpToStop(stopIndexForVp(vp));\n        });\n      });\n      document.addEventListener('keydown', (e) => {\n        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;\n        if (e.key === 'ArrowRight') flipForward();\n        else if (e.key === 'ArrowLeft') flipBackward();\n      });\n\n      let touchStartX = null;\n      let touchStartY = null;\n      let touchAxis = null;\n      book.addEventListener('touchstart', (e) => {\n        touchStartX = e.changedTouches[0].clientX;\n        touchStartY = e.changedTouches[0].clientY;\n        touchAxis = null;\n      }, { passive: true });\n      book.addEventListener('touchmove', (e) => {\n        if (touchStartX === null || touchStartY === null || touchAxis) return;\n        const dx = e.changedTouches[0].clientX - touchStartX;\n        const dy = e.changedTouches[0].clientY - touchStartY;\n        if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;\n        touchAxis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';\n      }, { passive: true });\n      book.addEventListener('touchend', (e) => {\n        if (touchStartX === null || touchStartY === null) return;\n        const dx = e.changedTouches[0].clientX - touchStartX;\n        const dy = e.changedTouches[0].clientY - touchStartY;\n        const horizontalIntent = touchAxis === 'x' && Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2;\n        if (horizontalIntent) (dx < 0 ? flipForward() : flipBackward());\n        touchStartX = null;\n        touchStartY = null;\n        touchAxis = null;\n      }, { passive: true });\n      book.addEventListener('touchcancel', () => {\n        touchStartX = null;\n        touchStartY = null;\n        touchAxis = null;\n      }, { passive: true });\n\n      MOBILE_MQ.addEventListener('change', (e) => {\n        const preserveSrc = stops[idx] ? virtualPages[stops[idx].right]?.srcIdx : null;\n        isMobile = e.matches;\n        rebuild(preserveSrc);\n      });\n\n      rebuild();\n    })();\n  </script>  "])), maybeRenderHead(), addAttribute(`${base}play`, "href"), entry?.data.title ?? "Tabulas", entry?.data.title, entry?.data.summary, entry?.data.medium, entry?.data.year, spreads.length, spreads.map((s) => renderTemplate`<li data-astro-cid-thz6gilr><button${addAttribute(s.page, "data-page")} class="book-toc-chip" data-astro-cid-thz6gilr>${s.label}</button></li>`), pages.map((p, i) => renderTemplate`<div${addAttribute(i, "data-page")} data-astro-cid-thz6gilr> ${p.type === "blank" && renderTemplate`<div class="p-blank" data-astro-cid-thz6gilr></div>`} ${p.type === "campaign-cover" && renderTemplate`<div class="p-cover p-campaign-cover" data-astro-cid-thz6gilr> <div class="c-cov-frame" aria-hidden="true" data-astro-cid-thz6gilr></div> <span class="c-stamp c-stamp-tl" aria-hidden="true" data-astro-cid-thz6gilr>${p.badge}</span> <div class="c-cov-top" data-astro-cid-thz6gilr> <span class="c-cov-eyebrow" data-astro-cid-thz6gilr>${p.fileLabel}</span> <span class="c-cov-stars" aria-hidden="true" data-astro-cid-thz6gilr>★ ★ ★ ★ ★</span> </div> <div class="c-cov-mid" data-astro-cid-thz6gilr> <p class="c-cov-vote" data-astro-cid-thz6gilr>Vote</p> <h2 class="c-cov-title" data-astro-cid-thz6gilr>Tabulas</h2> <p class="c-cov-tagline" data-astro-cid-thz6gilr>${p.tagline}</p> ${p.image && renderTemplate`<div class="c-cov-photo" data-astro-cid-thz6gilr> ${(() => {
    const meta = playImageMeta("tabulas", p.image);
    return renderTemplate`<img${addAttribute(meta.src, "src")} alt="" loading="eager" fetchpriority="high" decoding="async"${spreadAttributes(meta.size ? { width: meta.size.width, height: meta.size.height } : {}, void 0, { "class": "astro-thz6gilr" })} data-astro-cid-thz6gilr>`;
  })()} </div>`} </div> <dl class="c-cov-meta" data-astro-cid-thz6gilr> ${p.meta?.map((m) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-thz6gilr": true }, { "default": async ($$result3) => renderTemplate` <dt data-astro-cid-thz6gilr>${m.k}</dt> <dd data-astro-cid-thz6gilr>${m.v}</dd> ` })}`)} </dl> </div>`} ${p.type === "platform" && renderTemplate`<div class="p-platform" data-astro-cid-thz6gilr> <p class="c-eyebrow" data-astro-cid-thz6gilr>${p.eyebrow}</p> <h2 class="c-title" data-astro-cid-thz6gilr>${p.title}</h2> <div class="c-body" data-paginate data-astro-cid-thz6gilr> ${p.body?.map((para, j) => renderTemplate`<p${addAttribute(j === 0 ? "c-lead" : "", "class")} data-astro-cid-thz6gilr>${para}</p>`)} ${p.signoff && renderTemplate`<p class="c-signoff" data-astro-cid-thz6gilr>— ${p.signoff}</p>`} </div> </div>`} ${p.type === "ticket" && renderTemplate`<div class="p-ticket" data-astro-cid-thz6gilr> <p class="c-eyebrow" data-astro-cid-thz6gilr>${p.eyebrow}</p> <h2 class="c-title" data-astro-cid-thz6gilr>${p.title}</h2> <ol class="c-tk-list" data-astro-cid-thz6gilr> ${p.items?.map((it) => renderTemplate`<li data-astro-cid-thz6gilr> <span class="c-tk-no" data-astro-cid-thz6gilr>${it.no}</span> <span class="c-tk-title" data-astro-cid-thz6gilr>${it.title}</span> <span class="c-tk-dot" aria-hidden="true" data-astro-cid-thz6gilr></span> <span class="c-tk-year" data-astro-cid-thz6gilr>${it.year}</span> </li>`)} </ol> ${p.note && renderTemplate`<p class="c-tk-note" data-astro-cid-thz6gilr>${p.note}</p>`} </div>`} ${p.type === "section" && renderTemplate`<div class="p-section p-section-campaign" data-astro-cid-thz6gilr> <p class="p-sec-roman" data-astro-cid-thz6gilr>${p.roman}</p> <h2 class="p-sec-label" data-astro-cid-thz6gilr>${p.label}</h2> <p class="p-sec-sub" data-astro-cid-thz6gilr>${p.subtitle}</p> </div>`} ${p.type === "poster" && renderTemplate`<div class="p-poster" data-astro-cid-thz6gilr> <div class="c-pst-header" data-astro-cid-thz6gilr> <span class="c-pst-no" data-astro-cid-thz6gilr>Poster ${p.no}</span> <span class="c-pst-year" data-astro-cid-thz6gilr>${p.year}</span> </div> <div class="c-pst-photo" data-astro-cid-thz6gilr> ${(() => {
    const meta = playImageMeta("tabulas", p.image);
    return renderTemplate`<img${addAttribute(meta.src, "src")}${addAttribute(p.alt, "alt")} loading="lazy" decoding="async"${spreadAttributes(meta.size ? { width: meta.size.width, height: meta.size.height } : {}, void 0, { "class": "astro-thz6gilr" })} data-astro-cid-thz6gilr>`;
  })()} </div> <div class="c-pst-info" data-astro-cid-thz6gilr> <p class="c-pst-vote" aria-hidden="true" data-astro-cid-thz6gilr>Vote</p> <h3 class="c-pst-slogan" data-astro-cid-thz6gilr>${p.slogan}</h3> ${p.note && renderTemplate`<p class="c-pst-note" data-astro-cid-thz6gilr>${p.note}</p>`} <p class="c-pst-sig" data-astro-cid-thz6gilr>${p.sig}</p> </div> </div>`} ${p.type === "endorsements" && renderTemplate`<div class="p-endorsements" data-astro-cid-thz6gilr> <p class="c-eyebrow" data-astro-cid-thz6gilr>${p.eyebrow}</p> <h2 class="c-title" data-astro-cid-thz6gilr>${p.title}</h2> <ul class="c-end-list" data-paginate data-astro-cid-thz6gilr> ${p.items?.map((it) => renderTemplate`<li data-astro-cid-thz6gilr> <p class="c-end-quote" data-astro-cid-thz6gilr>“${it.quote}”</p> <p class="c-end-src" data-astro-cid-thz6gilr><span data-astro-cid-thz6gilr>${it.src}</span><span data-astro-cid-thz6gilr>${it.year}</span></p> </li>`)} </ul> ${p.note && renderTemplate`<p class="c-end-note" data-astro-cid-thz6gilr>${p.note}</p>`} </div>`} ${p.type === "campaign-colophon" && renderTemplate`<div class="p-campaign-colophon" data-astro-cid-thz6gilr> <span class="c-stamp c-stamp-end" aria-hidden="true" data-astro-cid-thz6gilr>Polls closed</span> <h2 class="c-title" data-astro-cid-thz6gilr>${p.title}</h2> <dl class="c-col-list" data-astro-cid-thz6gilr> ${p.credits?.map((c) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-thz6gilr": true }, { "default": async ($$result3) => renderTemplate` <dt data-astro-cid-thz6gilr>${c.role}</dt> <dd data-astro-cid-thz6gilr>${c.name}</dd> ` })}`)} </dl> <p class="c-col-note" data-astro-cid-thz6gilr>${p.note}</p> </div>`} </div>`)) })}`;
}, "/private/tmp/flora-component-build/src/pages/play/tabulas.astro", void 0);
const $$file = "/private/tmp/flora-component-build/src/pages/play/tabulas.astro";
const $$url = "/play/tabulas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tabulas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
