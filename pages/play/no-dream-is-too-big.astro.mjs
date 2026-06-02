/* empty css                                    */
import { p as createAstro, q as createComponent, w as renderComponent, D as renderTemplate, o as addAttribute, H as spreadAttributes, v as maybeRenderHead } from '../../chunks/astro/server_D37m5tNR.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Dd7kTHl0.mjs';
import { b as getEntry } from '../../chunks/_astro_content_XxXwbPTn.mjs';
import { g as getPublicImageSize } from '../../chunks/publicImageSize_tT-4UM5E.mjs';
/* empty css                                                  */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.floramaydc.com");
const $$NoDreamIsTooBig = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NoDreamIsTooBig;
  const base = "/".endsWith("/") ? "/" : "//";
  const entry = await getEntry("play", "no-dream-is-too-big");
  const siteUrl = (Astro2.site?.toString() ?? "https://www.floramaydc.com/").replace(/\/$/, "");
  const playUrl = `${siteUrl}/play/no-dream-is-too-big/`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: entry.data.title,
      headline: entry.data.title,
      description: entry.data.summary,
      url: playUrl,
      author: { "@type": "Person", name: "Flora May dela Cruz", url: `${siteUrl}/about` },
      genre: "Play"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Play", item: `${siteUrl}/play/` },
        { "@type": "ListItem", position: 2, name: entry.data.title, item: playUrl }
      ]
    }
  ];
  const pages = [
    { type: "blank" },
    // 0  inside cover (verso of front cover)
    { type: "cover", image: "cover.webp", title: "No Dream Is Too Big", byline: "by Flora May dela Cruz" },
    // 1  recto
    { type: "text", chapter: "Chapter 1", title: "May-May's Magical World", verses: [
      ["In a forest bright and grand", "May-May sketched with gentle hand"],
      ["Rainbows lingering through the day", "Flowers chattering while a'sway"],
      ["With her red balloon up high", "A dreamer's gleam within her eye"]
    ] },
    { type: "image", image: "ch1.webp", alt: "Chapter 1" },
    { type: "text", chapter: "Chapter 2", title: "The Dubious Monkey", verses: [
      ["A monkey swung with furrowed brow", '"That makes no sense" his sneer avowed'],
      ['"Rainbows only follow rain', `And flowers speak? That's just insane!"`],
      ["And with these words, her smile went out", "May-May's heart began to doubt"]
    ] },
    { type: "image", image: "ch2.jpg", alt: "Chapter 2" },
    { type: "text", chapter: "Chapter 3", title: "The Doubting Crowd", verses: [
      ["Then others laughed and echoed loud", '"Get your head out from the clouds!"'],
      ["And May-May frowned at her balloon", "And sadness filled her afternoon"],
      ['"How could such big dreams take flight?', 'I guess my vision is just too bright"']
    ] },
    { type: "image", image: "ch3.jpg", alt: "Chapter 3" },
    { type: "text", chapter: "Chapter 4", title: "New Friends", verses: [
      ["Yet not all were so unkind,", "New friends in the forest, she did find"],
      ["A bird, a hippo, a gorilla with glee", `"Your world's a wonder, as it should be!"`],
      ["Their words like a gentle feather", "Lifted her spirits, light as heather"]
    ] },
    { type: "image", image: "ch4.webp", alt: "Chapter 4" },
    { type: "text", chapter: "Chapter 5", title: "The Wise Old Owl", verses: [
      ["In the woods, under moon's glow", "An old owl spoke wisdom slow"],
      ['"May-May, hold fast to dreams you weave', 'Special as the web you believe"'],
      ["With a flutter, back came her balloon", `"Chase your dreams, they'll blossom soon"`]
    ] },
    { type: "image", image: "ch5.webp", alt: "Chapter 5" },
    { type: "text", chapter: "Chapter 6", title: "The Journey Begins", verses: [
      ["With courage anew, May-May took a stance", "To show the world her dream's expanse"],
      ["Balloon in hoof, into the sun", '"No dream is too big," her heart had won'],
      ["Across the lands, her colors unfurl", "May-May, the dreamer, would change the world"]
    ] },
    { type: "image", image: "ch6.webp", alt: "Chapter 6" },
    { type: "image", image: "credits.webp", alt: "The End" },
    { type: "credits", title: "The End" }
  ];
  const spreads = [
    { label: "Cover", page: 1 },
    { label: "Chapter 1", page: 2 },
    { label: "Chapter 2", page: 4 },
    { label: "Chapter 3", page: 6 },
    { label: "Chapter 4", page: 8 },
    { label: "Chapter 5", page: 10 },
    { label: "Chapter 6", page: 12 },
    { label: "Credits", page: 14 }
  ];
  const totalSpreads = Math.ceil(pages.length / 2);
  function ndtbImageMeta(fileName) {
    const imagePath = `images/play/ndtb/${fileName}`;
    const imageSize = getPublicImageSize(imagePath);
    return {
      src: `${base}${imagePath}`,
      size: imageSize
    };
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "No Dream Is Too Big — Flora May dela Cruz", "description": entry.data.summary, "ogType": "article", "jsonLd": jsonLd, "data-astro-cid-ls576wlr": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<article class="mx-auto max-w-3xl" data-astro-cid-ls576wlr> <nav class="text-sm text-muted" aria-label="Breadcrumb" data-astro-cid-ls576wlr> <ol class="flex flex-wrap items-center gap-1" data-astro-cid-ls576wlr> <li data-astro-cid-ls576wlr><a', ' class="hover:text-accent underline" data-astro-cid-ls576wlr>Play</a></li> <li aria-hidden="true" data-astro-cid-ls576wlr>/</li> <li class="text-ink/70 truncate" data-astro-cid-ls576wlr>', '</li> </ol> </nav> <p class="mt-6 text-sm uppercase tracking-widest text-muted" data-astro-cid-ls576wlr>Play</p> <h1 class="mt-2 font-serif text-4xl md:text-5xl text-ink" data-astro-cid-ls576wlr>', '</h1> <p class="mt-3 text-lg text-muted" data-astro-cid-ls576wlr>', '</p> <dl class="mt-6 grid grid-cols-2 gap-4 text-sm border-t border-cream pt-6" data-astro-cid-ls576wlr> <div data-astro-cid-ls576wlr><dt class="text-muted uppercase tracking-wider text-xs" data-astro-cid-ls576wlr>Medium</dt><dd class="mt-1 text-ink" data-astro-cid-ls576wlr>', '</dd></div> <div data-astro-cid-ls576wlr><dt class="text-muted uppercase tracking-wider text-xs" data-astro-cid-ls576wlr>Year</dt><dd class="mt-1 text-ink" data-astro-cid-ls576wlr>', '</dd></div> </dl> <p class="mt-8 text-sm text-muted italic" data-astro-cid-ls576wlr>Use the arrows, your keyboard, or swipe to turn the pages.</p> </article> <div class="book mx-auto mt-10" id="book" data-astro-cid-ls576wlr> <div class="book-page-static book-left" id="book-left" data-astro-cid-ls576wlr></div> <div class="book-page-static book-right" id="book-right" data-astro-cid-ls576wlr></div> <div class="book-leaf" id="book-leaf" aria-hidden="true" data-astro-cid-ls576wlr> <div class="book-face book-face-front" id="leaf-front" data-astro-cid-ls576wlr></div> <div class="book-face book-face-back" id="leaf-back" data-astro-cid-ls576wlr></div> </div> </div> <div class="mx-auto mt-6 flex max-w-3xl items-center justify-between" data-astro-cid-ls576wlr> <button id="ndtb-prev" class="book-nav-text" aria-label="Previous page" data-astro-cid-ls576wlr>← Previous</button> <span class="text-sm text-muted font-serif italic" data-astro-cid-ls576wlr><span id="ndtb-current" data-astro-cid-ls576wlr>1</span> of <span id="ndtb-total" data-astro-cid-ls576wlr>', '</span></span> <button id="ndtb-next" class="book-nav-text" aria-label="Next page" data-astro-cid-ls576wlr>Next →</button> </div> <nav class="mx-auto mt-10 max-w-3xl border-t border-cream pt-6" data-astro-cid-ls576wlr> <p class="text-xs uppercase tracking-widest text-muted mb-3" data-astro-cid-ls576wlr>Chapters</p> <ul class="flex flex-wrap gap-2" id="ndtb-toc" data-astro-cid-ls576wlr> ', ' </ul> </nav> <div hidden id="page-sources" data-astro-cid-ls576wlr> ', ` </div> <script>
    (function () {
      const sources = Array.from(document.querySelectorAll('#page-sources > [data-page]'));
      const book = document.getElementById('book');
      const left = document.getElementById('book-left');
      const right = document.getElementById('book-right');
      const leaf = document.getElementById('book-leaf');
      const leafFront = document.getElementById('leaf-front');
      const leafBack = document.getElementById('leaf-back');
      const counter = document.getElementById('ndtb-current');
      const totalEl = document.getElementById('ndtb-total');
      const prevBtn = document.getElementById('ndtb-prev');
      const nextBtn = document.getElementById('ndtb-next');
      const chips = document.querySelectorAll('#ndtb-toc button[data-page]');

      const MOBILE_MQ = window.matchMedia('(max-width: 900px)');
      const DURATION = 700;

      // ---------- classification ----------
      function srcKind(srcEl) {
        const first = srcEl.firstElementChild;
        if (!first) return 'unknown';
        const cls = first.classList[0] || '';
        return cls.startsWith('p-') ? cls.slice(2) : cls;
      }

      // Clone a .p-text source with only a subset of its verses.
      function buildTextHTML(srcEl, verseSubset) {
        const clone = srcEl.querySelector('.p-text').cloneNode(true);
        const verses = clone.querySelector('.p-verses');
        verses.innerHTML = '';
        verseSubset.forEach((v) => verses.appendChild(v.cloneNode(true)));
        return clone.outerHTML;
      }

      // ---------- virtual pages (with text-overflow pagination on mobile) ----------
      // virtualPages: [{ html, srcKind, srcIdx }, ...]
      // On desktop the original page layout is preserved so spread alignment
      // (text left / image right) stays intact. On mobile, text pages whose
      // verses don't fit are split across multiple virtual pages by measuring
      // overflow against the actual right-slot dimensions.
      function paginate(isMobile) {
        if (!isMobile) {
          return sources.map((src, i) => ({
            html: src.innerHTML,
            srcKind: srcKind(src),
            srcIdx: i,
          }));
        }
        const vpages = [];
        for (let i = 0; i < sources.length; i++) {
          const src = sources[i];
          const kind = srcKind(src);
          if (kind !== 'text') {
            vpages.push({ html: src.innerHTML, srcKind: kind, srcIdx: i });
            continue;
          }
          const verseEls = Array.from(src.querySelectorAll('.p-verses > p'));
          if (verseEls.length === 0) {
            vpages.push({ html: src.innerHTML, srcKind: kind, srcIdx: i });
            continue;
          }
          // Greedy fit: start with all remaining verses, shrink until it fits.
          let start = 0;
          while (start < verseEls.length) {
            let end = verseEls.length;
            while (end > start + 1) {
              right.innerHTML = buildTextHTML(src, verseEls.slice(start, end));
              // Measure the verses container — its own overflow:hidden (if any)
              // would mask overflow at the outer .book-right level otherwise.
              const measureEl = right.querySelector('.p-verses') || right;
              if (measureEl.scrollHeight <= measureEl.clientHeight + 1) break;
              end--;
            }
            vpages.push({
              html: buildTextHTML(src, verseEls.slice(start, end)),
              srcKind: 'text',
              srcIdx: i,
            });
            start = end;
          }
        }
        right.innerHTML = '';
        return vpages;
      }

      let virtualPages = [];
      const vpHtml = (i) => (virtualPages[i] ? virtualPages[i].html : '');
      const vpKind = (i) => (virtualPages[i] ? virtualPages[i].srcKind : '');

      // ---------- stops ----------
      // Cover is always a single, "closed" stop. Subsequent stops are spreads
      // on desktop (text left / image right per chapter) or single pages on
      // mobile (each non-blank, non-cover virtual page).
      function buildStops(isMobile) {
        const coverVp = virtualPages.findIndex((v) => v.srcKind === 'cover');
        const stops = coverVp >= 0 ? [{ right: coverVp, single: true, closed: true }] : [];
        if (isMobile) {
          for (let i = 0; i < virtualPages.length; i++) {
            const k = virtualPages[i].srcKind;
            if (k === 'blank' || k === 'cover') continue;
            stops.push({ right: i, single: true });
          }
          return stops;
        }
        // Desktop: pair the rest in order (skip blank + cover, already shown).
        const rest = [];
        for (let i = 0; i < virtualPages.length; i++) {
          const k = virtualPages[i].srcKind;
          if (k === 'blank' || k === 'cover') continue;
          rest.push(i);
        }
        for (let i = 0; i < rest.length; i += 2) {
          stops.push({ left: rest[i], right: rest[i + 1] });
        }
        return stops;
      }

      function stopIndexForVp(vpIdx) {
        const i = stops.findIndex((s) => s.right === vpIdx || s.left === vpIdx);
        return i < 0 ? 0 : i;
      }
      function firstVpForSrc(srcIdx) {
        return virtualPages.findIndex((v) => v.srcIdx === srcIdx);
      }

      // ---------- state ----------
      let isMobile = MOBILE_MQ.matches;
      let stops = [];
      let idx = 0;
      let flipping = false;
      const isSingle = (s) => !!(s && (s.single || isMobile));

      function rebuild(preserveSrcIdx) {
        virtualPages = paginate(isMobile);
        stops = buildStops(isMobile);
        if (preserveSrcIdx != null) {
          const vp = firstVpForSrc(preserveSrcIdx);
          idx = vp >= 0 ? stopIndexForVp(vp) : 0;
        }
        if (idx >= stops.length) idx = stops.length - 1;
        if (idx < 0) idx = 0;
        renderStatic();
      }

      // ---------- render ----------
      function renderStatic() {
        const s = stops[idx];
        if (!s) return;
        const single = isSingle(s);
        book.classList.toggle('is-single', single);
        book.classList.toggle('is-closed', !!s.closed);
        if (single) {
          right.innerHTML = vpHtml(s.right);
          left.innerHTML = '';
        } else {
          left.innerHTML = vpHtml(s.left);
          right.innerHTML = vpHtml(s.right);
        }
        counter.textContent = String(idx + 1);
        totalEl.textContent = String(stops.length);
        chips.forEach((c) => {
          const cp = parseInt(c.getAttribute('data-page'), 10);
          const vp = firstVpForSrc(cp);
          c.classList.toggle('is-current', vp >= 0 && stopIndexForVp(vp) === idx);
        });
        prevBtn.style.visibility = idx === 0 ? 'hidden' : 'visible';
        nextBtn.style.visibility = idx === stops.length - 1 ? 'hidden' : 'visible';
      }

      // ---------- flip ----------
      // When transitioning between a single (closed) stop and a spread stop,
      // skip the leaf animation — layouts differ too much to animate cleanly.
      function flipForward() {
        if (flipping || idx >= stops.length - 1) return;
        const curr = stops[idx];
        const next = stops[idx + 1];
        if (isSingle(curr) !== isSingle(next)) {
          idx++;
          renderStatic();
          return;
        }
        flipping = true;
        if (isSingle(curr)) {
          leafFront.innerHTML = vpHtml(curr.right);
          leafBack.innerHTML = vpHtml(next.right);
          right.innerHTML = vpHtml(next.right);
        } else {
          leafFront.innerHTML = vpHtml(curr.right);
          leafBack.innerHTML = vpHtml(next.left);
          right.innerHTML = vpHtml(next.right);
        }
        leaf.classList.add('is-active', 'flip-forward');
        setTimeout(() => {
          leaf.classList.remove('is-active', 'flip-forward');
          idx++;
          renderStatic();
          flipping = false;
        }, DURATION);
      }

      function flipBackward() {
        if (flipping || idx <= 0) return;
        const curr = stops[idx];
        const prev = stops[idx - 1];
        if (isSingle(curr) !== isSingle(prev)) {
          idx--;
          renderStatic();
          return;
        }
        flipping = true;
        if (isSingle(curr)) {
          leafFront.innerHTML = vpHtml(curr.right);
          leafBack.innerHTML = vpHtml(prev.right);
          right.innerHTML = vpHtml(prev.right);
        } else {
          leafFront.innerHTML = vpHtml(curr.left);
          leafBack.innerHTML = vpHtml(prev.right);
          left.innerHTML = vpHtml(prev.left);
        }
        leaf.classList.add('is-active', 'flip-backward');
        setTimeout(() => {
          leaf.classList.remove('is-active', 'flip-backward');
          idx--;
          renderStatic();
          flipping = false;
        }, DURATION);
      }

      function jumpToStop(target) {
        if (flipping || target === idx || target < 0 || target >= stops.length) return;
        if (Math.abs(target - idx) === 1) {
          target > idx ? flipForward() : flipBackward();
        } else {
          idx = target;
          renderStatic();
        }
      }

      function handleModeChange() {
        const newMobile = MOBILE_MQ.matches;
        if (newMobile === isMobile) return;
        const currentSrcIdx = virtualPages[stops[idx].right] && virtualPages[stops[idx].right].srcIdx;
        isMobile = newMobile;
        rebuild(currentSrcIdx);
      }

      rebuild();
      MOBILE_MQ.addEventListener
        ? MOBILE_MQ.addEventListener('change', handleModeChange)
        : MOBILE_MQ.addListener(handleModeChange);

      nextBtn.addEventListener('click', flipForward);
      prevBtn.addEventListener('click', flipBackward);
      document.addEventListener('keydown', (e) => {
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
        if (e.key === 'ArrowRight') flipForward();
        else if (e.key === 'ArrowLeft') flipBackward();
      });
      chips.forEach((b) =>
        b.addEventListener('click', () => {
          const srcIdx = parseInt(b.getAttribute('data-page'), 10);
          const vp = firstVpForSrc(srcIdx);
          if (vp < 0) return;
          jumpToStop(stopIndexForVp(vp));
        })
      );

      let touchStartX = null;
      let touchStartY = null;
      let touchAxis = null;
      book.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
        touchAxis = null;
      }, { passive: true });
      book.addEventListener('touchmove', (e) => {
        if (touchStartX === null || touchStartY === null || touchAxis) return;
        const dx = e.changedTouches[0].screenX - touchStartX;
        const dy = e.changedTouches[0].screenY - touchStartY;
        if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
        touchAxis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
      }, { passive: true });
      book.addEventListener('touchend', (e) => {
        if (touchStartX === null || touchStartY === null) return;
        const dx = e.changedTouches[0].screenX - touchStartX;
        const dy = e.changedTouches[0].screenY - touchStartY;
        const horizontalIntent = touchAxis === 'x' && Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2;
        if (horizontalIntent) (dx < 0 ? flipForward() : flipBackward());
        touchStartX = null;
        touchStartY = null;
        touchAxis = null;
      }, { passive: true });
      book.addEventListener('touchcancel', () => {
        touchStartX = null;
        touchStartY = null;
        touchAxis = null;
      }, { passive: true });
    })();
  </script>  `])), maybeRenderHead(), addAttribute(`${base}play`, "href"), entry.data.title, entry.data.title, entry.data.summary, entry.data.medium, entry.data.year, totalSpreads, spreads.map((s) => renderTemplate`<li data-astro-cid-ls576wlr><button${addAttribute(s.page, "data-page")} class="book-toc-chip" data-astro-cid-ls576wlr>${s.label}</button></li>`), pages.map((p, i) => renderTemplate`<div${addAttribute(i, "data-page")} data-astro-cid-ls576wlr> ${p.type === "blank" && renderTemplate`<div class="p-blank" data-astro-cid-ls576wlr></div>`} ${p.type === "cover" && renderTemplate`<div class="p-cover" data-astro-cid-ls576wlr> ${(() => {
    const meta = ndtbImageMeta(p.image);
    return renderTemplate`<img${addAttribute(meta.src, "src")}${addAttribute(p.title, "alt")} loading="eager" fetchpriority="high" decoding="async"${spreadAttributes(meta.size ? { width: meta.size.width, height: meta.size.height } : {}, void 0, { "class": "astro-ls576wlr" })} data-astro-cid-ls576wlr>`;
  })()} <div class="p-cover-text" data-astro-cid-ls576wlr> <h2 data-astro-cid-ls576wlr>${p.title}</h2> <p data-astro-cid-ls576wlr><em data-astro-cid-ls576wlr>${p.byline}</em></p> </div> </div>`} ${p.type === "image" && renderTemplate`<div class="p-image" data-astro-cid-ls576wlr> ${(() => {
    const meta = ndtbImageMeta(p.image);
    return renderTemplate`<img${addAttribute(meta.src, "src")}${addAttribute(p.alt, "alt")} loading="lazy" decoding="async"${spreadAttributes(meta.size ? { width: meta.size.width, height: meta.size.height } : {}, void 0, { "class": "astro-ls576wlr" })} data-astro-cid-ls576wlr>`;
  })()} </div>`} ${p.type === "text" && renderTemplate`<div class="p-text" data-astro-cid-ls576wlr> <p class="p-chapter" data-astro-cid-ls576wlr>${p.chapter}</p> <h2 data-astro-cid-ls576wlr>${p.title}</h2> <div class="p-verses" data-astro-cid-ls576wlr> ${p.verses?.map((v) => renderTemplate`<p data-astro-cid-ls576wlr>${v[0]}<br data-astro-cid-ls576wlr>${v[1]}</p>`)} </div> </div>`} ${p.type === "credits" && renderTemplate`<div class="p-credits" data-astro-cid-ls576wlr> <h2 data-astro-cid-ls576wlr>${p.title}</h2> <p data-astro-cid-ls576wlr><strong data-astro-cid-ls576wlr>Written by <em data-astro-cid-ls576wlr>Flora May dela Cruz</em></strong></p> <p class="p-small" data-astro-cid-ls576wlr>Illustrations are AI-generated<br data-astro-cid-ls576wlr>Inspired by the art of <em data-astro-cid-ls576wlr><a href="https://www.instagram.com/olexolexole_artonly" target="_blank" rel="noopener noreferrer" data-astro-cid-ls576wlr>Ole</a></em></p> </div>`} </div>`)) })}`;
}, "/private/tmp/flora-component-build/src/pages/play/no-dream-is-too-big.astro", void 0);
const $$file = "/private/tmp/flora-component-build/src/pages/play/no-dream-is-too-big.astro";
const $$url = "/play/no-dream-is-too-big";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$NoDreamIsTooBig,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
