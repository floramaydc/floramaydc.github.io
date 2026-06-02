/* empty css                                    */
import { p as createAstro, q as createComponent, v as maybeRenderHead, o as addAttribute, z as renderScript, D as renderTemplate, w as renderComponent, K as unescapeHTML } from '../../chunks/astro/server_D37m5tNR.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Dd7kTHl0.mjs';
import 'clsx';
import { g as getCollection } from '../../chunks/_astro_content_XxXwbPTn.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://www.floramaydc.com");
const $$PlaybookActions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PlaybookActions;
  const { slug, title, rawBody } = Astro2.props;
  const endpoint = "https://mai.floramaydc-mai.workers.dev/subscribe";
  const filename = `${slug}.md`;
  return renderTemplate`${maybeRenderHead()}<section class="playbook-actions mt-10 rounded-lg border border-ink/15 bg-cream/40 p-5"${addAttribute(slug, "data-slug")}${addAttribute(title, "data-title")}${addAttribute(endpoint, "data-endpoint")}${addAttribute(filename, "data-filename")}> <!-- LOCKED VIEW --> <div class="locked"> <p class="text-sm font-medium text-ink">Take this playbook with you</p> <p class="mt-1 text-sm text-muted">
Drop your email to copy the markdown or download the file. One email unlocks every playbook in the Toybox.
</p> <form class="unlock-form mt-3 flex flex-wrap gap-2"> <label class="sr-only"${addAttribute(`pb-email-${slug}`, "for")}>Email address</label> <input${addAttribute(`pb-email-${slug}`, "id")} type="email" name="email" required autocomplete="email" placeholder="you@example.com" class="flex-1 min-w-[14rem] rounded-md border border-ink/20 bg-paper px-3 py-2 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent"> <button type="submit" class="rounded-md bg-teal px-4 py-2 text-sm font-medium text-paper hover:bg-ink transition-colors">
Unlock copy &amp; download
</button> </form> <p class="form-status mt-2 text-xs text-muted" aria-live="polite"></p> <p class="mt-3 text-xs text-muted">
No spam. Occasional notes on new playbooks. Unsubscribe in one click.
</p> </div> <!-- UNLOCKED VIEW --> <div class="unlocked hidden"> <p class="text-sm font-medium text-ink">Yours to use</p> <p class="mt-1 text-sm text-muted">
Free to use anywhere under <a class="underline hover:text-accent" href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener noreferrer">CC0 1.0</a> — public domain, no attribution required. Author credit lives in the file's frontmatter.
</p> <div class="mt-3 flex flex-wrap gap-2"> <button type="button" class="copy-btn rounded-md border border-ink/20 bg-paper px-4 py-2 text-sm font-medium text-ink hover:bg-cream transition-colors">
Copy as markdown
</button> <button type="button" class="download-btn rounded-md border border-ink/20 bg-paper px-4 py-2 text-sm font-medium text-ink hover:bg-cream transition-colors">
Download .md
</button> </div> <p class="action-status mt-2 text-xs text-muted" aria-live="polite"></p> </div> </section> <!-- Raw body is embedded as a non-rendered template so the script can read it
     without escaping pitfalls. --> <template class="playbook-raw"${addAttribute(slug, "data-for")}>${rawBody}</template> ${renderScript($$result, "/private/tmp/flora-component-build/src/components/PlaybookActions.astro?astro&type=script&index=0&lang.ts")}`;
}, "/private/tmp/flora-component-build/src/components/PlaybookActions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$AccessibilityAuditForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section id="ask-mai"', ` aria-labelledby="ask-mai-title" class="mt-8 mb-8 rounded-lg border border-accent/30 bg-cream p-6 dark:bg-cream/10"> <div class="flex items-start justify-between gap-3"> <p class="text-xs font-semibold uppercase tracking-widest text-accent">
Ask <span class="mai-wordmark">M<span class="mai-dot">.</span>ai</span> </p> <p class="text-xs text-muted">Accessibility audit handoff</p> </div> <h2 id="ask-mai-title" class="mt-2 text-lg font-serif">Audit any page for accessibility</h2> <p class="mt-2 text-sm text-muted">Paste a URL to generate a structured report you can review or share.</p> <div class="mt-4 space-y-3"> <div> <input id="audit-url" type="text" placeholder="https://example.com" class="w-full rounded border border-ink/20 bg-white px-4 py-2 text-sm font-mono dark:bg-ink/5 dark:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"> </div> <button id="run-audit-btn" class="w-full rounded bg-accent px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
Run Audit
</button> </div> <div id="result-container" class="mt-4" aria-live="polite" aria-atomic="true"></div> <script type="module">
    import('../scripts/accessibility-audit-client.ts').then(({ initializeAccessibilityAuditTool }) => {
      initializeAccessibilityAuditTool();
    });
  </script> </section>`])), maybeRenderHead(), addAttribute("", "data-audit-api-url"));
}, "/private/tmp/flora-component-build/src/components/AccessibilityAuditForm.astro", void 0);

const $$Astro = createAstro("https://www.floramaydc.com");
async function getStaticPaths() {
  const all = await getCollection("toybox");
  const visible = all.filter((e) => !e.data.draft);
  const labels = {
    playbook: "Playbooks",
    prompt: "Prompts",
    template: "Templates",
    pattern: "Patterns",
    tool: "Tools",
    prototype: "Prototypes"
  };
  const byCat = {};
  for (const e of visible) {
    (byCat[e.data.category] ||= []).push(e);
  }
  for (const k of Object.keys(byCat)) {
    byCat[k].sort((a, b) => a.data.title.localeCompare(b.data.title));
  }
  return visible.map((entry) => {
    const siblings = byCat[entry.data.category] ?? [];
    const i = siblings.findIndex((s) => s.slug === entry.slug);
    const prev = i > 0 ? siblings[i - 1] : null;
    const next = i >= 0 && i < siblings.length - 1 ? siblings[i + 1] : null;
    const categoryLabel = labels[entry.data.category] ?? entry.data.category;
    return { params: { slug: entry.slug }, props: { entry, prev, next, categoryLabel } };
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry, prev, next, categoryLabel } = Astro2.props;
  const { Content } = await entry.render();
  (/* @__PURE__ */ new Date()).getFullYear();
  const base = "/".endsWith("/") ? "/" : "//";
  const allToybox = await getCollection("toybox");
  const visibleToybox = allToybox.filter((e) => !e.data.draft);
  const relatedToybox = visibleToybox.filter((e) => e.slug !== entry.slug && e.data.category === entry.data.category).sort((a, b) => a.data.title.localeCompare(b.data.title)).slice(0, 3);
  const siteUrl = (Astro2.site?.toString() ?? "https://www.floramaydc.com/").replace(/\/$/, "");
  const entryUrl = `${siteUrl}/toybox/${entry.slug}/`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: entry.data.title,
      headline: entry.data.title,
      description: entry.data.summary,
      author: { "@type": "Person", name: entry.data.author ?? "Flora May dela Cruz", url: `${siteUrl}/about` },
      url: entryUrl,
      license: "https://creativecommons.org/publicdomain/zero/1.0/",
      dateModified: entry.data.updated?.toISOString(),
      keywords: entry.data.tags?.join(", "),
      genre: categoryLabel
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Toybox", item: `${siteUrl}/toybox/` },
        { "@type": "ListItem", position: 2, name: categoryLabel, item: `${siteUrl}/toybox/#${entry.data.category}` },
        { "@type": "ListItem", position: 3, name: entry.data.title, item: entryUrl }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${entry.data.title} — Toybox`, "description": entry.data.summary, "ogType": "article", "jsonLd": jsonLd }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="max-w-prose"> <nav class="text-sm text-muted" aria-label="Breadcrumb"> <ol class="flex flex-wrap items-center gap-1"> <li><a${addAttribute(`${base}toybox`, "href")} class="hover:text-accent underline">Toybox</a></li> <li aria-hidden="true">/</li> <li> <a${addAttribute(`${base}toybox#${entry.data.category}`, "href")} class="hover:text-accent underline">${categoryLabel}</a> </li> <li aria-hidden="true">/</li> <li class="text-ink/70 truncate">${entry.data.title}</li> </ol> </nav> <p class="mt-6"> <span class="inline-block text-[10px] uppercase tracking-widest rounded-md border border-accent/50 bg-accent/[0.06] px-2 py-0.5 text-accent"> ${categoryLabel} </span> </p> <h1 class="mt-3 text-4xl">${entry.data.title}</h1> <p class="mt-2 text-sm text-muted">By ${entry.data.author ?? "Flora May dela Cruz"}</p> <p class="mt-3 text-lg text-muted">${entry.data.summary}</p> ${entry.data.tags && renderTemplate`<div class="mt-4 flex flex-wrap gap-2"> ${entry.data.tags.map((t) => renderTemplate`<span class="text-xs rounded-full border border-ink/15 px-2 py-0.5 text-muted">${t}</span>`)} </div>`} <div class="prose prose-lg dark:prose-invert mt-8 max-w-none"> ${renderComponent($$result2, "Content", Content, {})} </div> ${entry.slug === "accessibility-audit-tool" && renderTemplate`${renderComponent($$result2, "AccessibilityAuditForm", $$AccessibilityAuditForm, {})}`} ${relatedToybox.length > 0 && renderTemplate`<section class="mt-12" aria-labelledby="related-toybox"> <h2 id="related-toybox" class="text-2xl">More in ${categoryLabel}</h2> <ul class="mt-4 grid gap-3 sm:grid-cols-3"> ${relatedToybox.map((t) => renderTemplate`<li class="rounded-lg border border-ink/10 p-4"> <a${addAttribute(`${base}toybox/${t.slug}`, "href")} class="group block"> <p class="text-xs uppercase tracking-widest text-muted">${categoryLabel.replace(/s$/, "")}</p> <p class="mt-2 text-base group-hover:text-accent">${t.data.title}</p> <p class="mt-2 text-sm text-muted line-clamp-3">${t.data.summary}</p> </a> </li>`)} </ul> </section>`} ${entry.data.install ? renderTemplate`<section class="mt-10 rounded-lg border border-ink/10 bg-cream/40 p-6"> <p class="text-[10px] uppercase tracking-widest text-muted">Get it</p> <p class="mt-2 text-lg">This one ships as a real product. Install it where it runs.</p> <div class="mt-4 flex flex-wrap gap-3"> <a${addAttribute(entry.data.install, "href")} target="_blank" rel="noopener noreferrer" class="rounded-md bg-ink px-5 py-3 text-paper text-sm hover:bg-accent">${entry.data.installLabel ?? "Install"} →</a> </div> </section>` : renderTemplate`${renderComponent($$result2, "PlaybookActions", $$PlaybookActions, { "slug": entry.slug, "title": entry.data.title, "rawBody": entry.body })}`} ${(prev || next) && renderTemplate`<nav class="mt-10 grid gap-3 sm:grid-cols-2 text-sm" aria-label="More in this category"> ${prev ? renderTemplate`<a${addAttribute(`${base}toybox/${prev.slug}`, "href")} class="rounded-md py-4 hover:text-accent transition-colors"> <p class="text-[10px] uppercase tracking-widest text-muted">← Previous ${categoryLabel.replace(/s$/, "").toLowerCase()}</p> <p class="mt-1 text-ink">${prev.data.title}</p> </a>` : renderTemplate`<span class="hidden sm:block"></span>`} ${next ? renderTemplate`<a${addAttribute(`${base}toybox/${next.slug}`, "href")} class="rounded-md py-4 hover:text-accent transition-colors sm:text-right"> <p class="text-[10px] uppercase tracking-widest text-muted">Next ${categoryLabel.replace(/s$/, "").toLowerCase()} →</p> <p class="mt-1 text-ink">${next.data.title}</p> </a>` : renderTemplate`<span class="hidden sm:block"></span>`} </nav>`} <footer class="mt-10 border-t border-ink/10 pt-6 text-sm text-muted space-y-3"> <p>
By ${entry.data.author ?? "Flora May dela Cruz"} · Released into the
        public domain under
<a class="underline hover:text-accent" href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener noreferrer">CC0 1.0</a>.
        Free to use anywhere — personal, team, commercial, client work —
        no attribution required. Adapt it, remix it, ship it. A link back to
<a class="underline hover:text-accent" href="https://floramaydc.com">floramaydc.com</a>
is always appreciated but never required.
</p> </footer> </article> ` })}
import ComponentAuditForm from '../../components/ComponentAuditForm.astro';
const brandedComponentAuditSummary = 'Paste a URL and get a structured component inventory — typed, risk-annotated, and mapped to Fluent recommendations — generated by the <span class="mai-brand-mark"><span class="mai-wordmark">M<span class="mai-dot">.</span>ai</span> agent.';
    ) : entry.slug === 'component-audit-tool' ? (
<p class="mt-3 text-lg text-muted">${unescapeHTML(brandedComponentAuditSummary)}</p> ${entry.slug === "component-audit-tool" && renderTemplate`${renderComponent($$result, "ComponentAuditForm", ComponentAuditForm, {})}`}</span>`;
}, "/private/tmp/flora-component-build/src/pages/toybox/[...slug].astro", void 0);
const $$file = "/private/tmp/flora-component-build/src/pages/toybox/[...slug].astro";
const $$url = "/toybox/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
