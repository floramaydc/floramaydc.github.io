/* empty css                                    */
import { p as createAstro, q as createComponent, w as renderComponent, D as renderTemplate, o as addAttribute, H as spreadAttributes, g as Fragment, v as maybeRenderHead } from '../../chunks/astro/server_D37m5tNR.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Dd7kTHl0.mjs';
import { b as getEntry } from '../../chunks/_astro_content_XxXwbPTn.mjs';
import { g as getPublicImageSize } from '../../chunks/publicImageSize_tT-4UM5E.mjs';
/* empty css                                              */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.floramaydc.com");
const $$PaleAndBright = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PaleAndBright;
  const base = "/".endsWith("/") ? "/" : "//";
  const entry = await getEntry("play", "pale-and-bright");
  const siteUrl = (Astro2.site?.toString() ?? "https://www.floramaydc.com/").replace(/\/$/, "");
  const playUrl = `${siteUrl}/play/pale-and-bright/`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: entry?.data.title ?? "Pale & Bright",
      headline: entry?.data.title ?? "Pale & Bright",
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
        { "@type": "ListItem", position: 2, name: entry?.data.title ?? "Pale & Bright", item: playUrl }
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
      type: "magazine-cover",
      // 1  cover (closed-book state)
      theme: "rose",
      image: "hero.jpg",
      issueLabel: "Vol. 01 · 2021–2022",
      title: "Pale & Bright",
      tagline: "A house we made together",
      byline: "by Flora & Nick"
    },
    {
      type: "masthead",
      // 2
      title: "Pale & Bright",
      issue: "No. 01",
      year: "2021–2022",
      contents: [
        "Editor's Note",
        "I — Living",
        "II — Kitchen",
        "III — Outdoor",
        "IV — Details",
        "Colophon"
      ]
    },
    {
      type: "editorial",
      // 3
      eyebrow: "Editor's Note",
      title: "A Tale of Two Tastes",
      body: [
        "When Nick and I moved in together, we discovered something obvious in hindsight — we have opposite eyes. Mine pulled toward pale, minimal, calm. His leaned bright, bold, lived-in.",
        "We didn't negotiate. We let the rooms hold both — a neutral palette as the canvas, color where it mattered, mid-century pieces to anchor it all. What follows is a small tour of the result."
      ],
      signoff: "F.M."
    },
    { type: "section", roman: "I", label: "Living", subtitle: "where we land" },
    // 4
    {
      type: "image-caption",
      // 5
      image: "living-room.jpg",
      alt: "Modern living room with a tan leather sofa, blue accent chair, large potted plant, floor lamp, and a guitar.",
      section: "Living",
      caption: "A tan leather sofa softens the room; a single blue chair and a stray guitar carry the bright half of the brief."
    },
    {
      type: "image-caption",
      // 6
      image: "staircase.jpg",
      alt: "Modern staircase with metal railing, a woven ottoman, and a decorative wall mirror.",
      section: "Living",
      caption: "Slim metal railings; a woven ottoman as a sculptural counterweight."
    },
    {
      type: "image-caption",
      // 7
      image: "mirror-wall.jpg",
      alt: "A wall with various decorative mirrors in different shapes and frames.",
      section: "Living",
      caption: "A collection of mirrors built up over time — circles, octagons, diamonds — caught in the late-afternoon light."
    },
    { type: "section", roman: "II", label: "Kitchen", subtitle: "where we gather" },
    // 8
    {
      type: "image-caption",
      // 9
      image: "kitchen-counter.jpg",
      alt: "Kitchen countertop with a gray tile backsplash, a framed photo, a vase with red flowers, and a jar of candy.",
      section: "Kitchen",
      caption: "A grey tile backsplash; a framed photo and a jar of candy as quiet kitchen jewelry."
    },
    {
      type: "image-caption",
      // 10
      image: "kitchen-shelf.jpg",
      alt: "Kitchen shelf with mugs, bowls, a potted plant, wooden cutting boards, and teacups with saucers.",
      section: "Kitchen",
      caption: "Mugs, bowls, a small plant — everyday objects arranged to feel intentional."
    },
    {
      type: "image-caption",
      // 11
      image: "kitchen-window.jpg",
      alt: "Kitchen windowsill with decorative flowers in a vase and dish, next to a toaster.",
      section: "Kitchen",
      caption: "Flowers and a small dish at the window; warmth without effort."
    },
    { type: "section", roman: "III", label: "Outdoor", subtitle: "open air" },
    // 12
    {
      type: "image-caption",
      // 13
      image: "rooftop-dining.jpg",
      alt: "Rooftop patio with a wooden dining table and chairs, vase with flowers, overlooking a city skyline.",
      section: "Outdoor",
      caption: "A rooftop table set for dinner, the city skyline standing in for art."
    },
    {
      type: "image-caption",
      // 14
      image: "rooftop-chess.jpg",
      alt: "Outdoor chess game set up on a wooden board with black and white pieces, light bulbs and building in the background.",
      section: "Outdoor",
      caption: "A chess board mid-game; black and white pieces against the evening light."
    },
    {
      type: "image-caption",
      // 15
      image: "patio.jpg",
      alt: "Patio set with a glass table and two mesh chairs on a colorful round rug, in front of sliding glass doors.",
      section: "Outdoor",
      caption: "A colourful round rug grounds the patio set — pale frame, bright floor."
    },
    { type: "section", roman: "IV", label: "Details", subtitle: "the small things" },
    // 16
    {
      type: "image-caption",
      // 17
      image: "giraffe-shelf.jpg",
      alt: "Framed painting of a giraffe with a red balloon, next to shelves with a nativity scene and decorative items.",
      section: "Details",
      caption: "A giraffe holding a red balloon and a small nativity scene — souvenirs we keep up year-round."
    },
    {
      type: "image-caption",
      // 18
      image: "window-art.jpg",
      alt: "Holiday window art drawn with liquid chalk.",
      section: "Details",
      caption: "Liquid chalk on the window, drawn for the holidays and left up past New Year."
    },
    {
      type: "image-caption",
      // 19
      image: "bar-cart.jpg",
      alt: "A bar cart with liquor bottles, a small vase of flowers, and jars with colored candies.",
      section: "Details",
      caption: "The bar cart — equal parts ceremony and convenience."
    },
    {
      type: "image-caption",
      // 20
      image: "bathroom.jpg",
      alt: "Bathroom countertop with a potted plant, mirror, rolled towel, jar, and bottle with green marimo moss ball on a marble tray.",
      section: "Details",
      caption: "A marble tray on the counter — plant, towel, jar of marimo. A tiny still life."
    },
    {
      type: "colophon",
      // 21
      title: "Colophon",
      credits: [
        { role: "Editor & Stylist", name: "Flora" },
        { role: "Co-designer", name: "Nick" },
        { role: "Photography", name: "Flora" },
        { role: "Year", name: "2021–2022" }
      ],
      note: "Originally documented at floramaydc.com/paleandbright. Ported here as part of the portfolio archive."
    }
  ];
  const spreads = [
    { label: "Cover", page: 1 },
    { label: "Editor's Note", page: 3 },
    { label: "Living", page: 4 },
    { label: "Kitchen", page: 8 },
    { label: "Outdoor", page: 12 },
    { label: "Details", page: 16 },
    { label: "Colophon", page: 21 }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${entry?.data.title ?? "Pale & Bright"} — Flora May dela Cruz`, "description": entry?.data.summary, "ogType": "article", "jsonLd": jsonLd, "data-astro-cid-73nv7nzk": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<article class="mx-auto max-w-3xl" data-astro-cid-73nv7nzk> <nav class="text-sm text-muted" aria-label="Breadcrumb" data-astro-cid-73nv7nzk> <ol class="flex flex-wrap items-center gap-1" data-astro-cid-73nv7nzk> <li data-astro-cid-73nv7nzk><a', ' class="hover:text-accent underline" data-astro-cid-73nv7nzk>Play</a></li> <li aria-hidden="true" data-astro-cid-73nv7nzk>/</li> <li class="text-ink/70 truncate" data-astro-cid-73nv7nzk>', '</li> </ol> </nav> <p class="mt-6 text-sm uppercase tracking-widest text-muted" data-astro-cid-73nv7nzk>Play</p> <h1 class="mt-2 font-serif text-4xl md:text-5xl text-ink" data-astro-cid-73nv7nzk>', '</h1> <p class="mt-3 text-lg text-muted" data-astro-cid-73nv7nzk>', '</p> <dl class="mt-6 grid grid-cols-2 gap-4 text-sm border-t border-cream pt-6" data-astro-cid-73nv7nzk> <div data-astro-cid-73nv7nzk><dt class="text-muted uppercase tracking-wider text-xs" data-astro-cid-73nv7nzk>Medium</dt><dd class="mt-1 text-ink" data-astro-cid-73nv7nzk>', '</dd></div> <div data-astro-cid-73nv7nzk><dt class="text-muted uppercase tracking-wider text-xs" data-astro-cid-73nv7nzk>Year</dt><dd class="mt-1 text-ink" data-astro-cid-73nv7nzk>', '</dd></div> </dl> <p class="mt-8 text-sm text-muted italic" data-astro-cid-73nv7nzk>Use the arrows, your keyboard, or swipe to turn the pages.</p> </article> <div class="book mx-auto mt-10" id="book" data-astro-cid-73nv7nzk> <div class="book-page-static book-left" id="book-left" data-astro-cid-73nv7nzk></div> <div class="book-page-static book-right" id="book-right" data-astro-cid-73nv7nzk></div> <div class="book-leaf" id="book-leaf" aria-hidden="true" data-astro-cid-73nv7nzk> <div class="book-face book-face-front" id="leaf-front" data-astro-cid-73nv7nzk></div> <div class="book-face book-face-back" id="leaf-back" data-astro-cid-73nv7nzk></div> </div> </div> <div class="mx-auto mt-6 flex max-w-3xl items-center justify-between" data-astro-cid-73nv7nzk> <button id="ndtb-prev" class="book-nav-text" aria-label="Previous page" data-astro-cid-73nv7nzk>← Previous</button> <span class="text-sm text-muted font-serif italic" data-astro-cid-73nv7nzk><span id="ndtb-current" data-astro-cid-73nv7nzk>1</span> of <span id="ndtb-total" data-astro-cid-73nv7nzk>', '</span></span> <button id="ndtb-next" class="book-nav-text" aria-label="Next page" data-astro-cid-73nv7nzk>Next →</button> </div> <nav class="mx-auto mt-10 max-w-3xl border-t border-cream pt-6" data-astro-cid-73nv7nzk> <p class="text-xs uppercase tracking-widest text-muted mb-3" data-astro-cid-73nv7nzk>Contents</p> <ul class="flex flex-wrap gap-2" id="ndtb-toc" data-astro-cid-73nv7nzk> ', ' </ul> </nav> <div hidden id="page-sources" data-astro-cid-73nv7nzk> ', " </div> <script>\n    (function () {\n      const sources = Array.from(document.querySelectorAll('#page-sources > [data-page]'));\n      const book = document.getElementById('book');\n      const left = document.getElementById('book-left');\n      const right = document.getElementById('book-right');\n      const leaf = document.getElementById('book-leaf');\n      const leafFront = document.getElementById('leaf-front');\n      const leafBack = document.getElementById('leaf-back');\n      const counter = document.getElementById('ndtb-current');\n      const totalEl = document.getElementById('ndtb-total');\n      const prevBtn = document.getElementById('ndtb-prev');\n      const nextBtn = document.getElementById('ndtb-next');\n      const chips = document.querySelectorAll('#ndtb-toc button[data-page]');\n\n      const MOBILE_MQ = window.matchMedia('(max-width: 900px)');\n      const DURATION = 700;\n\n      // ---------- classification ----------\n      function srcKind(srcEl) {\n        const first = srcEl.firstElementChild;\n        if (!first) return 'unknown';\n        const cls = first.classList[0] || '';\n        return cls.startsWith('p-') ? cls.slice(2) : cls;\n      }\n      function isCoverKind(k) { return k === 'cover' || k === 'magazine-cover'; }\n\n      // Generic clone + replace [data-paginate] children. Returns outerHTML.\n      function buildPaginatedHTML(srcEl, childSubset) {\n        const clone = srcEl.firstElementChild.cloneNode(true);\n        const container = clone.querySelector('[data-paginate]');\n        if (!container) return clone.outerHTML;\n        container.innerHTML = '';\n        childSubset.forEach((c) => container.appendChild(c.cloneNode(true)));\n        return clone.outerHTML;\n      }\n\n      // ---------- virtual pages (with text-overflow pagination on mobile) ----------\n      // On desktop the original layout is preserved so spread alignment stays.\n      // On mobile, any source whose body has a [data-paginate] container is\n      // split into sub-pages when overflow occurs.\n      function paginate(isMobile) {\n        if (!isMobile) {\n          return sources.map((src, i) => ({\n            html: src.innerHTML,\n            srcKind: srcKind(src),\n            srcIdx: i,\n          }));\n        }\n        const vpages = [];\n        for (let i = 0; i < sources.length; i++) {\n          const src = sources[i];\n          const kind = srcKind(src);\n          const container = src.querySelector('[data-paginate]');\n          if (!container) {\n            vpages.push({ html: src.innerHTML, srcKind: kind, srcIdx: i });\n            continue;\n          }\n          const children = Array.from(container.children);\n          if (children.length === 0) {\n            vpages.push({ html: src.innerHTML, srcKind: kind, srcIdx: i });\n            continue;\n          }\n          const chunks = [];\n          let start = 0;\n          while (start < children.length) {\n            let end = children.length;\n            while (end > start + 1) {\n              right.innerHTML = buildPaginatedHTML(src, children.slice(start, end));\n              // Measure the paginate container itself — overflow:hidden inside\n              // it would otherwise mask overflow at the outer .book-right level.\n              const measureEl = right.querySelector('[data-paginate]') || right;\n              if (measureEl.scrollHeight <= measureEl.clientHeight + 1) break;\n              end--;\n            }\n            chunks.push([start, end]);\n            start = end;\n          }\n          // Widow merge: a lone signoff on its own page reads as orphaned.\n          // Merge it into the previous chunk; overflow:hidden keeps it tidy.\n          if (chunks.length >= 2) {\n            const last = chunks[chunks.length - 1];\n            const onlyChild = last[1] - last[0] === 1 ? children[last[0]] : null;\n            if (onlyChild && onlyChild.classList && onlyChild.classList.contains('p-ed-signoff')) {\n              chunks[chunks.length - 2][1] = last[1];\n              chunks.pop();\n            }\n          }\n          for (const [s, e] of chunks) {\n            vpages.push({\n              html: buildPaginatedHTML(src, children.slice(s, e)),\n              srcKind: kind,\n              srcIdx: i,\n            });\n          }\n        }\n        right.innerHTML = '';\n        return vpages;\n      }\n\n      let virtualPages = [];\n      const vpHtml = (i) => (virtualPages[i] ? virtualPages[i].html : '');\n\n      // ---------- stops ----------\n      function buildStops(isMobile) {\n        const coverVp = virtualPages.findIndex((v) => isCoverKind(v.srcKind));\n        const stops = coverVp >= 0 ? [{ right: coverVp, single: true, closed: true }] : [];\n        if (isMobile) {\n          for (let i = 0; i < virtualPages.length; i++) {\n            const k = virtualPages[i].srcKind;\n            if (k === 'blank' || isCoverKind(k)) continue;\n            stops.push({ right: i, single: true });\n          }\n          return stops;\n        }\n        const rest = [];\n        for (let i = 0; i < virtualPages.length; i++) {\n          const k = virtualPages[i].srcKind;\n          if (k === 'blank' || isCoverKind(k)) continue;\n          rest.push(i);\n        }\n        for (let i = 0; i < rest.length; i += 2) {\n          stops.push({ left: rest[i], right: rest[i + 1] });\n        }\n        return stops;\n      }\n\n      function stopIndexForVp(vpIdx) {\n        const i = stops.findIndex((s) => s.right === vpIdx || s.left === vpIdx);\n        return i < 0 ? 0 : i;\n      }\n      function firstVpForSrc(srcIdx) {\n        return virtualPages.findIndex((v) => v.srcIdx === srcIdx);\n      }\n\n      // ---------- state ----------\n      let isMobile = MOBILE_MQ.matches;\n      let stops = [];\n      let idx = 0;\n      let flipping = false;\n      const isSingle = (s) => !!(s && (s.single || isMobile));\n\n      function rebuild(preserveSrcIdx) {\n        virtualPages = paginate(isMobile);\n        stops = buildStops(isMobile);\n        if (preserveSrcIdx != null) {\n          const vp = firstVpForSrc(preserveSrcIdx);\n          idx = vp >= 0 ? stopIndexForVp(vp) : 0;\n        }\n        if (idx >= stops.length) idx = stops.length - 1;\n        if (idx < 0) idx = 0;\n        renderStatic();\n      }\n\n      function renderStatic() {\n        const s = stops[idx];\n        if (!s) return;\n        const single = isSingle(s);\n        book.classList.toggle('is-single', single);\n        book.classList.toggle('is-closed', !!s.closed);\n        if (single) {\n          right.innerHTML = vpHtml(s.right);\n          left.innerHTML = '';\n        } else {\n          left.innerHTML = vpHtml(s.left);\n          right.innerHTML = vpHtml(s.right);\n        }\n        counter.textContent = String(idx + 1);\n        totalEl.textContent = String(stops.length);\n        chips.forEach((c) => {\n          const cp = parseInt(c.getAttribute('data-page'), 10);\n          const vp = firstVpForSrc(cp);\n          c.classList.toggle('is-current', vp >= 0 && stopIndexForVp(vp) === idx);\n        });\n        prevBtn.style.visibility = idx === 0 ? 'hidden' : 'visible';\n        nextBtn.style.visibility = idx === stops.length - 1 ? 'hidden' : 'visible';\n      }\n\n      function flipForward() {\n        if (flipping || idx >= stops.length - 1) return;\n        const curr = stops[idx];\n        const next = stops[idx + 1];\n        if (isSingle(curr) !== isSingle(next)) { idx++; renderStatic(); return; }\n        flipping = true;\n        if (isSingle(curr)) {\n          leafFront.innerHTML = vpHtml(curr.right);\n          leafBack.innerHTML = vpHtml(next.right);\n          right.innerHTML = vpHtml(next.right);\n        } else {\n          leafFront.innerHTML = vpHtml(curr.right);\n          leafBack.innerHTML = vpHtml(next.left);\n          right.innerHTML = vpHtml(next.right);\n        }\n        leaf.classList.add('is-active', 'flip-forward');\n        setTimeout(() => {\n          leaf.classList.remove('is-active', 'flip-forward');\n          idx++; renderStatic(); flipping = false;\n        }, DURATION);\n      }\n\n      function flipBackward() {\n        if (flipping || idx <= 0) return;\n        const curr = stops[idx];\n        const prev = stops[idx - 1];\n        if (isSingle(curr) !== isSingle(prev)) { idx--; renderStatic(); return; }\n        flipping = true;\n        if (isSingle(curr)) {\n          leafFront.innerHTML = vpHtml(curr.right);\n          leafBack.innerHTML = vpHtml(prev.right);\n          right.innerHTML = vpHtml(prev.right);\n        } else {\n          leafFront.innerHTML = vpHtml(curr.left);\n          leafBack.innerHTML = vpHtml(prev.right);\n          left.innerHTML = vpHtml(prev.left);\n        }\n        leaf.classList.add('is-active', 'flip-backward');\n        setTimeout(() => {\n          leaf.classList.remove('is-active', 'flip-backward');\n          idx--; renderStatic(); flipping = false;\n        }, DURATION);\n      }\n\n      function jumpToStop(target) {\n        if (flipping || target === idx || target < 0 || target >= stops.length) return;\n        if (Math.abs(target - idx) === 1) {\n          target > idx ? flipForward() : flipBackward();\n        } else { idx = target; renderStatic(); }\n      }\n\n      function handleModeChange() {\n        const newMobile = MOBILE_MQ.matches;\n        if (newMobile === isMobile) return;\n        const currentSrcIdx = virtualPages[stops[idx].right] && virtualPages[stops[idx].right].srcIdx;\n        isMobile = newMobile;\n        rebuild(currentSrcIdx);\n      }\n\n      rebuild();\n      MOBILE_MQ.addEventListener\n        ? MOBILE_MQ.addEventListener('change', handleModeChange)\n        : MOBILE_MQ.addListener(handleModeChange);\n\n      nextBtn.addEventListener('click', flipForward);\n      prevBtn.addEventListener('click', flipBackward);\n      document.addEventListener('keydown', (e) => {\n        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;\n        if (e.key === 'ArrowRight') flipForward();\n        else if (e.key === 'ArrowLeft') flipBackward();\n      });\n      chips.forEach((b) =>\n        b.addEventListener('click', () => {\n          const srcIdx = parseInt(b.getAttribute('data-page'), 10);\n          const vp = firstVpForSrc(srcIdx);\n          if (vp < 0) return;\n          jumpToStop(stopIndexForVp(vp));\n        })\n      );\n\n      let touchStartX = null;\n      let touchStartY = null;\n      let touchAxis = null;\n      book.addEventListener('touchstart', (e) => {\n        touchStartX = e.changedTouches[0].screenX;\n        touchStartY = e.changedTouches[0].screenY;\n        touchAxis = null;\n      }, { passive: true });\n      book.addEventListener('touchmove', (e) => {\n        if (touchStartX === null || touchStartY === null || touchAxis) return;\n        const dx = e.changedTouches[0].screenX - touchStartX;\n        const dy = e.changedTouches[0].screenY - touchStartY;\n        if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;\n        touchAxis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';\n      }, { passive: true });\n      book.addEventListener('touchend', (e) => {\n        if (touchStartX === null || touchStartY === null) return;\n        const dx = e.changedTouches[0].screenX - touchStartX;\n        const dy = e.changedTouches[0].screenY - touchStartY;\n        const horizontalIntent = touchAxis === 'x' && Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2;\n        if (horizontalIntent) (dx < 0 ? flipForward() : flipBackward());\n        touchStartX = null;\n        touchStartY = null;\n        touchAxis = null;\n      }, { passive: true });\n      book.addEventListener('touchcancel', () => {\n        touchStartX = null;\n        touchStartY = null;\n        touchAxis = null;\n      }, { passive: true });\n    })();\n  </script>  "])), maybeRenderHead(), addAttribute(`${base}play`, "href"), entry?.data.title ?? "Pale & Bright", entry?.data.title, entry?.data.summary, entry?.data.medium, entry?.data.year, spreads.length, spreads.map((s) => renderTemplate`<li data-astro-cid-73nv7nzk><button${addAttribute(s.page, "data-page")} class="book-toc-chip" data-astro-cid-73nv7nzk>${s.label}</button></li>`), pages.map((p, i) => renderTemplate`<div${addAttribute(i, "data-page")} data-astro-cid-73nv7nzk> ${p.type === "blank" && renderTemplate`<div class="p-blank" data-astro-cid-73nv7nzk></div>`} ${p.type === "magazine-cover" && renderTemplate`<div${addAttribute(`p-cover p-magazine-cover p-mc-${p.theme || "rose"}`, "class")} data-astro-cid-73nv7nzk> <div class="p-mc-top" data-astro-cid-73nv7nzk> <span class="p-mc-issue" data-astro-cid-73nv7nzk>${p.issueLabel}</span> <span class="p-mc-rule" aria-hidden="true" data-astro-cid-73nv7nzk></span> </div> <div class="p-mc-mid" data-astro-cid-73nv7nzk> <h2 class="p-mc-title" data-astro-cid-73nv7nzk>${p.title}</h2> <p class="p-mc-tagline" data-astro-cid-73nv7nzk>${p.tagline}</p> ${p.image && renderTemplate`<div class="p-mc-photo" data-astro-cid-73nv7nzk> ${(() => {
    const meta = playImageMeta("paleandbright", p.image);
    return renderTemplate`<img${addAttribute(meta.src, "src")} alt="" loading="eager" fetchpriority="high" decoding="async"${spreadAttributes(meta.size ? { width: meta.size.width, height: meta.size.height } : {}, void 0, { "class": "astro-73nv7nzk" })} data-astro-cid-73nv7nzk>`;
  })()} </div>`} </div> <div class="p-mc-bot" data-astro-cid-73nv7nzk> <span class="p-mc-rule" aria-hidden="true" data-astro-cid-73nv7nzk></span> <span data-astro-cid-73nv7nzk>${p.byline}</span> </div> </div>`} ${p.type === "masthead" && renderTemplate`<div class="p-masthead" data-astro-cid-73nv7nzk> <p class="p-mh-eyebrow" data-astro-cid-73nv7nzk>${p.issue} · ${p.year}</p> <h2 class="p-mh-title" data-astro-cid-73nv7nzk>${p.title}</h2> <div class="p-mh-rule" aria-hidden="true" data-astro-cid-73nv7nzk></div> <p class="p-mh-label" data-astro-cid-73nv7nzk>Inside this issue</p> <ol class="p-mh-toc" data-astro-cid-73nv7nzk> ${p.contents?.map((c) => renderTemplate`<li data-astro-cid-73nv7nzk>${c}</li>`)} </ol> </div>`} ${p.type === "editorial" && renderTemplate`<div class="p-editorial" data-astro-cid-73nv7nzk> <p class="p-ed-eyebrow" data-astro-cid-73nv7nzk>${p.eyebrow}</p> <h2 class="p-ed-title" data-astro-cid-73nv7nzk>${p.title}</h2> <div class="p-ed-body" data-paginate data-astro-cid-73nv7nzk> ${p.body?.map((para, j) => renderTemplate`<p${addAttribute(j === 0 ? "p-ed-lead" : "", "class")} data-astro-cid-73nv7nzk>${para}</p>`)} ${p.signoff && renderTemplate`<p class="p-ed-signoff" data-astro-cid-73nv7nzk>— ${p.signoff}</p>`} </div> </div>`} ${p.type === "section" && renderTemplate`<div class="p-section" data-astro-cid-73nv7nzk> <p class="p-sec-roman" data-astro-cid-73nv7nzk>${p.roman}</p> <h2 class="p-sec-label" data-astro-cid-73nv7nzk>${p.label}</h2> <p class="p-sec-sub" data-astro-cid-73nv7nzk>${p.subtitle}</p> </div>`} ${p.type === "image-caption" && renderTemplate`<div class="p-image-caption" data-astro-cid-73nv7nzk> <div class="p-ic-photo" data-astro-cid-73nv7nzk> ${(() => {
    const meta = playImageMeta("paleandbright", p.image);
    return renderTemplate`<img${addAttribute(meta.src, "src")}${addAttribute(p.alt, "alt")} loading="lazy" decoding="async"${spreadAttributes(meta.size ? { width: meta.size.width, height: meta.size.height } : {}, void 0, { "class": "astro-73nv7nzk" })} data-astro-cid-73nv7nzk>`;
  })()} </div> <div class="p-ic-cap" data-astro-cid-73nv7nzk> <span class="p-ic-section" data-astro-cid-73nv7nzk>${p.section}</span> <p class="p-ic-text" data-astro-cid-73nv7nzk>${p.caption}</p> </div> </div>`} ${p.type === "colophon" && renderTemplate`<div class="p-colophon" data-astro-cid-73nv7nzk> <h2 class="p-col-title" data-astro-cid-73nv7nzk>${p.title}</h2> <dl class="p-col-list" data-astro-cid-73nv7nzk> ${p.credits?.map((c) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-73nv7nzk": true }, { "default": async ($$result3) => renderTemplate` <dt data-astro-cid-73nv7nzk>${c.role}</dt> <dd data-astro-cid-73nv7nzk>${c.name}</dd> ` })}`)} </dl> <p class="p-col-note" data-astro-cid-73nv7nzk>${p.note}</p> </div>`} </div>`)) })}`;
}, "/private/tmp/flora-component-build/src/pages/play/pale-and-bright.astro", void 0);
const $$file = "/private/tmp/flora-component-build/src/pages/play/pale-and-bright.astro";
const $$url = "/play/pale-and-bright";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PaleAndBright,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
