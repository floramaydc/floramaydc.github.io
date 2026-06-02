import { q as createComponent, v as maybeRenderHead, o as addAttribute, C as renderSlot, D as renderTemplate, p as createAstro } from './astro/server_D37m5tNR.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://www.floramaydc.com");
const $$Row = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Row;
  const { cols = 2 } = Astro2.props;
  const colsClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4"
  }[cols] || "md:grid-cols-2";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`not-prose my-8 grid grid-cols-1 ${colsClass} gap-6`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/private/tmp/flora-component-build/src/components/Row.astro", void 0);

export { $$Row as $ };
