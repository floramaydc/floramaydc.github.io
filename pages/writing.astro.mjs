/* empty css                                 */
import { p as createAstro, q as createComponent, w as renderComponent, D as renderTemplate, o as addAttribute, H as spreadAttributes, v as maybeRenderHead } from '../chunks/astro/server_D37m5tNR.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Dd7kTHl0.mjs';
import { g as getCollection } from '../chunks/_astro_content_XxXwbPTn.mjs';
import { g as getPublicImageSize } from '../chunks/publicImageSize_tT-4UM5E.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.floramaydc.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const all = await getCollection("writing");
  const publishedPosts = all.filter((p) => !p.data.draft);
  const posts = all.filter((p) => !p.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const categories = Array.from(new Set(publishedPosts.map((p) => p.data.category).filter(Boolean))).sort((a, b) => a.localeCompare(b));
  const publishedCategorySet = new Set(categories.map((c) => c.toLowerCase()));
  const base = "/".endsWith("/") ? "/" : "//";
  const fmtDate = (d) => d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const siteUrl = (Astro2.site?.toString() ?? "https://www.floramaydc.com/").replace(/\/$/, "");
  const pageUrl = `${siteUrl}/writing/`;
  const writingDescription = "Writing by Flora May dela Cruz on UX and product design craft, accessibility, systems thinking, travel, and everyday practice.";
  const writingJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Writing — Flora May dela Cruz",
      description: writingDescription,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      inLanguage: "en"
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${pageUrl}#itemlist`,
      name: "Writing posts",
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      numberOfItems: posts.length,
      itemListElement: posts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${siteUrl}/writing/${p.slug}/`,
        name: p.data.title
      }))
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Writing — Flora May dela Cruz", "description": writingDescription, "jsonLd": writingJsonLd, "data-astro-cid-cp3zdscb": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<header class="max-w-2xl" data-astro-cid-cp3zdscb> <p class="text-sm uppercase tracking-widest text-muted" data-astro-cid-cp3zdscb>Writing</p> <h1 class="mt-2 text-4xl md:text-5xl leading-tight" data-astro-cid-cp3zdscb>Notes from the desk &amp; the road</h1> <p class="mt-4 text-lg text-muted" data-astro-cid-cp3zdscb>Short pieces on design craft — usually the reasoning behind a Toybox playbook — plus travel notes, recipes, and the occasional opinion.</p> </header> ', "", '<p id="writing-filter-status" class="mt-6 text-sm text-muted" aria-live="polite" data-astro-cid-cp3zdscb></p> <ul id="writing-list" class="mt-8 writing-grid" data-astro-cid-cp3zdscb> ', " </ul> <script>\n    (function () {\n      function normalizeCategory(value) {\n        return (value || '').trim().toLowerCase();\n      }\n\n      function initWritingCategoryFilter() {\n        var list = document.getElementById('writing-list');\n        if (!list) return;\n\n        var items = Array.prototype.slice.call(list.querySelectorAll('[data-post-category]'));\n        var chips = Array.prototype.slice.call(document.querySelectorAll('[data-category-filter]'));\n        var status = document.getElementById('writing-filter-status');\n        if (!items.length || !chips.length) return;\n\n        function getRequestedCategory() {\n          var params = new URLSearchParams(window.location.search);\n          var raw = params.get('category');\n          return raw ? raw.trim() : '';\n        }\n\n        function applyCategory(rawCategory, shouldPushUrl) {\n          var normalized = normalizeCategory(rawCategory);\n          var visibleCount = 0;\n\n          items.forEach(function (item) {\n            var category = normalizeCategory(item.getAttribute('data-post-category'));\n            var show = !normalized || normalized === 'all' || category === normalized;\n            item.hidden = !show;\n            if (show) visibleCount += 1;\n          });\n\n          chips.forEach(function (chip) {\n            var chipCategory = normalizeCategory(chip.getAttribute('data-category-filter'));\n            var active = (!normalized || normalized === 'all')\n              ? chipCategory === 'all'\n              : chipCategory === normalized;\n            chip.classList.toggle('is-active', active);\n            if (active) chip.setAttribute('aria-current', 'page');\n            else chip.removeAttribute('aria-current');\n          });\n\n          if (status) {\n            status.textContent = (!normalized || normalized === 'all')\n              ? 'Showing all articles'\n              : 'Showing ' + visibleCount + ' article' + (visibleCount === 1 ? '' : 's') + ' in ' + rawCategory;\n          }\n\n          if (shouldPushUrl) {\n            var url = new URL(window.location.href);\n            if (!normalized || normalized === 'all') url.searchParams.delete('category');\n            else url.searchParams.set('category', rawCategory);\n            window.history.pushState({}, '', url.toString());\n          }\n        }\n\n        chips.forEach(function (chip) {\n          chip.addEventListener('click', function (event) {\n            event.preventDefault();\n            var rawCategory = chip.getAttribute('data-category-filter') || '';\n            applyCategory(rawCategory, true);\n          });\n        });\n\n        applyCategory(getRequestedCategory() || 'all', false);\n\n        window.addEventListener('popstate', function () {\n          applyCategory(getRequestedCategory() || 'all', false);\n        });\n      }\n\n      if (document.readyState === 'loading') {\n        document.addEventListener('DOMContentLoaded', initWritingCategoryFilter);\n      } else {\n        initWritingCategoryFilter();\n      }\n    })();\n  </script> "])), maybeRenderHead(), categories.length > 0 && renderTemplate`<nav class="mt-8" aria-label="Filter writing by category" data-astro-cid-cp3zdscb> <ul class="flex flex-wrap gap-2" data-astro-cid-cp3zdscb> <li data-astro-cid-cp3zdscb> <a${addAttribute(`${base}writing`, "href")} data-category-filter="all" class="category-filter-chip" data-astro-cid-cp3zdscb>
All
</a> </li> ${categories.map((category) => renderTemplate`<li data-astro-cid-cp3zdscb> <a${addAttribute(`${base}writing?category=${encodeURIComponent(category)}`, "href")}${addAttribute(category, "data-category-filter")} class="category-filter-chip" data-astro-cid-cp3zdscb> ${category} </a> </li>`)} </ul> </nav>`, posts.length === 0 && renderTemplate`<p class="mt-16 text-muted" data-astro-cid-cp3zdscb>No posts published yet. Check back soon.</p>`, posts.map((p, i) => renderTemplate`<li class="group"${addAttribute(
    p.data.category && publishedCategorySet.has(p.data.category.toLowerCase()) ? p.data.category : "Uncategorized",
    "data-post-category"
  )} data-astro-cid-cp3zdscb> <a${addAttribute(`${base}writing/${p.slug}`, "href")} class="block" data-astro-cid-cp3zdscb> ${p.data.cover && renderTemplate`<div class="aspect-[4/3] overflow-hidden rounded-lg bg-ink/5" data-astro-cid-cp3zdscb> ${(() => {
    const coverPath = p.data.cover.replace(/^\//, "");
    const coverSize = getPublicImageSize(coverPath);
    return renderTemplate`<img${addAttribute(`${base}${coverPath}`, "src")}${addAttribute(p.data.coverAlt ?? "", "alt")}${addAttribute(i === 0 ? "eager" : "lazy", "loading")}${addAttribute(i === 0 ? "high" : "auto", "fetchpriority")} decoding="async"${spreadAttributes(coverSize ? { width: coverSize.width, height: coverSize.height } : {})} class="h-full w-full object-cover transition duration-500 group-hover:scale-105" data-astro-cid-cp3zdscb>`;
  })()} </div>`} </a> <div class="mt-4" data-astro-cid-cp3zdscb> ${(p.data.category || p.data.draft) && renderTemplate`<p class="text-xs uppercase tracking-widest text-muted flex items-center gap-2 flex-wrap" data-astro-cid-cp3zdscb> ${p.data.draft && renderTemplate`<span class="rounded bg-amber-200/40 px-1.5 py-0.5 text-amber-800" data-astro-cid-cp3zdscb>Draft</span>`} ${p.data.category && publishedCategorySet.has(p.data.category.toLowerCase()) && renderTemplate`<a${addAttribute(`${base}writing?category=${encodeURIComponent(p.data.category)}`, "href")}${addAttribute(p.data.category, "data-category-filter")} class="category-link-pill" data-astro-cid-cp3zdscb> ${p.data.category} </a>`} </p>`} <h2 class="mt-2 text-2xl leading-snug group-hover:text-accent" data-astro-cid-cp3zdscb> <a${addAttribute(`${base}writing/${p.slug}`, "href")} class="hover:text-accent" data-astro-cid-cp3zdscb>${p.data.title}</a> </h2> <p class="mt-2 text-sm text-muted" data-astro-cid-cp3zdscb>${fmtDate(p.data.date)}</p> <p class="mt-3 text-muted" data-astro-cid-cp3zdscb>${p.data.summary}</p> </div> </li>`)) })} `;
}, "/private/tmp/flora-component-build/src/pages/writing/index.astro", void 0);
const $$file = "/private/tmp/flora-component-build/src/pages/writing/index.astro";
const $$url = "/writing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
