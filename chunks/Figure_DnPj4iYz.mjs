import { q as createComponent, v as maybeRenderHead, o as addAttribute, D as renderTemplate, p as createAstro } from './astro/server_D37m5tNR.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://www.floramaydc.com");
const $$Figure = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Figure;
  const { src, alt = "", caption, width } = Astro2.props;
  const baseUrl = "/".endsWith("/") ? "/" : "//";
  const resolvedSrc = src.startsWith("http") ? src : `${baseUrl}${src.replace(/^\//, "")}`;
  return renderTemplate`${maybeRenderHead()}<figure${addAttribute(`my-8 ${width === "narrow" ? "mx-auto max-w-md" : ""}`, "class")}> <img${addAttribute(resolvedSrc, "src")}${addAttribute(alt, "alt")} class="w-full rounded-md" loading="lazy"> ${caption && renderTemplate`<figcaption class="mt-2 text-sm text-muted text-center italic">${caption}</figcaption>`} </figure>`;
}, "/private/tmp/flora-component-build/src/components/Figure.astro", void 0);

export { $$Figure as $ };
