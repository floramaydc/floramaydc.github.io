/* empty css                                 */
import { q as createComponent, w as renderComponent, D as renderTemplate, o as addAttribute, v as maybeRenderHead } from '../chunks/astro/server_D37m5tNR.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Dd7kTHl0.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const base = "/".endsWith("/") ? "/" : "//";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Not found" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="py-24 text-center"> <p class="text-sm uppercase tracking-widest text-muted">404</p> <h1 class="mt-3 text-5xl">This page is still in the toybox.</h1> <a', ` class="mt-8 inline-block text-accent underline">Back home</a> </div>  <script>
    (function () {
      var p = location.pathname.replace(/\\/+$/, '');
      var to = null;
      // /blog/<anything> -> /writing index (specific posts are
      // already handled by their own stub files).
      if (/^\\/blog(\\/|$)/.test(p)) to = '/writing';
      // /projects/<anything> -> /work index.
      else if (/^\\/projects(\\/|$)/.test(p)) to = '/work';
      // /home -> /
      else if (p === '/home') to = '/';
      // /contact -> /about (no contact page on this site).
      else if (p === '/contact') to = '/about';
      // /artwork -> /play/art
      else if (p === '/artwork') to = '/play/art';
      // /paleandbright -> /play/pale-and-bright
      else if (p === '/paleandbright') to = '/play/pale-and-bright';
      // Canonical M.ai route is /mai/ in static output; normalize /mai.
      else if (p === '/mai') to = '/mai/';
      if (to) {
        var suffix = p === '/mai' ? (location.search || '') + (location.hash || '') : '';
        location.replace(to + suffix);
      }
    })();
  </script> `], [" ", '<div class="py-24 text-center"> <p class="text-sm uppercase tracking-widest text-muted">404</p> <h1 class="mt-3 text-5xl">This page is still in the toybox.</h1> <a', ` class="mt-8 inline-block text-accent underline">Back home</a> </div>  <script>
    (function () {
      var p = location.pathname.replace(/\\\\/+$/, '');
      var to = null;
      // /blog/<anything> -> /writing index (specific posts are
      // already handled by their own stub files).
      if (/^\\\\/blog(\\\\/|$)/.test(p)) to = '/writing';
      // /projects/<anything> -> /work index.
      else if (/^\\\\/projects(\\\\/|$)/.test(p)) to = '/work';
      // /home -> /
      else if (p === '/home') to = '/';
      // /contact -> /about (no contact page on this site).
      else if (p === '/contact') to = '/about';
      // /artwork -> /play/art
      else if (p === '/artwork') to = '/play/art';
      // /paleandbright -> /play/pale-and-bright
      else if (p === '/paleandbright') to = '/play/pale-and-bright';
      // Canonical M.ai route is /mai/ in static output; normalize /mai.
      else if (p === '/mai') to = '/mai/';
      if (to) {
        var suffix = p === '/mai' ? (location.search || '') + (location.hash || '') : '';
        location.replace(to + suffix);
      }
    })();
  </script> `])), maybeRenderHead(), addAttribute(base, "href")) })}`;
}, "/private/tmp/flora-component-build/src/pages/404.astro", void 0);
const $$file = "/private/tmp/flora-component-build/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
