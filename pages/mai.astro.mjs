/* empty css                                 */
import { q as createComponent, D as renderTemplate, x as renderHead, o as addAttribute, v as maybeRenderHead } from '../chunks/astro/server_D37m5tNR.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Mai = createComponent(($$result, $$props, $$slots) => {
  const base = "/".endsWith("/") ? "/" : `${"/"}/`;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Opening M.ai</title><meta name="robots" content="noindex,follow"><link rel="canonical"', "><script", ">\n      (function () {\n        var currentScript = document.currentScript;\n        var target = (currentScript && currentScript.getAttribute('data-target')) || '/';\n        try {\n          var params = new URLSearchParams(window.location.search || '');\n          var prompt = params.get('q') || params.get('prompt') || '';\n          var context = params.get('context') || '';\n          var payload = {\n            source: 'mai_route_handoff',\n            forceFullscreen: true,\n            prompt: prompt || undefined,\n            context: context || undefined,\n            autoSend: prompt ? true : false,\n          };\n          sessionStorage.setItem('mai:pending-open', JSON.stringify(payload));\n          sessionStorage.setItem('mai-open', 'true');\n        } catch (e) {}\n        window.location.replace(target);\n      })();\n    </script>", '<noscript><meta http-equiv="refresh"', "></noscript>", "</head> <body> <p>Opening M.ai...</p> </body></html>"])), addAttribute(`https://www.floramaydc.com${base}`, "href"), addAttribute(base, "data-target"), maybeRenderHead(), addAttribute(`0;url=${base}`, "content"), renderHead());
}, "/private/tmp/flora-component-build/src/pages/mai.astro", void 0);
const $$file = "/private/tmp/flora-component-build/src/pages/mai.astro";
const $$url = "/mai";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Mai,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
