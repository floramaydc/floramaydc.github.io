import { s as createVNode, g as Fragment, _ as __astro_tag_component__ } from './astro/server_D37m5tNR.mjs';
import 'clsx';

const frontmatter = {
  "title": "Pale & Bright",
  "summary": "An interior project I did with my husband Nick. We styled our townhouse by blending our tastes — mine pale and minimal, his bold and bright. The result: a lived-in, eclectic mix with mid-century roots.",
  "order": 20,
  "year": "2021–2022",
  "medium": "Interior design"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: ["A small magazine-style tour of the townhouse Nick and I styled together — pale and minimal meets bright and bold, anchored by mid-century pieces. See the ", createVNode(_components.a, {
      href: "./pale-and-bright",
      children: "flipbook"
    }), " for the full spread."]
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
const url = "src/content/play/pale-and-bright.mdx";
const file = "/private/tmp/flora-component-build/src/content/play/pale-and-bright.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/private/tmp/flora-component-build/src/content/play/pale-and-bright.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
