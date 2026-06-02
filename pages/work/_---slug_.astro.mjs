/* empty css                                    */
import { p as createAstro, q as createComponent, D as renderTemplate, u as defineScriptVars, w as renderComponent, v as maybeRenderHead, o as addAttribute, H as spreadAttributes } from '../../chunks/astro/server_D37m5tNR.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Dd7kTHl0.mjs';
import { g as getCollection } from '../../chunks/_astro_content_XxXwbPTn.mjs';
import { g as getPublicImageSize } from '../../chunks/publicImageSize_tT-4UM5E.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.floramaydc.com");
async function getStaticPaths() {
  const entries = await getCollection("work");
  const sorted = [...entries].filter((e) => !e.data.wip && !e.data.hidden).sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
  return sorted.map((entry, i) => ({
    params: { slug: entry.slug },
    props: {
      entry,
      prev: i > 0 ? sorted[i - 1] : null,
      next: i < sorted.length - 1 ? sorted[i + 1] : null
    }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry, prev, next } = Astro2.props;
  const { Content } = await entry.render();
  const baseUrl = "/".endsWith("/") ? "/" : "//";
  const siteUrl = (Astro2.site?.toString() ?? "https://www.floramaydc.com/").replace(/\/$/, "");
  const caseStudyUrl = `${siteUrl}/work/${entry.slug}/`;
  const coverPath = entry.data.cover ? entry.data.cover.replace(/^\//, "") : null;
  const coverSize = coverPath ? getPublicImageSize(coverPath) : null;
  const allWork = await getCollection("work");
  const visibleWork = allWork.filter((e) => !e.data.hidden && !e.data.wip);
  const relatedWork = visibleWork.filter((e) => e.slug !== entry.slug).map((e) => {
    const entryTags = new Set(entry.data.tags ?? []);
    const candidateTags = e.data.tags ?? [];
    const sharedTags = candidateTags.filter((t) => entryTags.has(t)).length;
    const sameYear = entry.data.year && e.data.year && entry.data.year === e.data.year ? 1 : 0;
    return { entry: e, score: sharedTags * 3 + sameYear };
  }).sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return (a.entry.data.order ?? 99) - (b.entry.data.order ?? 99);
  }).slice(0, 3).map((r) => r.entry);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: entry.data.title,
      headline: entry.data.title,
      description: entry.data.summary,
      author: { "@type": "Person", name: "Flora May dela Cruz", url: `${siteUrl}/about` },
      url: caseStudyUrl,
      datePublished: entry.data.year ? `${entry.data.year}-01-01` : void 0,
      image: entry.data.cover ? `${siteUrl}/${entry.data.cover.replace(/^\//, "")}` : `${siteUrl}/og-default.png`,
      creator: {
        "@type": "Person",
        name: "Flora May dela Cruz",
        jobTitle: entry.data.role || "Product Designer"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Work", item: `${siteUrl}/work/` },
        { "@type": "ListItem", position: 2, name: entry.data.title, item: caseStudyUrl }
      ]
    }
  ];
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", "\n  (function () {\n    function dispatchTrack(name, params) {\n      window.dispatchEvent(new CustomEvent('site:track', {\n        detail: {\n          name: name,\n          params: params,\n        },\n      }));\n    }\n\n    dispatchTrack('work_case_study_view', {\n      case_study_slug: caseStudySlug,\n      case_study_title: caseStudyTitle,\n      case_study_year: caseStudyYear,\n      page_path: window.location.pathname,\n    });\n\n    document.addEventListener('click', function (evt) {\n      var target = evt.target;\n      if (!target || typeof target.closest !== 'function') return;\n      var anchor = target.closest('[data-track-case-study-nav]');\n      if (!anchor) return;\n\n      dispatchTrack('work_case_study_nav_click', {\n        source_case_study_slug: caseStudySlug,\n        target_case_study_slug: anchor.dataset.navSlug || '',\n        target_case_study_title: anchor.dataset.navTitle || '',\n        nav_direction: anchor.dataset.navDirection || '',\n        page_path: window.location.pathname,\n      });\n    }, { passive: true });\n  })();\n})();</script>"])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${entry.data.title} — Work`, "description": entry.data.summary, "ogType": "article", "jsonLd": jsonLd }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="mx-auto max-w-3xl"> <nav class="text-sm text-muted" aria-label="Breadcrumb"> <ol class="flex flex-wrap items-center gap-1"> <li><a${addAttribute(`${baseUrl}work`, "href")} class="hover:text-accent underline">Work</a></li> <li aria-hidden="true">/</li> <li class="text-ink/70 truncate">${entry.data.title}</li> </ol> </nav> <p class="mt-6 text-sm uppercase tracking-widest text-muted">Case study</p> <h1 class="mt-2 font-serif text-4xl md:text-5xl text-ink">${entry.data.title}</h1> <p class="mt-3 text-lg text-muted">${entry.data.summary}</p> ${(entry.data.organization || entry.data.client || entry.data.role || entry.data.year || entry.data.team) && renderTemplate`<dl class="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm border-t border-cream pt-6"> ${(entry.data.organization || entry.data.client) && renderTemplate`<div><dt class="text-muted uppercase tracking-wider text-xs">Organization</dt><dd class="mt-1 text-ink">${entry.data.organization ?? entry.data.client}</dd></div>`} ${entry.data.role && renderTemplate`<div><dt class="text-muted uppercase tracking-wider text-xs">Role</dt><dd class="mt-1 text-ink">${entry.data.role}</dd></div>`} ${entry.data.team && renderTemplate`<div><dt class="text-muted uppercase tracking-wider text-xs">Team</dt><dd class="mt-1 text-ink">${entry.data.team}</dd></div>`} ${entry.data.year && renderTemplate`<div><dt class="text-muted uppercase tracking-wider text-xs">Year</dt><dd class="mt-1 text-ink">${entry.data.year}</dd></div>`} </dl>`} ${entry.data.cover && renderTemplate`<img${addAttribute(`${baseUrl}${coverPath}`, "src")}${addAttribute(entry.data.coverAlt || entry.data.title, "alt")} loading="eager" fetchpriority="high" decoding="async"${spreadAttributes(coverSize ? { width: coverSize.width, height: coverSize.height } : {})} class="mt-8 w-full rounded-lg">`} <div class="prose prose-lg dark:prose-invert mt-10 max-w-none"> ${renderComponent($$result2, "Content", Content, {})} </div> ${relatedWork.length > 0 && renderTemplate`<section class="mt-14" aria-labelledby="related-work"> <h2 id="related-work" class="text-2xl">Related case studies</h2> <ul class="mt-4 grid gap-3 sm:grid-cols-3"> ${relatedWork.map((w) => renderTemplate`<li class="rounded-lg border border-ink/10 p-4"> <a${addAttribute(`${baseUrl}work/${w.slug}`, "href")} class="group block"> <p class="text-xs uppercase tracking-widest text-muted">${w.data.year ?? "Work"}</p> <p class="mt-2 text-base group-hover:text-accent">${w.data.title}</p> <p class="mt-2 text-sm text-muted line-clamp-3">${w.data.summary}</p> </a> </li>`)} </ul> </section>`} ${(prev || next) && renderTemplate`<nav class="mt-16 grid gap-3 sm:grid-cols-2 text-sm" aria-label="More case studies"> ${prev ? renderTemplate`<a${addAttribute(`${baseUrl}work/${prev.slug}`, "href")} class="rounded-md py-4 hover:text-accent transition-colors" data-track-case-study-nav data-nav-direction="previous"${addAttribute(prev.slug, "data-nav-slug")}${addAttribute(prev.data.title, "data-nav-title")}> <p class="text-[10px] uppercase tracking-widest text-muted">← Previous</p> <p class="mt-1 text-ink">${prev.data.title}</p> </a>` : renderTemplate`<span class="hidden sm:block"></span>`} ${next ? renderTemplate`<a${addAttribute(`${baseUrl}work/${next.slug}`, "href")} class="rounded-md py-4 hover:text-accent transition-colors sm:text-right" data-track-case-study-nav data-nav-direction="next"${addAttribute(next.slug, "data-nav-slug")}${addAttribute(next.data.title, "data-nav-title")}> <p class="text-[10px] uppercase tracking-widest text-muted">Next →</p> <p class="mt-1 text-ink">${next.data.title}</p> </a>` : renderTemplate`<span class="hidden sm:block"></span>`} </nav>`} </article> ` }), defineScriptVars({ caseStudySlug: entry.slug, caseStudyTitle: entry.data.title, caseStudyYear: entry.data.year ?? "" }));
}, "/private/tmp/flora-component-build/src/pages/work/[...slug].astro", void 0);
const $$file = "/private/tmp/flora-component-build/src/pages/work/[...slug].astro";
const $$url = "/work/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
