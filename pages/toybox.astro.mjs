/* empty css                                 */
import { p as createAstro, q as createComponent, w as renderComponent, D as renderTemplate, v as maybeRenderHead, o as addAttribute } from '../chunks/astro/server_D37m5tNR.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Dd7kTHl0.mjs';
import { g as getCollection } from '../chunks/_astro_content_XxXwbPTn.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.floramaydc.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const all = await getCollection("toybox");
  const entries = all.filter((e) => !e.data.draft);
  const byCategory = entries.reduce((acc, e) => {
    const c = e.data.category;
    (acc[c] ||= []).push(e);
    return acc;
  }, {});
  const categoryOrder = ["playbook", "prompt", "template", "pattern", "tool", "prototype"];
  const labels = {
    playbook: "Playbooks",
    prompt: "Prompts",
    template: "Templates",
    pattern: "Patterns",
    tool: "Tools",
    prototype: "Prototypes"
  };
  const cardLabels = {
    playbook: "Playbook",
    prompt: "Prompt",
    template: "Template",
    pattern: "Pattern",
    tool: "Tool",
    prototype: "Prototype"
  };
  const base = "/".endsWith("/") ? "/" : "//";
  const siteUrl = (Astro2.site?.toString() ?? "https://www.floramaydc.com/").replace(/\/$/, "");
  const pageUrl = `${siteUrl}/toybox/`;
  const toyboxJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Toybox — Flora May dela Cruz",
      description: "An open collection of playbooks, prompts, templates, patterns, tools, and prototypes for product designers.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      inLanguage: "en"
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${pageUrl}#itemlist`,
      name: "Toybox entries",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: entries.length,
      itemListElement: entries.map((e, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${siteUrl}/toybox/${e.slug}/`,
        name: e.data.title
      }))
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Toybox — Flora May dela Cruz", "description": "An open collection of playbooks, prompts, templates, patterns, tools, and prototypes for product designers.", "jsonLd": toyboxJsonLd, "data-astro-cid-z3exz6o7": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="border-b border-ink/10 pb-8" data-astro-cid-z3exz6o7> <p class="text-sm uppercase tracking-widest text-muted" data-astro-cid-z3exz6o7>An open, evolving collection</p> <h1 class="mt-3 text-5xl" data-astro-cid-z3exz6o7>Toybox</h1> <p class="mt-4 max-w-prose text-lg text-muted" data-astro-cid-z3exz6o7>
Playbooks, prompts, templates, and prototypes for designers operating
      strategically inside complex enterprise products. The thinking is
      systems-first; the artifacts are meant to be borrowed, adapted, and
      improved. Pull requests welcome.
</p> <p class="mt-4 text-sm text-muted" data-astro-cid-z3exz6o7>
Looking for copy-friendly prototype source?
<a class="underline"${addAttribute(`${base}toybox/prototypes`, "href")} data-astro-cid-z3exz6o7>Browse prototype code</a>.
</p> </header> <figure class="mt-10" data-astro-cid-z3exz6o7> <img${addAttribute(`${base}images/toybox/hero.svg`, "src")} alt="A top-down flat-lay of toys arranged on cream paper: a small train, alphabet blocks, three toy cars, a friendly toy robot, a Rubik's cube, a stack of books, a spinning top, and building bricks." class="w-full rounded-lg" loading="eager" data-astro-cid-z3exz6o7> <figcaption class="mt-2 text-sm text-muted" data-astro-cid-z3exz6o7>
A toybox, opened — playbooks, prompts, templates, and prototypes, ready to be borrowed.
</figcaption> </figure> <section class="how-to mt-10 rounded-lg p-6" data-astro-cid-z3exz6o7> <h2 class="text-xl how-to__title" data-astro-cid-z3exz6o7>How to use the Toybox</h2> <p class="mt-2 max-w-prose text-sm text-muted" data-astro-cid-z3exz6o7>
You don't need to read any of this end-to-end. Each piece is meant to be
      handed off — to a teammate, or to an AI tool. Here's the shortest path.
</p> <ol class="mt-5 toybox-steps" data-astro-cid-z3exz6o7> <li class="rounded-md border border-ink/10 bg-paper p-4" data-astro-cid-z3exz6o7> <p class="text-[10px] uppercase tracking-widest text-muted" data-astro-cid-z3exz6o7>Step 1</p> <p class="mt-1 font-medium" data-astro-cid-z3exz6o7>Pick the one that matches your moment</p> <p class="mt-2 text-sm text-muted" data-astro-cid-z3exz6o7>
Starting something? A <em data-astro-cid-z3exz6o7>prompt</em> or <em data-astro-cid-z3exz6o7>template</em>. Stuck on
          an interaction? A <em data-astro-cid-z3exz6o7>pattern</em>. Defending a design decision?
          A <em data-astro-cid-z3exz6o7>playbook</em>. Open it. Skim the summary at the top — that
          alone often answers the question.
</p> </li> <li class="rounded-md border border-ink/10 bg-paper p-4" data-astro-cid-z3exz6o7> <p class="text-[10px] uppercase tracking-widest text-muted" data-astro-cid-z3exz6o7>Step 2</p> <p class="mt-1 font-medium" data-astro-cid-z3exz6o7>Unlock and copy or download</p> <p class="mt-2 text-sm text-muted" data-astro-cid-z3exz6o7>
Drop your email once (it unlocks everything in the Toybox on this
          device). Then either <em data-astro-cid-z3exz6o7>Copy</em> the whole piece to your clipboard
          or <em data-astro-cid-z3exz6o7>Download</em> it as a Markdown file. Both buttons sit at the
          bottom of every entry.
</p> </li> <li class="rounded-md border border-ink/10 bg-paper p-4" data-astro-cid-z3exz6o7> <p class="text-[10px] uppercase tracking-widest text-muted" data-astro-cid-z3exz6o7>Step 3</p> <p class="mt-1 font-medium" data-astro-cid-z3exz6o7>Paste it into your workflow</p> <p class="mt-2 text-sm text-muted" data-astro-cid-z3exz6o7>
Paste it into ChatGPT, Claude, Copilot, Cursor, or Figma Make and
          say <em data-astro-cid-z3exz6o7>"adapt this to my project"</em> — then describe your
          context. Or paste it into a Notion / Google Doc as a design-review
          artifact. Or hand it to engineering as a spec. That's the magic;
          there's nothing else to it.
</p> </li> </ol> <p class="mt-5 max-w-prose text-xs text-muted" data-astro-cid-z3exz6o7>
All pieces are released into the public domain under
<a class="underline" href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener noreferrer" data-astro-cid-z3exz6o7>CC0&nbsp;1.0</a>
— free for personal, team, client, and commercial use. No attribution
      required. Each markdown file lists me as author for context, not as a
      condition of use.
</p> </section> ${categoryOrder.filter((cat) => byCategory[cat]).map((cat) => renderTemplate`<section${addAttribute(cat, "id")} class="mt-12 scroll-mt-24" data-astro-cid-z3exz6o7> <h2 class="text-2xl" data-astro-cid-z3exz6o7>${labels[cat]}</h2> <ul class="mt-6 toybox-grid" data-astro-cid-z3exz6o7> ${byCategory[cat].map((e) => renderTemplate`<li class="rounded-lg border border-ink/10 p-5 hover:border-accent transition-colors" data-astro-cid-z3exz6o7> <a${addAttribute(`${base}toybox/${e.slug}`, "href")} class="block" data-astro-cid-z3exz6o7>  <span class="inline-block text-[10px] uppercase tracking-widest rounded-md border border-accent/50 bg-accent/[0.06] px-2 py-0.5 text-accent" data-astro-cid-z3exz6o7> ${cardLabels[e.data.category] ?? e.data.category} </span> <h3 class="mt-3 text-lg" data-astro-cid-z3exz6o7>${e.data.title}</h3> <p class="mt-1 text-sm text-muted" data-astro-cid-z3exz6o7>${e.data.summary}</p> ${e.data.tags && renderTemplate`<div class="mt-3 flex flex-wrap gap-2" data-astro-cid-z3exz6o7> ${e.data.tags.map((t) => renderTemplate`<span class="text-xs rounded-full border border-ink/15 px-2 py-0.5 text-muted" data-astro-cid-z3exz6o7>${t}</span>`)} </div>`} </a> </li>`)} </ul> </section>`)}` })} `;
}, "/private/tmp/flora-component-build/src/pages/toybox/index.astro", void 0);
const $$file = "/private/tmp/flora-component-build/src/pages/toybox/index.astro";
const $$url = "/toybox";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
