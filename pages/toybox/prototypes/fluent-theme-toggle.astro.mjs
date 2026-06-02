/* empty css                                       */
import { q as createComponent, w as renderComponent, D as renderTemplate, v as maybeRenderHead, o as addAttribute } from '../../../chunks/astro/server_D37m5tNR.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_Dd7kTHl0.mjs';
export { renderers } from '../../../renderers.mjs';

const $$FluentThemeToggle = createComponent(($$result, $$props, $$slots) => {
  const base = "/".endsWith("/") ? "/" : "//";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Fluent theme toggle prototype — Flora May dela Cruz", "description": "A live demo of Microsoft's open-source Fluent design system rendering in light and dark mode, embedded in a non-Microsoft site to show its accessibility and craft on their own merits." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="border-b border-ink/10 pb-8"> <p class="text-sm uppercase tracking-widest text-muted"> <a${addAttribute(`${base}toybox`, "href")} class="hover:text-accent">Toybox</a> ${" / "} <a${addAttribute(`${base}toybox/fluent-theme-toggle`, "href")} class="hover:text-accent">Fluent theme toggle</a> ${" / "} <span>Live demo</span> </p> <h1 class="mt-3 text-4xl">Fluent theme toggle — live demo</h1> <p class="mt-4 max-w-prose text-muted">
The same components in light and dark, switched in place. Toggle in the
      top-right of the demo. Your choice is remembered on this device.
</p> <p class="mt-3 max-w-prose text-sm text-muted">
Built with the public <a class="underline" href="https://github.com/microsoft/fluentui" target="_blank" rel="noopener noreferrer">@fluentui/react-components</a>
package — no internal MS code, no internal MS assets. The point: when you
      strip the brand context, Fluent reads as a quietly accessible system, not
      an enterprise lock-in.
</p> </header> <div class="mt-10"> ${renderComponent($$result2, "FluentShowcase", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/private/tmp/flora-component-build/src/components/FluentShowcase.tsx", "client:component-export": "default" })} </div> <section class="mt-10 rounded-lg border border-ink/10 bg-cream/40 p-6"> <h2 class="text-xl">Get this prototype</h2> <p class="mt-2 max-w-prose text-sm text-muted">
Baseline implementation source is public. Clone it, install dependencies,
      and run it locally.
</p> <p class="mt-4"> <a class="underline" href="https://github.com/floramaydc/toybox-prototypes" target="_blank" rel="noopener noreferrer">
github.com/floramaydc/toybox-prototypes
</a> </p> <pre class="mt-4 overflow-x-auto rounded-md border border-ink/10 bg-paper p-4 text-xs"><code>git clone https://github.com/floramaydc/toybox-prototypes.git
cd toybox-prototypes
npm install
npm run dev</code></pre> </section> <footer class="mt-12 border-t border-ink/10 pt-6 text-sm text-muted"> <p> <a class="underline"${addAttribute(`${base}toybox/fluent-theme-toggle`, "href")}>← Back to the write-up</a> </p> </footer> ` })}`;
}, "/private/tmp/flora-component-build/src/pages/toybox/prototypes/fluent-theme-toggle.astro", void 0);
const $$file = "/private/tmp/flora-component-build/src/pages/toybox/prototypes/fluent-theme-toggle.astro";
const $$url = "/toybox/prototypes/fluent-theme-toggle";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FluentThemeToggle,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
