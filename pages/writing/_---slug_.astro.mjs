/* empty css                                    */
import { p as createAstro, q as createComponent, w as renderComponent, D as renderTemplate, v as maybeRenderHead, o as addAttribute, g as Fragment, H as spreadAttributes } from '../../chunks/astro/server_D37m5tNR.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Dd7kTHl0.mjs';
import { g as getCollection } from '../../chunks/_astro_content_XxXwbPTn.mjs';
import { g as getPublicImageSize } from '../../chunks/publicImageSize_tT-4UM5E.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.floramaydc.com");
async function getStaticPaths() {
  const posts = await getCollection("writing");
  const visible = posts.filter((p) => !p.data.draft);
  const sorted = [...visible].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return sorted.map((post, i) => ({
    params: { slug: post.slug },
    props: {
      post,
      prev: i > 0 ? sorted[i - 1] : null,
      next: i < sorted.length - 1 ? sorted[i + 1] : null
    }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post, prev, next } = Astro2.props;
  const { Content } = await post.render();
  const base = "/".endsWith("/") ? "/" : "//";
  const fmtDate = (d) => d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const allPosts = await getCollection("writing");
  const visiblePosts = allPosts.filter((p) => !p.data.draft);
  const relatedPosts = visiblePosts.filter((p) => p.slug !== post.slug).map((p) => {
    const postTags = new Set(post.data.tags ?? []);
    const candidateTags = p.data.tags ?? [];
    const sharedTags = candidateTags.filter((t) => postTags.has(t)).length;
    const sameCategory = post.data.category && p.data.category && post.data.category === p.data.category ? 1 : 0;
    return { post: p, score: sharedTags * 3 + sameCategory * 2 };
  }).sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return b.post.data.date.getTime() - a.post.data.date.getTime();
  }).slice(0, 3).map((r) => r.post);
  const siteUrl = (Astro2.site?.toString() ?? "https://www.floramaydc.com/").replace(/\/$/, "");
  const postUrl = `${siteUrl}/writing/${post.slug}/`;
  const ogImage = post.data.cover ? `/${post.data.cover}` : "/og-default.png";
  const coverPath = post.data.cover ? post.data.cover.replace(/^\//, "") : null;
  const coverSize = coverPath ? getPublicImageSize(coverPath) : null;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.data.title,
      description: post.data.summary,
      datePublished: post.data.date.toISOString(),
      author: { "@type": "Person", name: "Flora May dela Cruz", url: `${siteUrl}/about` },
      image: post.data.cover ? `${siteUrl}/${post.data.cover}` : `${siteUrl}/og-default.png`,
      mainEntityOfPage: postUrl,
      keywords: post.data.tags?.join(", ")
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Writing", item: `${siteUrl}/writing/` },
        { "@type": "ListItem", position: 2, name: post.data.title, item: postUrl }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${post.data.title} — Writing`, "description": post.data.summary, "ogImage": ogImage, "ogType": "article", "jsonLd": jsonLd, "data-astro-cid-zgcwdgoy": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article data-astro-cid-zgcwdgoy> <header class="max-w-3xl" data-astro-cid-zgcwdgoy> <nav class="text-sm text-muted" aria-label="Breadcrumb" data-astro-cid-zgcwdgoy> <ol class="flex flex-wrap items-center gap-1" data-astro-cid-zgcwdgoy> <li data-astro-cid-zgcwdgoy><a${addAttribute(`${base}writing`, "href")} class="hover:text-accent underline" data-astro-cid-zgcwdgoy>Writing</a></li> ${post.data.category && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-zgcwdgoy": true }, { "default": async ($$result3) => renderTemplate` <li aria-hidden="true" data-astro-cid-zgcwdgoy>/</li> <li data-astro-cid-zgcwdgoy> <a${addAttribute(`${base}writing?category=${encodeURIComponent(post.data.category)}`, "href")} class="text-muted hover:text-accent underline" data-astro-cid-zgcwdgoy> ${post.data.category} </a> </li> ` })}`} <li aria-hidden="true" data-astro-cid-zgcwdgoy>/</li> <li class="text-ink/70 truncate" data-astro-cid-zgcwdgoy>${post.data.title}</li> </ol> </nav> <p class="mt-6 text-sm uppercase tracking-widest text-muted flex items-center gap-2 flex-wrap" data-astro-cid-zgcwdgoy> ${post.data.draft && renderTemplate`<span class="mr-2 rounded bg-amber-200/40 px-1.5 py-0.5 text-amber-800" data-astro-cid-zgcwdgoy>Draft</span>`} ${post.data.category ? renderTemplate`<a${addAttribute(`${base}writing?category=${encodeURIComponent(post.data.category)}`, "href")} class="category-link-pill" data-astro-cid-zgcwdgoy> ${post.data.category} </a>` : "Writing"} </p> <h1 class="mt-2 text-4xl md:text-5xl leading-tight" data-astro-cid-zgcwdgoy>${post.data.title}</h1> <p class="mt-4 text-sm text-muted" data-astro-cid-zgcwdgoy>${fmtDate(post.data.date)}</p> </header> ${post.data.cover && renderTemplate`<figure class="mt-10" data-astro-cid-zgcwdgoy> <img${addAttribute(`${base}${coverPath}`, "src")}${addAttribute(post.data.coverAlt ?? "", "alt")} loading="eager" fetchpriority="high" decoding="async"${spreadAttributes(coverSize ? { width: coverSize.width, height: coverSize.height } : {})} class="w-full rounded-lg" data-astro-cid-zgcwdgoy> ${post.data.coverAlt && renderTemplate`<figcaption class="mt-2 text-sm text-muted" data-astro-cid-zgcwdgoy>${post.data.coverAlt}</figcaption>`} </figure>`} <div class="prose prose-lg dark:prose-invert mt-10 max-w-3xl prose-headings:font-normal prose-h2:text-2xl prose-h3:text-xl prose-a:text-accent prose-img:rounded-lg" data-astro-cid-zgcwdgoy> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-zgcwdgoy": true })} </div> ${relatedPosts.length > 0 && renderTemplate`<section class="mt-14 max-w-3xl" aria-labelledby="related-writing" data-astro-cid-zgcwdgoy> <h2 id="related-writing" class="text-2xl" data-astro-cid-zgcwdgoy>Related writing</h2> <ul class="mt-4 grid gap-3 sm:grid-cols-3" data-astro-cid-zgcwdgoy> ${relatedPosts.map((p) => renderTemplate`<li class="rounded-lg border border-ink/10 p-4" data-astro-cid-zgcwdgoy> <a${addAttribute(`${base}writing/${p.slug}`, "href")} class="group block" data-astro-cid-zgcwdgoy> <p class="text-xs uppercase tracking-widest text-muted" data-astro-cid-zgcwdgoy>${p.data.category ?? "Writing"}</p> <p class="mt-2 text-base group-hover:text-accent" data-astro-cid-zgcwdgoy>${p.data.title}</p> <p class="mt-2 text-sm text-muted line-clamp-3" data-astro-cid-zgcwdgoy>${p.data.summary}</p> </a> </li>`)} </ul> </section>`} <nav class="mt-16 max-w-3xl grid gap-3 sm:grid-cols-2 text-sm" aria-label="More posts" data-astro-cid-zgcwdgoy> ${prev ? renderTemplate`<a${addAttribute(`${base}writing/${prev.slug}`, "href")} class="rounded-md py-4 hover:text-accent transition-colors" data-astro-cid-zgcwdgoy> <p class="text-[10px] uppercase tracking-widest text-muted" data-astro-cid-zgcwdgoy>← Newer post</p> <p class="mt-1 text-ink" data-astro-cid-zgcwdgoy>${prev.data.title}</p> </a>` : renderTemplate`<span class="hidden sm:block" data-astro-cid-zgcwdgoy></span>`} ${next ? renderTemplate`<a${addAttribute(`${base}writing/${next.slug}`, "href")} class="rounded-md py-4 hover:text-accent transition-colors sm:text-right" data-astro-cid-zgcwdgoy> <p class="text-[10px] uppercase tracking-widest text-muted" data-astro-cid-zgcwdgoy>Older post →</p> <p class="mt-1 text-ink" data-astro-cid-zgcwdgoy>${next.data.title}</p> </a>` : renderTemplate`<span class="hidden sm:block" data-astro-cid-zgcwdgoy></span>`} </nav> </article> ` })} `;
}, "/private/tmp/flora-component-build/src/pages/writing/[...slug].astro", void 0);
const $$file = "/private/tmp/flora-component-build/src/pages/writing/[...slug].astro";
const $$url = "/writing/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
