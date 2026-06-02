/* empty css                                 */
import { q as createComponent, w as renderComponent, D as renderTemplate, v as maybeRenderHead, o as addAttribute } from '../chunks/astro/server_D37m5tNR.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Dd7kTHl0.mjs';
export { renderers } from '../renderers.mjs';

const $$DarkPatternDetectorPrivacy = createComponent(($$result, $$props, $$slots) => {
  const base = "/".endsWith("/") ? "/" : "//";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Privacy Policy — Dark Pattern Detector" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="mx-auto max-w-3xl"> <nav class="text-sm text-muted" aria-label="Breadcrumb"> <ol class="flex flex-wrap items-center gap-1"> <li><a${addAttribute(`${base}toybox`, "href")} class="hover:text-accent underline">Toybox</a></li> <li aria-hidden="true">/</li> <li><a${addAttribute(`${base}toybox/dark-pattern-detector`, "href")} class="hover:text-accent underline">Dark Pattern Detector</a></li> <li aria-hidden="true">/</li> <li class="text-ink/70">Privacy Policy</li> </ol> </nav> <p class="mt-6 text-sm uppercase tracking-widest text-muted">Chrome Extension</p> <h1 class="mt-2 text-4xl">Privacy Policy for Dark Pattern Detector</h1> <p class="mt-3 text-sm text-muted">Effective date: August 7, 2025</p> <div class="prose prose-lg dark:prose-invert mt-10 max-w-none"> <h2>1. Introduction</h2> <p>
Dark Pattern Detector is a browser extension developed by Flora May dela Cruz
        to help users identify and highlight potential deceptive design patterns on
        websites. This tool is intended for educational and design review purposes.
</p> <h2>2. What data we collect</h2> <p>
This extension does not collect or transmit any personal data or browsing
        history. All detections and visual highlights occur locally in your browser.
</p> <h2>3. How we use data</h2> <p>
We do not collect, store, or share any data. All analysis is performed
        client-side. No user behavior, website content, or metadata is transmitted
        externally.
</p> <h2>4. Third-party access</h2> <p>
There is no third-party access to your data. No analytics, advertising, or
        tracking scripts are included in this extension.
</p> <h2>5. Contact</h2> <p>
For feedback, questions, or concerns, please contact Flora May dela Cruz at
<a href="mailto:floramaydelacruz@gmail.com">floramaydelacruz@gmail.com</a>
or visit <a${addAttribute(base, "href")}>floramaydc.com</a>.
</p> <h2>6. Updates</h2> <p>
This policy may be updated as features evolve. Any updates will be reflected
        on this page.
</p> </div> <p class="mt-12"> <a${addAttribute(`${base}toybox/dark-pattern-detector`, "href")} class="text-sm text-muted hover:text-accent underline">← Back to Dark Pattern Detector</a> </p> </article> ` })}`;
}, "/private/tmp/flora-component-build/src/pages/dark-pattern-detector-privacy.astro", void 0);
const $$file = "/private/tmp/flora-component-build/src/pages/dark-pattern-detector-privacy.astro";
const $$url = "/dark-pattern-detector-privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DarkPatternDetectorPrivacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
