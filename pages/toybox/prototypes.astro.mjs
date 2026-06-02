/* empty css                                    */
import { q as createComponent, w as renderComponent, D as renderTemplate, v as maybeRenderHead, o as addAttribute } from '../../chunks/astro/server_D37m5tNR.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Dd7kTHl0.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const base = "/".endsWith("/") ? "/" : "//";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Toybox Prototypes - Flora May dela Cruz", "description": "Public, copy-friendly prototype source from the Toybox." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="border-b border-ink/10 pb-8"> <p class="text-sm uppercase tracking-widest text-muted"> <a${addAttribute(`${base}toybox`, "href")} class="hover:text-accent">Toybox</a> ${" / "} <span>Prototypes</span> </p> <h1 class="mt-3 text-4xl">Toybox prototypes</h1> <p class="mt-4 max-w-prose text-muted">
Public, copy-friendly prototype source. If you want to fork and adapt,
      start in the dedicated repository.
</p> </header> <section class="mt-10 rounded-lg border border-ink/10 p-6"> <h2 class="text-xl">Source repository</h2> <p class="mt-2 max-w-prose text-sm text-muted">
Everything intentionally shareable lives in this public repo.
</p> <p class="mt-4"> <a class="underline" href="https://github.com/floramaydc/toybox-prototypes" target="_blank" rel="noopener noreferrer">
github.com/floramaydc/toybox-prototypes
</a> </p> </section> <section class="mt-10"> <h2 class="text-xl">Current prototypes</h2> <ul class="mt-4 space-y-3"> <li> <a class="underline"${addAttribute(`${base}toybox/prototypes/demo-days-0-reference`, "href")}>
Demo days 0 to 14 reference
</a> </li> <li> <a class="underline"${addAttribute(`${base}toybox/prototypes/fluent-theme-toggle`, "href")}>
Fluent theme toggle demo
</a> </li> </ul> </section> ` })}`;
}, "/private/tmp/flora-component-build/src/pages/toybox/prototypes/index.astro", void 0);
const $$file = "/private/tmp/flora-component-build/src/pages/toybox/prototypes/index.astro";
const $$url = "/toybox/prototypes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
