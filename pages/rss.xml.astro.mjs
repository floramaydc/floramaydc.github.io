import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_XxXwbPTn.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const posts = await getCollection("writing");
  const visible = posts.filter((p) => !p.data.draft);
  const sorted = [...visible].sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );
  return rss({
    title: "Flora May dela Cruz — Writing",
    description: "Notes from Flora May dela Cruz on product design, AI, accessibility, and refusing to ship things.",
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: `/writing/${post.slug}/`,
      categories: post.data.tags ?? []
    })),
    customData: "<language>en-us</language>"
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
