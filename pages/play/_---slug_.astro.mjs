/* empty css                                    */
import { p as createAstro, q as createComponent, w as renderComponent, D as renderTemplate, v as maybeRenderHead, o as addAttribute, H as spreadAttributes } from '../../chunks/astro/server_D37m5tNR.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Dd7kTHl0.mjs';
import { g as getCollection } from '../../chunks/_astro_content_XxXwbPTn.mjs';
import { g as getPublicImageSize } from '../../chunks/publicImageSize_tT-4UM5E.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.floramaydc.com");
async function getStaticPaths() {
  const entries = await getCollection("play");
  const explicitRoutes = /* @__PURE__ */ new Set([
    "art",
    "no-dream-is-too-big",
    "pale-and-bright",
    "tabulas"
  ]);
  const sorted = entries.filter((e) => !e.data.external).filter((e) => !explicitRoutes.has(e.slug)).sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
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
  const playUrl = `${siteUrl}/play/${entry.slug}/`;
  const coverPath = entry.data.cover ? entry.data.cover.replace(/^\//, "") : null;
  const coverSize = coverPath ? getPublicImageSize(coverPath) : null;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: entry.data.title,
      headline: entry.data.title,
      description: entry.data.summary,
      url: playUrl,
      author: { "@type": "Person", name: "Flora May dela Cruz", url: `${siteUrl}/about` },
      datePublished: entry.data.year ? `${entry.data.year}-01-01` : void 0,
      image: entry.data.cover ? `${siteUrl}/${entry.data.cover.replace(/^\//, "")}` : `${siteUrl}/og-default.png`,
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${entry.data.title} — Play`, "description": entry.data.summary, "ogType": "article", "jsonLd": jsonLd }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="mx-auto max-w-3xl"> <nav class="text-sm text-muted" aria-label="Breadcrumb"> <ol class="flex flex-wrap items-center gap-1"> <li><a${addAttribute(`${baseUrl}play`, "href")} class="hover:text-accent underline">Play</a></li> <li aria-hidden="true">/</li> <li class="text-ink/70 truncate">${entry.data.title}</li> </ol> </nav> <p class="mt-6 text-sm uppercase tracking-widest text-muted">Play</p> <h1 class="mt-2 font-serif text-4xl md:text-5xl text-ink">${entry.data.title}</h1> <p class="mt-3 text-lg text-muted">${entry.data.summary}</p> ${(entry.data.year || entry.data.medium) && renderTemplate`<dl class="mt-6 grid grid-cols-2 gap-4 text-sm border-t border-cream pt-6"> ${entry.data.medium && renderTemplate`<div><dt class="text-muted uppercase tracking-wider text-xs">Medium</dt><dd class="mt-1 text-ink">${entry.data.medium}</dd></div>`} ${entry.data.year && renderTemplate`<div><dt class="text-muted uppercase tracking-wider text-xs">Year</dt><dd class="mt-1 text-ink">${entry.data.year}</dd></div>`} </dl>`} ${entry.data.cover && renderTemplate`<img${addAttribute(`${baseUrl}${coverPath}`, "src")}${addAttribute(entry.data.coverAlt || entry.data.title, "alt")} loading="eager" fetchpriority="high" decoding="async"${spreadAttributes(coverSize ? { width: coverSize.width, height: coverSize.height } : {})} class="mt-8 w-full rounded-lg">`} <div class="prose prose-lg dark:prose-invert mt-10 max-w-none"> ${renderComponent($$result2, "Content", Content, {})} </div> ${(prev || next) && renderTemplate`<nav class="mt-16 grid gap-3 sm:grid-cols-2 text-sm" aria-label="More play"> ${prev ? renderTemplate`<a${addAttribute(`${baseUrl}play/${prev.slug}`, "href")} class="rounded-md py-4 hover:text-accent transition-colors"> <p class="text-[10px] uppercase tracking-widest text-muted">← Previous</p> <p class="mt-1 text-ink">${prev.data.title}</p> </a>` : renderTemplate`<span class="hidden sm:block"></span>`} ${next ? renderTemplate`<a${addAttribute(`${baseUrl}play/${next.slug}`, "href")} class="rounded-md py-4 hover:text-accent transition-colors sm:text-right"> <p class="text-[10px] uppercase tracking-widest text-muted">Next →</p> <p class="mt-1 text-ink">${next.data.title}</p> </a>` : renderTemplate`<span class="hidden sm:block"></span>`} </nav>`} </article> ` })}`;
}, "/private/tmp/flora-component-build/src/pages/play/[...slug].astro", void 0);
const $$file = "/private/tmp/flora-component-build/src/pages/play/[...slug].astro";
const $$url = "/play/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
