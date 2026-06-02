import { s as createVNode, g as Fragment, _ as __astro_tag_component__ } from './astro/server_D37m5tNR.mjs';
import 'clsx';

const frontmatter = {
  "title": "Art",
  "summary": "A working catalog of pieces I've made on weekends and quiet evenings — paintings and a few drawings. No specific style, no rules; just how I clear my head.",
  "order": 30,
  "year": "2014 — ongoing",
  "medium": "Painting · Drawing"
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
    children: "A dossier of personal work — twelve pieces filed and ongoing."
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
const url = "src/content/play/art.mdx";
const file = "/private/tmp/flora-component-build/src/content/play/art.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/private/tmp/flora-component-build/src/content/play/art.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
