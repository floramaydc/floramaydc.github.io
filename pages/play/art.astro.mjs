/* empty css                                    */
import { p as createAstro, q as createComponent, w as renderComponent, D as renderTemplate, o as addAttribute, H as spreadAttributes, g as Fragment, v as maybeRenderHead } from '../../chunks/astro/server_D37m5tNR.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Dd7kTHl0.mjs';
import { b as getEntry } from '../../chunks/_astro_content_XxXwbPTn.mjs';
import { g as getPublicImageSize } from '../../chunks/publicImageSize_tT-4UM5E.mjs';
/* empty css                                  */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.floramaydc.com");
const $$Art = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Art;
  const base = "/".endsWith("/") ? "/" : "//";
  const entry = await getEntry("play", "art");
  const siteUrl = (Astro2.site?.toString() ?? "https://www.floramaydc.com/").replace(/\/$/, "");
  const playUrl = `${siteUrl}/play/art/`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: entry?.data.title ?? "Art",
      headline: entry?.data.title ?? "Art",
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
        { "@type": "ListItem", position: 2, name: entry?.data.title ?? "Art", item: playUrl }
      ]
    }
  ];
  function playImageMeta(folder, fileName) {
    const imagePath = `images/play/${folder}/${fileName}`;
    const imageSize = getPublicImageSize(imagePath);
    return {
      src: `${base}${imagePath}`,
      size: imageSize
    };
  }
  const pages = [
    { type: "blank" },
    // 0  inside front cover
    {
      type: "dossier-cover",
      // 1  cover (closed-book state)
      fileLabel: "Dossier No. 02",
      title: "Art",
      tagline: "A working catalog",
      image: "01-stars-woman.jpg",
      meta: [
        { k: "Subject", v: "F.M. dela Cruz" },
        { k: "Period", v: "2014 — ongoing" },
        { k: "Filed", v: "12 works" },
        { k: "Class.", v: "Personal archive" }
      ],
      stamp: "Personal archive"
    },
    {
      type: "profile",
      // 2
      eyebrow: "Subject profile",
      title: "What this file is for",
      body: [
        "I draw and paint to clear my head. No specific style, no rules — sometimes a quick sketch on a notebook page, sometimes a slow afternoon with acrylics.",
        "What follows is a working file of the pieces I've kept. They're not organised by movement or period; they're filed in roughly the order I made them. Read it as a sketchbook, not a retrospective."
      ],
      signoff: "F.M."
    },
    {
      type: "catalog",
      // 3
      eyebrow: "Manifest",
      title: "Catalog of works",
      note: "Twelve pieces. Working titles where untitled.",
      items: [
        { no: "01", title: "In Flag Colors", year: "c. 2022" },
        { no: "02", title: "ZCAR", year: "2020" },
        { no: "03", title: "Red Country", year: "c. 2014" },
        { no: "04", title: "Red & Purple", year: "c. 2022" },
        { no: "05", title: "Heart in Bloom", year: "c. 2022" },
        { no: "06", title: "Loose Strokes", year: "2020" },
        { no: "07", title: "Heat Map", year: "2020" },
        { no: "08", title: "Forest at Dusk", year: "c. 2022" },
        { no: "09", title: "Tidewater", year: "c. 2023" },
        { no: "10", title: "Wave Lines", year: "c. 2023" },
        { no: "11", title: "Field Notes", year: "c. 2023" },
        { no: "12", title: "Sun Bouquet", year: "c. 2022" }
      ]
    },
    { type: "section", roman: "I", label: "Exhibits", subtitle: "twelve works" },
    // 4
    {
      type: "specimen",
      // 5
      file: "ART-0001",
      title: "In Flag Colors",
      year: "c. 2022",
      medium: "Painting",
      image: "01-stars-woman.jpg",
      alt: "Painting of a woman in a pink dress with long, two-toned red and blue hair, embellished with gold stars.",
      note: "Figure study. The palette nods to home — the red, blue, and gold of the Philippine flag, with the stars woven into her hair."
    },
    {
      type: "specimen",
      // 6
      file: "ART-0002",
      title: "ZCAR",
      year: "2020",
      medium: "Painting",
      image: "02-red-car.jpg",
      alt: "Painting of a red sports car in front of a blue, cloudy sky.",
      note: "Nick's 240Z Datsun. He loves that car; it's been sidelined a while now. Painted as a kind of stand-in while it waits to run again."
    },
    {
      type: "specimen",
      // 7
      file: "ART-0003",
      title: "Red Country",
      year: "c. 2014",
      medium: "Painting",
      image: "03-fiery-sunset.jpg",
      alt: "Abstract painting of a fiery landscape with a red sunset over dark mountains and a reflective surface below.",
      note: "An early one. A sunset; more weight than color suggests."
    },
    {
      type: "specimen",
      // 8
      file: "ART-0004",
      title: "Red & Purple",
      year: "c. 2022",
      medium: "Painting",
      image: "04-red-purple.jpg",
      alt: "Abstract painting with red, purple, and pink hues; textured brushstrokes and layered effects.",
      note: "Layered colour study."
    },
    {
      type: "specimen",
      // 9
      file: "ART-0005",
      title: "Heart in Bloom",
      year: "c. 2022",
      medium: "Graphite on paper",
      image: "05-heart-flowers.jpg",
      alt: "Pencil drawing of a human heart with daisies and a hibiscus growing from it.",
      note: "Designed as a tattoo for a friend. The flowers nod to those from home — the Philippines — threaded through an anatomical heart."
    },
    {
      type: "specimen",
      // 10
      file: "ART-0006",
      title: "Loose Strokes",
      year: "2020",
      medium: "Painting",
      image: "06-color-strokes.jpg",
      alt: "Abstract painting with colorful brushstrokes.",
      note: "Improvisation; no plan."
    },
    {
      type: "specimen",
      // 11
      file: "ART-0007",
      title: "Heat Map",
      year: "2020",
      medium: "Painting",
      image: "07-textured.jpg",
      alt: "Colorful abstract painting with textured brushstrokes in red, orange, blue, and black.",
      note: "Texture-led; warm against cool."
    },
    {
      type: "specimen",
      // 12
      file: "ART-0008",
      title: "Forest at Dusk",
      year: "c. 2022",
      medium: "Painting",
      image: "08-green-trees.jpg",
      alt: "Abstract painting of trees with textured green foliage; sky of swirling red and orange.",
      note: "Landscape with a high-chroma sky."
    },
    {
      type: "specimen",
      // 13
      file: "ART-0009",
      title: "Tidewater",
      year: "c. 2023",
      medium: "Painting",
      image: "09-swirls.jpg",
      alt: "Abstract painting with orange, blue, and gray swirls.",
      note: "Movement study."
    },
    {
      type: "specimen",
      // 14
      file: "ART-0010",
      title: "Wave Lines",
      year: "c. 2023",
      medium: "Painting",
      image: "10-wavy.jpg",
      alt: "Abstract art with wavy patterns in yellow, orange, green, and blue.",
      note: "Ribbon-like forms; pattern over composition."
    },
    {
      type: "specimen",
      // 15
      file: "ART-0011",
      title: "Field Notes",
      year: "c. 2023",
      medium: "Mixed media",
      image: "11-multi-strokes.jpg",
      alt: "Abstract art with textured brushstrokes in black, green, orange, red, and yellow.",
      note: "Loose marks from a quick session."
    },
    {
      type: "specimen",
      // 16
      file: "ART-0012",
      title: "Sun Bouquet",
      year: "c. 2022",
      medium: "Painting",
      image: "12-yellow-flowers.jpg",
      alt: "Painting of six yellow flowers with green leaves on a light ground.",
      note: "Six blooms on a plain ground."
    },
    {
      type: "dossier-colophon",
      // 17
      title: "End of file",
      credits: [
        { role: "Maker", name: "Flora" },
        { role: "Period", name: "2014 — ongoing" },
        { role: "Pieces", name: "Twelve filed" },
        { role: "Status", name: "Open — adding when I can" }
      ],
      note: "Working titles and approximate dates; mediums noted from observation. Originally hosted at floramaydc.com/artwork. Ported here as part of the portfolio archive."
    }
  ];
  const spreads = [
    { label: "Cover", page: 1 },
    { label: "Profile", page: 2 },
    { label: "Manifest", page: 3 },
    { label: "Exhibits", page: 4 },
    { label: "End", page: 17 }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${entry?.data.title ?? "Art"} — Flora May dela Cruz`, "description": entry?.data.summary, "ogType": "article", "jsonLd": jsonLd, "data-astro-cid-2c2tyety": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<article class="mx-auto max-w-3xl" data-astro-cid-2c2tyety> <nav class="text-sm text-muted" aria-label="Breadcrumb" data-astro-cid-2c2tyety> <ol class="flex flex-wrap items-center gap-1" data-astro-cid-2c2tyety> <li data-astro-cid-2c2tyety><a', ' class="hover:text-accent underline" data-astro-cid-2c2tyety>Play</a></li> <li aria-hidden="true" data-astro-cid-2c2tyety>/</li> <li class="text-ink/70 truncate" data-astro-cid-2c2tyety>', '</li> </ol> </nav> <p class="mt-6 text-sm uppercase tracking-widest text-muted" data-astro-cid-2c2tyety>Play</p> <h1 class="mt-2 font-serif text-4xl md:text-5xl text-ink" data-astro-cid-2c2tyety>', '</h1> <p class="mt-3 text-lg text-muted" data-astro-cid-2c2tyety>', '</p> <dl class="mt-6 grid grid-cols-2 gap-4 text-sm border-t border-cream pt-6" data-astro-cid-2c2tyety> <div data-astro-cid-2c2tyety><dt class="text-muted uppercase tracking-wider text-xs" data-astro-cid-2c2tyety>Medium</dt><dd class="mt-1 text-ink" data-astro-cid-2c2tyety>', '</dd></div> <div data-astro-cid-2c2tyety><dt class="text-muted uppercase tracking-wider text-xs" data-astro-cid-2c2tyety>Period</dt><dd class="mt-1 text-ink" data-astro-cid-2c2tyety>', '</dd></div> </dl> <p class="mt-8 text-sm text-muted italic" data-astro-cid-2c2tyety>Use the arrows, your keyboard, or swipe to turn the pages.</p> </article> <div class="book book-dossier mx-auto mt-10" id="book" data-astro-cid-2c2tyety> <div class="book-page-static book-left" id="book-left" data-astro-cid-2c2tyety></div> <div class="book-page-static book-right" id="book-right" data-astro-cid-2c2tyety></div> <div class="book-leaf" id="book-leaf" aria-hidden="true" data-astro-cid-2c2tyety> <div class="book-face book-face-front" id="leaf-front" data-astro-cid-2c2tyety></div> <div class="book-face book-face-back" id="leaf-back" data-astro-cid-2c2tyety></div> </div> </div> <div class="mx-auto mt-6 flex max-w-3xl items-center justify-between" data-astro-cid-2c2tyety> <button id="ndtb-prev" class="book-nav-text" aria-label="Previous page" data-astro-cid-2c2tyety>← Previous</button> <span class="text-sm text-muted font-serif italic" data-astro-cid-2c2tyety><span id="ndtb-current" data-astro-cid-2c2tyety>1</span> of <span id="ndtb-total" data-astro-cid-2c2tyety>', '</span></span> <button id="ndtb-next" class="book-nav-text" aria-label="Next page" data-astro-cid-2c2tyety>Next →</button> </div> <nav class="mx-auto mt-10 max-w-3xl border-t border-cream pt-6" data-astro-cid-2c2tyety> <p class="text-xs uppercase tracking-widest text-muted mb-3" data-astro-cid-2c2tyety>Contents</p> <ul class="flex flex-wrap gap-2" id="ndtb-toc" data-astro-cid-2c2tyety> ', ' </ul> </nav> <div hidden id="page-sources" data-astro-cid-2c2tyety> ', " </div> <script>\n    (function () {\n      const sources = Array.from(document.querySelectorAll('#page-sources > [data-page]'));\n      const book = document.getElementById('book');\n      const left = document.getElementById('book-left');\n      const right = document.getElementById('book-right');\n      const leaf = document.getElementById('book-leaf');\n      const leafFront = document.getElementById('leaf-front');\n      const leafBack = document.getElementById('leaf-back');\n      const counter = document.getElementById('ndtb-current');\n      const totalEl = document.getElementById('ndtb-total');\n      const prevBtn = document.getElementById('ndtb-prev');\n      const nextBtn = document.getElementById('ndtb-next');\n      const chips = document.querySelectorAll('#ndtb-toc button[data-page]');\n\n      const MOBILE_MQ = window.matchMedia('(max-width: 900px)');\n      const DURATION = 700;\n\n      function srcKind(srcEl) {\n        const first = srcEl.firstElementChild;\n        if (!first) return 'unknown';\n        const cls = first.classList[0] || '';\n        return cls.startsWith('p-') ? cls.slice(2) : cls;\n      }\n      function isCoverKind(k) { return k === 'cover' || k === 'magazine-cover' || k === 'dossier-cover'; }\n\n      function buildPaginatedHTML(srcEl, childSubset) {\n        const clone = srcEl.firstElementChild.cloneNode(true);\n        const container = clone.querySelector('[data-paginate]');\n        if (!container) return clone.outerHTML;\n        container.innerHTML = '';\n        childSubset.forEach((c) => container.appendChild(c.cloneNode(true)));\n        return clone.outerHTML;\n      }\n\n      function paginate(isMobile) {\n        if (!isMobile) {\n          return sources.map((src, i) => ({\n            html: src.innerHTML,\n            srcKind: srcKind(src),\n            srcIdx: i,\n          }));\n        }\n        const vpages = [];\n        for (let i = 0; i < sources.length; i++) {\n          const src = sources[i];\n          const kind = srcKind(src);\n          const container = src.querySelector('[data-paginate]');\n          if (!container) {\n            vpages.push({ html: src.innerHTML, srcKind: kind, srcIdx: i });\n            continue;\n          }\n          const children = Array.from(container.children);\n          if (children.length === 0) {\n            vpages.push({ html: src.innerHTML, srcKind: kind, srcIdx: i });\n            continue;\n          }\n          const chunks = [];\n          let start = 0;\n          while (start < children.length) {\n            let end = children.length;\n            while (end > start + 1) {\n              right.innerHTML = buildPaginatedHTML(src, children.slice(start, end));\n              const measureEl = right.querySelector('[data-paginate]') || right;\n              if (measureEl.scrollHeight <= measureEl.clientHeight + 1) break;\n              end--;\n            }\n            chunks.push([start, end]);\n            start = end;\n          }\n          if (chunks.length >= 2) {\n            const last = chunks[chunks.length - 1];\n            const onlyChild = last[1] - last[0] === 1 ? children[last[0]] : null;\n            if (onlyChild && onlyChild.classList && onlyChild.classList.contains('d-signoff')) {\n              chunks[chunks.length - 2][1] = last[1];\n              chunks.pop();\n            }\n          }\n          for (const [s, e] of chunks) {\n            vpages.push({\n              html: buildPaginatedHTML(src, children.slice(s, e)),\n              srcKind: kind,\n              srcIdx: i,\n            });\n          }\n        }\n        right.innerHTML = '';\n        return vpages;\n      }\n\n      let virtualPages = [];\n      const vpHtml = (i) => (virtualPages[i] ? virtualPages[i].html : '');\n\n      function buildStops(isMobile) {\n        const coverVp = virtualPages.findIndex((v) => isCoverKind(v.srcKind));\n        const stops = coverVp >= 0 ? [{ right: coverVp, single: true, closed: true }] : [];\n        if (isMobile) {\n          for (let i = 0; i < virtualPages.length; i++) {\n            const k = virtualPages[i].srcKind;\n            if (k === 'blank' || isCoverKind(k)) continue;\n            stops.push({ right: i, single: true });\n          }\n          return stops;\n        }\n        const rest = [];\n        for (let i = 0; i < virtualPages.length; i++) {\n          const k = virtualPages[i].srcKind;\n          if (k === 'blank' || isCoverKind(k)) continue;\n          rest.push(i);\n        }\n        for (let i = 0; i < rest.length; i += 2) {\n          stops.push({ left: rest[i], right: rest[i + 1] });\n        }\n        return stops;\n      }\n\n      function stopIndexForVp(vpIdx) {\n        const i = stops.findIndex((s) => s.right === vpIdx || s.left === vpIdx);\n        return i < 0 ? 0 : i;\n      }\n      function firstVpForSrc(srcIdx) {\n        return virtualPages.findIndex((v) => v.srcIdx === srcIdx);\n      }\n\n      let isMobile = MOBILE_MQ.matches;\n      let stops = [];\n      let idx = 0;\n      let flipping = false;\n      const isSingle = (s) => !!(s && (s.single || isMobile));\n\n      function rebuild(preserveSrcIdx) {\n        virtualPages = paginate(isMobile);\n        stops = buildStops(isMobile);\n        if (preserveSrcIdx != null) {\n          const vp = firstVpForSrc(preserveSrcIdx);\n          idx = vp >= 0 ? stopIndexForVp(vp) : 0;\n        }\n        if (idx >= stops.length) idx = stops.length - 1;\n        if (idx < 0) idx = 0;\n        renderStatic();\n      }\n\n      function renderStatic() {\n        const s = stops[idx];\n        if (!s) return;\n        const single = isSingle(s);\n        book.classList.toggle('is-single', single);\n        book.classList.toggle('is-closed', !!s.closed);\n        if (single) {\n          right.innerHTML = vpHtml(s.right);\n          left.innerHTML = '';\n        } else {\n          left.innerHTML = vpHtml(s.left);\n          right.innerHTML = vpHtml(s.right);\n        }\n        counter.textContent = String(idx + 1);\n        totalEl.textContent = String(stops.length);\n        chips.forEach((c) => {\n          const cp = parseInt(c.getAttribute('data-page'), 10);\n          const vp = firstVpForSrc(cp);\n          c.classList.toggle('is-current', vp >= 0 && stopIndexForVp(vp) === idx);\n        });\n        prevBtn.style.visibility = idx === 0 ? 'hidden' : 'visible';\n        nextBtn.style.visibility = idx === stops.length - 1 ? 'hidden' : 'visible';\n      }\n\n      function flipForward() {\n        if (flipping || idx >= stops.length - 1) return;\n        const curr = stops[idx];\n        const next = stops[idx + 1];\n        if (isSingle(curr) !== isSingle(next)) { idx++; renderStatic(); return; }\n        flipping = true;\n        if (isSingle(curr)) {\n          leafFront.innerHTML = vpHtml(curr.right);\n          leafBack.innerHTML = vpHtml(next.right);\n          right.innerHTML = vpHtml(next.right);\n        } else {\n          leafFront.innerHTML = vpHtml(curr.right);\n          leafBack.innerHTML = vpHtml(next.left);\n          right.innerHTML = vpHtml(next.right);\n        }\n        leaf.classList.add('is-active', 'flip-forward');\n        setTimeout(() => {\n          leaf.classList.remove('is-active', 'flip-forward');\n          idx++; renderStatic(); flipping = false;\n        }, DURATION);\n      }\n\n      function flipBackward() {\n        if (flipping || idx <= 0) return;\n        const curr = stops[idx];\n        const prev = stops[idx - 1];\n        if (isSingle(curr) !== isSingle(prev)) { idx--; renderStatic(); return; }\n        flipping = true;\n        if (isSingle(curr)) {\n          leafFront.innerHTML = vpHtml(curr.right);\n          leafBack.innerHTML = vpHtml(prev.right);\n          right.innerHTML = vpHtml(prev.right);\n        } else {\n          leafFront.innerHTML = vpHtml(curr.left);\n          leafBack.innerHTML = vpHtml(prev.right);\n          left.innerHTML = vpHtml(prev.left);\n        }\n        leaf.classList.add('is-active', 'flip-backward');\n        setTimeout(() => {\n          leaf.classList.remove('is-active', 'flip-backward');\n          idx--; renderStatic(); flipping = false;\n        }, DURATION);\n      }\n\n      function jumpToStop(target) {\n        if (flipping || target === idx || target < 0 || target >= stops.length) return;\n        if (Math.abs(target - idx) === 1) {\n          target > idx ? flipForward() : flipBackward();\n        } else { idx = target; renderStatic(); }\n      }\n\n      function handleModeChange() {\n        const newMobile = MOBILE_MQ.matches;\n        if (newMobile === isMobile) return;\n        const currentSrcIdx = virtualPages[stops[idx].right] && virtualPages[stops[idx].right].srcIdx;\n        isMobile = newMobile;\n        rebuild(currentSrcIdx);\n      }\n\n      rebuild();\n      MOBILE_MQ.addEventListener\n        ? MOBILE_MQ.addEventListener('change', handleModeChange)\n        : MOBILE_MQ.addListener(handleModeChange);\n\n      nextBtn.addEventListener('click', flipForward);\n      prevBtn.addEventListener('click', flipBackward);\n      document.addEventListener('keydown', (e) => {\n        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;\n        if (e.key === 'ArrowRight') flipForward();\n        else if (e.key === 'ArrowLeft') flipBackward();\n      });\n      chips.forEach((b) =>\n        b.addEventListener('click', () => {\n          const srcIdx = parseInt(b.getAttribute('data-page'), 10);\n          const vp = firstVpForSrc(srcIdx);\n          if (vp < 0) return;\n          jumpToStop(stopIndexForVp(vp));\n        })\n      );\n\n      let touchStartX = null;\n      let touchStartY = null;\n      let touchAxis = null;\n      book.addEventListener('touchstart', (e) => {\n        touchStartX = e.changedTouches[0].screenX;\n        touchStartY = e.changedTouches[0].screenY;\n        touchAxis = null;\n      }, { passive: true });\n      book.addEventListener('touchmove', (e) => {\n        if (touchStartX === null || touchStartY === null || touchAxis) return;\n        const dx = e.changedTouches[0].screenX - touchStartX;\n        const dy = e.changedTouches[0].screenY - touchStartY;\n        if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;\n        touchAxis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';\n      }, { passive: true });\n      book.addEventListener('touchend', (e) => {\n        if (touchStartX === null || touchStartY === null) return;\n        const dx = e.changedTouches[0].screenX - touchStartX;\n        const dy = e.changedTouches[0].screenY - touchStartY;\n        const horizontalIntent = touchAxis === 'x' && Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2;\n        if (horizontalIntent) (dx < 0 ? flipForward() : flipBackward());\n        touchStartX = null;\n        touchStartY = null;\n        touchAxis = null;\n      }, { passive: true });\n      book.addEventListener('touchcancel', () => {\n        touchStartX = null;\n        touchStartY = null;\n        touchAxis = null;\n      }, { passive: true });\n    })();\n  </script>  "])), maybeRenderHead(), addAttribute(`${base}play`, "href"), entry?.data.title ?? "Art", entry?.data.title, entry?.data.summary, entry?.data.medium, entry?.data.year, spreads.length, spreads.map((s) => renderTemplate`<li data-astro-cid-2c2tyety><button${addAttribute(s.page, "data-page")} class="book-toc-chip" data-astro-cid-2c2tyety>${s.label}</button></li>`), pages.map((p, i) => renderTemplate`<div${addAttribute(i, "data-page")} data-astro-cid-2c2tyety> ${p.type === "blank" && renderTemplate`<div class="p-blank" data-astro-cid-2c2tyety></div>`} ${p.type === "dossier-cover" && renderTemplate`<div class="p-cover p-dossier-cover" data-astro-cid-2c2tyety> <span class="d-stamp d-stamp-tl" aria-hidden="true" data-astro-cid-2c2tyety>${p.stamp}</span> <div class="d-cov-top" data-astro-cid-2c2tyety> <span class="d-cov-eyebrow" data-astro-cid-2c2tyety>${p.fileLabel}</span> <span class="d-mc-rule" aria-hidden="true" data-astro-cid-2c2tyety></span> </div> <div class="d-cov-mid" data-astro-cid-2c2tyety> <h2 class="d-cov-title" data-astro-cid-2c2tyety>${p.title}</h2> <p class="d-cov-tagline" data-astro-cid-2c2tyety>${p.tagline}</p> ${p.image && renderTemplate`<div class="d-cov-photo" data-astro-cid-2c2tyety> ${(() => {
    const meta = playImageMeta("art", p.image);
    return renderTemplate`<img${addAttribute(meta.src, "src")} alt="" loading="eager" fetchpriority="high" decoding="async"${spreadAttributes(meta.size ? { width: meta.size.width, height: meta.size.height } : {}, void 0, { "class": "astro-2c2tyety" })} data-astro-cid-2c2tyety>`;
  })()} </div>`} </div> <dl class="d-cov-meta" data-astro-cid-2c2tyety> ${p.meta?.map((m) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-2c2tyety": true }, { "default": async ($$result3) => renderTemplate` <dt data-astro-cid-2c2tyety>${m.k}</dt> <dd data-astro-cid-2c2tyety>${m.v}</dd> ` })}`)} </dl> </div>`} ${p.type === "profile" && renderTemplate`<div class="p-profile" data-astro-cid-2c2tyety> <p class="d-eyebrow" data-astro-cid-2c2tyety>${p.eyebrow}</p> <h2 class="d-title" data-astro-cid-2c2tyety>${p.title}</h2> <div class="d-body" data-paginate data-astro-cid-2c2tyety> ${p.body?.map((para, j) => renderTemplate`<p${addAttribute(j === 0 ? "d-lead" : "", "class")} data-astro-cid-2c2tyety>${para}</p>`)} ${p.signoff && renderTemplate`<p class="d-signoff" data-astro-cid-2c2tyety>— ${p.signoff}</p>`} </div> </div>`} ${p.type === "catalog" && renderTemplate`<div class="p-catalog" data-astro-cid-2c2tyety> <p class="d-eyebrow" data-astro-cid-2c2tyety>${p.eyebrow}</p> <h2 class="d-title" data-astro-cid-2c2tyety>${p.title}</h2> <ol class="d-cat-list" data-astro-cid-2c2tyety> ${p.items?.map((it) => renderTemplate`<li data-astro-cid-2c2tyety> <span class="d-cat-no" data-astro-cid-2c2tyety>${it.no}</span> <span class="d-cat-title" data-astro-cid-2c2tyety>${it.title}</span> <span class="d-cat-dot" aria-hidden="true" data-astro-cid-2c2tyety></span> <span class="d-cat-year" data-astro-cid-2c2tyety>${it.year}</span> </li>`)} </ol> ${p.note && renderTemplate`<p class="d-cat-note" data-astro-cid-2c2tyety>${p.note}</p>`} </div>`} ${p.type === "section" && renderTemplate`<div class="p-section p-section-dossier" data-astro-cid-2c2tyety> <p class="p-sec-roman" data-astro-cid-2c2tyety>${p.roman}</p> <h2 class="p-sec-label" data-astro-cid-2c2tyety>${p.label}</h2> <p class="p-sec-sub" data-astro-cid-2c2tyety>${p.subtitle}</p> </div>`} ${p.type === "specimen" && renderTemplate`<div class="p-specimen" data-astro-cid-2c2tyety> <div class="d-spec-header" data-astro-cid-2c2tyety> <span class="d-spec-no" data-astro-cid-2c2tyety>${p.file}</span> <span class="d-spec-year" data-astro-cid-2c2tyety>${p.year}</span> </div> <div class="d-spec-photo" data-astro-cid-2c2tyety> ${(() => {
    const meta = playImageMeta("art", p.image);
    return renderTemplate`<img${addAttribute(meta.src, "src")}${addAttribute(p.alt, "alt")} loading="lazy" decoding="async"${spreadAttributes(meta.size ? { width: meta.size.width, height: meta.size.height } : {}, void 0, { "class": "astro-2c2tyety" })} data-astro-cid-2c2tyety>`;
  })()} </div> <div class="d-spec-info" data-astro-cid-2c2tyety> <h3 class="d-spec-title" data-astro-cid-2c2tyety>${p.title}</h3> <p class="d-spec-meta" data-astro-cid-2c2tyety>${p.medium}</p> ${p.note && renderTemplate`<p class="d-spec-note" data-astro-cid-2c2tyety>${p.note}</p>`} </div> </div>`} ${p.type === "dossier-colophon" && renderTemplate`<div class="p-dossier-colophon" data-astro-cid-2c2tyety> <span class="d-stamp d-stamp-end" aria-hidden="true" data-astro-cid-2c2tyety>End of file</span> <h2 class="d-title" data-astro-cid-2c2tyety>${p.title}</h2> <dl class="d-col-list" data-astro-cid-2c2tyety> ${p.credits?.map((c) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-2c2tyety": true }, { "default": async ($$result3) => renderTemplate` <dt data-astro-cid-2c2tyety>${c.role}</dt> <dd data-astro-cid-2c2tyety>${c.name}</dd> ` })}`)} </dl> <p class="d-col-note" data-astro-cid-2c2tyety>${p.note}</p> </div>`} </div>`)) })}`;
}, "/private/tmp/flora-component-build/src/pages/play/art.astro", void 0);
const $$file = "/private/tmp/flora-component-build/src/pages/play/art.astro";
const $$url = "/play/art";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Art,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
