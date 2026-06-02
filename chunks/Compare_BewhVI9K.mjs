import { q as createComponent, v as maybeRenderHead, o as addAttribute, D as renderTemplate, p as createAstro } from './astro/server_D37m5tNR.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://www.floramaydc.com");
const $$Compare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Compare;
  const { before, after, beforeLabel = "Before", afterLabel = "After", beforeAlt = "", afterAlt = "", caption } = Astro2.props;
  const baseUrl = "/".endsWith("/") ? "/" : "//";
  const r = (s) => s.startsWith("http") ? s : `${baseUrl}${s.replace(/^\//, "")}`;
  return renderTemplate`${maybeRenderHead()}<figure class="not-prose my-8"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <p class="text-xs uppercase tracking-widest text-muted mb-2">${beforeLabel}</p> <img${addAttribute(r(before), "src")}${addAttribute(beforeAlt, "alt")} class="w-full rounded-md" loading="lazy"> </div> <div> <p class="text-xs uppercase tracking-widest text-muted mb-2">${afterLabel}</p> <img${addAttribute(r(after), "src")}${addAttribute(afterAlt, "alt")} class="w-full rounded-md" loading="lazy"> </div> </div> ${caption && renderTemplate`<figcaption class="mt-3 text-sm text-muted text-center italic">${caption}</figcaption>`} </figure>`;
}, "/private/tmp/flora-component-build/src/components/Compare.astro", void 0);

export { $$Compare as $ };
