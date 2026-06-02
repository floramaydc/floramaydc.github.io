/* empty css                                 */
import { q as createComponent, w as renderComponent, D as renderTemplate, v as maybeRenderHead, o as addAttribute, H as spreadAttributes } from '../chunks/astro/server_D37m5tNR.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Dd7kTHl0.mjs';
import { g as getCollection } from '../chunks/_astro_content_XxXwbPTn.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const entries = await getCollection("play");
  entries.sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
  const base = "/".endsWith("/") ? "/" : "//";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Play — Flora May dela Cruz", "description": "Creative projects by Flora May dela Cruz across art, interior storytelling, campaigns, and personal experiments.", "data-astro-cid-azwkwwca": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl" data-astro-cid-azwkwwca>Play</h1> <p class="mt-3 text-muted max-w-2xl" data-astro-cid-azwkwwca>Outside of UX work, I create stories, spaces, and images. It's how I stay curious and connected to myself.</p> <ul class="mt-10 play-grid" data-astro-cid-azwkwwca> ${entries.map((e) => {
    const href = e.data.external ?? `${base}play/${e.slug}`;
    const isExternal = !!e.data.external;
    const slug = e.slug;
    return renderTemplate`<li class="play-card" data-astro-cid-azwkwwca> <a class="play-card-link"${addAttribute(href, "href")}${spreadAttributes(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})} data-astro-cid-azwkwwca> <span${addAttribute(`book-cover book-cover--${slug}`, "class")} aria-hidden="true" data-astro-cid-azwkwwca> ${slug === "no-dream-is-too-big" && renderTemplate`<span class="cover-ndtb" data-astro-cid-azwkwwca> <span class="ndtb-img"${addAttribute(`background-image:url('${base}images/play/ndtb/cover.webp')`, "style")} data-astro-cid-azwkwwca></span> </span>`} ${slug === "pale-and-bright" && renderTemplate`<span class="cover-pnb" data-astro-cid-azwkwwca> <span class="pnb-masthead" data-astro-cid-azwkwwca>Pale &amp; Bright</span> <span class="pnb-issue" data-astro-cid-azwkwwca>Issue No. 01 · 2022</span> <span class="pnb-photo"${addAttribute(`background-image:url('${base}images/play/paleandbright/living-room.jpg')`, "style")} data-astro-cid-azwkwwca></span> <span class="pnb-coverline" data-astro-cid-azwkwwca>A townhouse,<br data-astro-cid-azwkwwca>made together.</span> <span class="pnb-foot" data-astro-cid-azwkwwca>Pale &amp; Bright · Interior</span> </span>`} ${slug === "art" && renderTemplate`<span class="cover-art" data-astro-cid-azwkwwca> <span class="art-stamp" data-astro-cid-azwkwwca>Dossier<br data-astro-cid-azwkwwca>No. 02</span> <span class="art-rule" data-astro-cid-azwkwwca></span> <span class="art-title" data-astro-cid-azwkwwca>Art</span> <span class="art-sub" data-astro-cid-azwkwwca>A working catalog<br data-astro-cid-azwkwwca>of weekend pieces</span> <span class="art-rule" data-astro-cid-azwkwwca></span> <span class="art-meta" data-astro-cid-azwkwwca>F.M. dela Cruz · 2014 — ongoing</span> </span>`} ${slug === "tabulas" && renderTemplate`<span class="cover-tab" data-astro-cid-azwkwwca> <span class="tab-eyebrow" data-astro-cid-azwkwwca>Campaign No. 03</span> <span class="tab-stars" data-astro-cid-azwkwwca>★ ★ ★ ★ ★</span> <span class="tab-vote" data-astro-cid-azwkwwca>Vote</span> <span class="tab-title" data-astro-cid-azwkwwca>Tabulas</span> <span class="tab-tag" data-astro-cid-azwkwwca>A campaign for the<br data-astro-cid-azwkwwca>personal web · 2003 — 2012</span> </span>`} </span> <span class="play-card-body" data-astro-cid-azwkwwca> <h2 class="text-2xl play-card-title" data-astro-cid-azwkwwca>${e.data.title}</h2> ${e.data.medium && renderTemplate`<span class="text-xs uppercase tracking-widest text-muted play-card-medium" data-astro-cid-azwkwwca>${e.data.medium}</span>`} <p class="mt-2 text-sm text-muted play-card-summary" data-astro-cid-azwkwwca>${e.data.summary}</p> ${isExternal && renderTemplate`<p class="mt-3 text-xs text-muted" data-astro-cid-azwkwwca>↗ external</p>`} </span> </a> </li>`;
  })} </ul> ` })} `;
}, "/private/tmp/flora-component-build/src/pages/play/index.astro", void 0);
const $$file = "/private/tmp/flora-component-build/src/pages/play/index.astro";
const $$url = "/play";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
