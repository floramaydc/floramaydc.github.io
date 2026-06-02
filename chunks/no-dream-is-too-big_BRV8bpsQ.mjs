import { s as createVNode, g as Fragment, _ as __astro_tag_component__ } from './astro/server_D37m5tNR.mjs';
import 'clsx';

const frontmatter = {
  "title": "No Dream Is Too Big",
  "summary": "A children's book I started writing while pregnant with Isla — playing with prompts and story ideas to create AI-generated illustrations. A short illustrated story in six chapters about a dreamer named May-May.",
  "order": 10,
  "cover": "/images/play/ndtb/cover.webp",
  "coverAlt": "Cover of No Dream Is Too Big",
  "year": "2024",
  "medium": "Writing · AI"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: "A short illustrated book in seven chapters. Use the arrows, your keyboard, or swipe to turn the pages."
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const url = "src/content/play/no-dream-is-too-big.mdx";
const file = "/private/tmp/flora-component-build/src/content/play/no-dream-is-too-big.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/private/tmp/flora-component-build/src/content/play/no-dream-is-too-big.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
