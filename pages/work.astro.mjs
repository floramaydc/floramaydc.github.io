/* empty css                                 */
import { p as createAstro, q as createComponent, D as renderTemplate, w as renderComponent, v as maybeRenderHead, g as Fragment, o as addAttribute, H as spreadAttributes } from '../chunks/astro/server_D37m5tNR.mjs';
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
  const entries = await getCollection("work");
  entries.sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
  const visible = entries.filter((e) => !e.data.hidden);
  const selected = visible.filter((e) => !e.data.archive);
  const archive = visible.filter((e) => e.data.archive);
  const base = "/".endsWith("/") ? "/" : "//";
  const img = (p) => p ? `${base}${p.replace(/^\//, "")}` : "";
  const siteUrl = (Astro2.site?.toString() ?? "https://www.floramaydc.com/").replace(/\/$/, "");
  const pageUrl = `${siteUrl}/work/`;
  const workDescription = "UX and product design case studies by Flora May dela Cruz across enterprise cloud, security, and AI experiences.";
  const workJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Work — Flora May dela Cruz",
      description: workDescription,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      inLanguage: "en"
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${pageUrl}#itemlist`,
      name: "Case studies and projects",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: visible.length,
      itemListElement: visible.map((e, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${siteUrl}/work/${e.slug}/`,
        name: e.data.title
      }))
    }
  ];
  return renderTemplate(_a || (_a = __template(["", " <script>\n  (function () {\n    function emitCaseStudyClick(anchor) {\n      if (!anchor) return;\n      window.dispatchEvent(new CustomEvent('site:track', {\n        detail: {\n          name: 'work_case_study_click',\n          params: {\n            case_study_slug: anchor.dataset.caseStudySlug || '',\n            case_study_title: anchor.dataset.caseStudyTitle || '',\n            case_study_section: anchor.dataset.caseStudySection || 'selected',\n            page_path: window.location.pathname,\n          },\n        },\n      }));\n    }\n\n    document.addEventListener('click', function (evt) {\n      var target = evt.target;\n      if (!target || typeof target.closest !== 'function') return;\n      var anchor = target.closest('[data-track-case-study-link]');\n      if (!anchor) return;\n      emitCaseStudyClick(anchor);\n    }, { passive: true });\n  })();\n</script> "])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Work — Flora May dela Cruz", "description": workDescription, "jsonLd": workJsonLd, "data-astro-cid-57l5znwr": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl" data-astro-cid-57l5znwr>Work</h1> <p class="mt-3 text-muted" data-astro-cid-57l5znwr>Selected case studies and projects.</p> <ul class="mt-10 work-grid" data-astro-cid-57l5znwr> ${selected.map((e, i) => {
    const cardClass = "group h-full rounded-lg border border-ink/10 overflow-hidden hover:border-accent transition-colors flex flex-col";
    const coverPath = e.data.cover ? e.data.cover.replace(/^\//, "") : null;
    const coverSize = coverPath ? getPublicImageSize(coverPath) : null;
    const inner = renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-57l5znwr": true }, { "default": async ($$result3) => renderTemplate`${e.data.cover && renderTemplate`<div class="aspect-[16/9] overflow-hidden bg-cream" data-astro-cid-57l5znwr> <img${addAttribute(img(coverPath ?? e.data.cover), "src")}${addAttribute(e.data.coverAlt ?? e.data.title, "alt")}${addAttribute(i === 0 ? "eager" : "lazy", "loading")}${addAttribute(i === 0 ? "high" : "auto", "fetchpriority")} decoding="async"${spreadAttributes(coverSize ? { width: coverSize.width, height: coverSize.height } : {})} class="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" data-astro-cid-57l5znwr> </div>`}<div class="p-6 flex-1" data-astro-cid-57l5znwr> <div class="flex items-start justify-between gap-3" data-astro-cid-57l5znwr> <h2 class="text-2xl" data-astro-cid-57l5znwr>${e.data.title}</h2> ${e.data.wip && renderTemplate`<span class="shrink-0 mt-1 text-[10px] uppercase tracking-widest rounded-full border border-ink/15 bg-cream px-2 py-0.5 text-muted" data-astro-cid-57l5znwr>In&nbsp;progress</span>`} </div> ${e.data.year && renderTemplate`<p class="mt-1 text-xs uppercase tracking-widest text-muted" data-astro-cid-57l5znwr>${e.data.year}</p>`} <p class="mt-2 text-sm text-muted" data-astro-cid-57l5znwr>${e.data.summary}</p> ${e.data.wip && renderTemplate`<p class="mt-3 text-xs text-muted italic" data-astro-cid-57l5znwr>Case study in progress — check back soon.</p>`} </div> ` })}`;
    return renderTemplate`<li data-astro-cid-57l5znwr> ${e.data.wip ? renderTemplate`<div${addAttribute(cardClass + " opacity-90", "class")} data-astro-cid-57l5znwr>${inner}</div>` : renderTemplate`<a${addAttribute(`${base}work/${e.slug}`, "href")}${addAttribute(cardClass, "class")} data-track-case-study-link${addAttribute(e.slug, "data-case-study-slug")}${addAttribute(e.data.title, "data-case-study-title")} data-case-study-section="selected" data-astro-cid-57l5znwr>${inner}</a>`} </li>`;
  })} </ul> ${archive.length > 0 && renderTemplate`<section class="mt-20" data-astro-cid-57l5znwr> <h2 class="text-2xl" data-astro-cid-57l5znwr>Archive</h2> <p class="mt-2 text-sm text-muted" data-astro-cid-57l5znwr>Older work from earlier in my career. Different scope, same lens.</p> <ul class="mt-8 work-grid work-grid--archive" data-astro-cid-57l5znwr> ${archive.map((e) => renderTemplate`<li class="rounded-lg border border-ink/10 p-6 hover:border-accent transition-colors" data-astro-cid-57l5znwr> <a${addAttribute(`${base}work/${e.slug}`, "href")} data-track-case-study-link${addAttribute(e.slug, "data-case-study-slug")}${addAttribute(e.data.title, "data-case-study-title")} data-case-study-section="archive" data-astro-cid-57l5znwr> <h3 class="text-xl" data-astro-cid-57l5znwr>${e.data.title}</h3> ${e.data.year && renderTemplate`<p class="mt-1 text-xs uppercase tracking-widest text-muted" data-astro-cid-57l5znwr>${e.data.year}</p>`} <p class="mt-2 text-sm text-muted" data-astro-cid-57l5znwr>${e.data.summary}</p> </a> </li>`)} </ul> </section>`}` }));
}, "/private/tmp/flora-component-build/src/pages/work/index.astro", void 0);
const $$file = "/private/tmp/flora-component-build/src/pages/work/index.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
