/* empty css                                 */
import { p as createAstro, q as createComponent, w as renderComponent, D as renderTemplate, v as maybeRenderHead, o as addAttribute } from '../chunks/astro/server_D37m5tNR.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Dd7kTHl0.mjs';
import { g as getCollection } from '../chunks/_astro_content_XxXwbPTn.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.floramaydc.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const base = "/".endsWith("/") ? "/" : "//";
  const toybox = await getCollection("toybox");
  const visible = toybox.filter((e) => !e.data.draft);
  const counts = visible.reduce((acc, e) => {
    acc[e.data.category] = (acc[e.data.category] ?? 0) + 1;
    return acc;
  }, {});
  const latestToybox = visible.filter((e) => !e.id.startsWith("_")).sort((a, b) => {
    const aUpdated = a.data.updated?.getTime() ?? 0;
    const bUpdated = b.data.updated?.getTime() ?? 0;
    if (bUpdated !== aUpdated) return bUpdated - aUpdated;
    return a.data.title.localeCompare(b.data.title);
  }).slice(0, 4);
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
  const cardLabels = {
    playbook: "Playbook",
    prompt: "Prompt",
    template: "Template",
    pattern: "Pattern",
    tool: "Tool",
    prototype: "Prototype"
  };
  const sections = [
    { key: "playbook", title: "Playbooks", desc: "Decision frameworks for senior design moves — when to add, when to subtract, when to refuse." },
    { key: "prompt", title: "Prompts", desc: "Copy-paste prompts that produce real artifacts when fed to ChatGPT, Claude, Copilot, or Cursor." },
    { key: "template", title: "Templates", desc: "One-pagers and specs designers hand to engineering, PMs, or themselves." },
    { key: "pattern", title: "Patterns", desc: "Specific interaction patterns, fully specified across every surface that triggers them." },
    { key: "tool", title: "Tools", desc: "Small shipped things — a Chrome extension that flags dark patterns in the wild." },
    { key: "prototype", title: "Prototypes", desc: "Live, one-page demos that stress-test a design idea in the browser — built to be poked at." }
  ];
  const siteUrl = (Astro2.site?.toString() ?? "https://www.floramaydc.com/").replace(/\/$/, "");
  const homeDescription = "Flora May dela Cruz is a senior UX and product designer at Microsoft. Explore UX case studies, writing, and open design resources.";
  const homeJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Flora May dela Cruz",
      url: `${siteUrl}/`,
      inLanguage: "en",
      description: homeDescription,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/mai/?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      },
      publisher: {
        "@id": `${siteUrl}/#person`
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Flora May dela Cruz",
      url: `${siteUrl}/about/`,
      image: `${siteUrl}/images/about/flora.webp`,
      jobTitle: "Senior Product Designer",
      knowsAbout: [
        "UX design",
        "Product design",
        "Enterprise UX",
        "Accessibility",
        "AI product design",
        "Design systems"
      ],
      worksFor: {
        "@type": "Organization",
        name: "Microsoft"
      },
      sameAs: [
        "https://linkedin.com/in/floramaydelacruz",
        "https://instagram.com/floramaydc",
        "https://github.com/floramaydc"
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Flora May dela Cruz — UX & Product Designer", "description": homeDescription, "jsonLd": homeJsonLd }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16"> <p class="text-sm uppercase tracking-widest text-muted">Senior Product Designer · Microsoft</p> <h1 class="mt-4 text-5xl md:text-6xl font-semibold leading-tight max-w-3xl">
AI, like design, is only as useful as the intent we bring to it.
</h1> <p class="mt-6 max-w-prose text-lg text-muted">
I'm Flora, a senior UX and product designer. I design enterprise experiences across cloud, security, and AI at Microsoft.
      Alongside the work, I keep a
<a${addAttribute(`${base}toybox`, "href")} class="text-accent underline">Toybox</a> — a free, public-domain
      library of playbooks, prompts, templates, patterns, and small tools for designers
      working inside complex, AI-shaped products. Released under CC0, so use anything, anywhere,
      no attribution required.
</p> <div class="mt-8 flex flex-wrap gap-4"> <a${addAttribute(`${base}toybox`, "href")} class="rounded-md bg-ink px-5 py-3 text-paper text-sm hover:bg-accent">Open the Toybox</a> <a${addAttribute(`${base}writing`, "href")} class="rounded-md border border-ink/20 px-5 py-3 text-sm hover:border-accent hover:text-accent">Explore Writing</a> </div> </section> <section class="mt-12 border-t border-ink/10 pt-12"> <div class="flex items-baseline justify-between gap-4 flex-wrap"> <h2 class="text-2xl">What's in the Toybox</h2> <a${addAttribute(`${base}toybox`, "href")} class="text-sm text-muted hover:text-accent underline">
Browse all ${visible.length} pieces →
</a> </div> <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6"> ${sections.map((s) => renderTemplate`<a${addAttribute(`${base}toybox#${s.key}`, "href")} class="rounded-lg border border-ink/10 p-5 hover:border-accent transition-colors block"> <div class="flex items-baseline justify-between"> <h3 class="text-lg">${s.title}</h3> <span class="text-xs font-medium text-accent">${counts[s.key] ?? 0}</span> </div> <p class="mt-2 text-sm text-muted">${s.desc}</p> </a>`)} </div> </section> <section class="mt-12 border-t border-ink/10 pt-12"> <div class="flex items-baseline justify-between gap-4 flex-wrap"> <h2 class="text-2xl">Latest from the Toybox</h2> <a${addAttribute(`${base}toybox`, "href")} class="text-sm text-muted hover:text-accent underline">
See all updates →
</a> </div> ${latestToybox.length > 0 ? renderTemplate`<ul class="mt-6 grid gap-4 md:grid-cols-2"> ${latestToybox.map((entry) => renderTemplate`<li class="rounded-lg border border-ink/10 p-5 hover:border-accent transition-colors"> <a${addAttribute(`${base}toybox/${entry.slug}`, "href")} class="block"> <div class="flex items-center justify-between gap-3"> <span class="inline-block text-[10px] uppercase tracking-widest rounded-md border border-accent/50 bg-accent/[0.06] px-2 py-0.5 text-accent"> ${cardLabels[entry.data.category] ?? entry.data.category} </span> ${entry.data.updated && renderTemplate`<time class="text-xs text-muted"${addAttribute(entry.data.updated.toISOString(), "datetime")}>
Updated ${dateFormatter.format(entry.data.updated)} </time>`} </div> <h3 class="mt-3 text-lg">${entry.data.title}</h3> <p class="mt-1 text-sm text-muted">${entry.data.summary}</p> </a> </li>`)} </ul>` : renderTemplate`<p class="mt-6 text-sm text-muted">No Toybox entries yet.</p>`} </section> ` })}`;
}, "/private/tmp/flora-component-build/src/pages/index.astro", void 0);
const $$file = "/private/tmp/flora-component-build/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
