import { s as createVNode, g as Fragment, _ as __astro_tag_component__ } from './astro/server_D37m5tNR.mjs';
import { $ as $$Figure } from './Figure_DnPj4iYz.mjs';
import { $ as $$Row } from './Row_BFyXOKl_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Tabulas",
  "summary": "A blogging platform that marked the beginning of my journey into web design and development. Teenage layouts, early CSS, and the accidental detour from ethical hacking that turned into a design career.",
  "order": 40,
  "cover": "/images/play/tabulas/cover.jpg",
  "coverAlt": "Tabulas blog layout — Flora's early CSS work",
  "year": "2003 — 2012",
  "medium": "Web · CSS"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "where-it-started",
    "text": "Where it started"
  }, {
    "depth": 2,
    "slug": "layouts",
    "text": "Layouts"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "where-it-started",
      children: "Where it started"
    }), "\n", createVNode(_components.p, {
      children: "Tabulas, a blogging platform, marked the beginning of my journey into web design and development when I was a senior in high school. Initially, my interest was piqued by researching XSS vulnerabilities — I was curious about ethical hacking."
    }), "\n", createVNode(_components.p, {
      children: "However, as I delved deeper, I discovered that XSS and CSS were sometimes referenced interchangeably. Intrigued by the connection, I found myself drawn to explore CSS further. It sparked my interest in web design and development, leading me down an unexpected — but fascinating — path toward a career as a designer."
    }), "\n", createVNode(_components.p, {
      children: "Through trial and error, I honed my skills, crafting designs that reflected my evolving aesthetic and creative exploration. Though only a few were captured through screenshots, they serve as reminders of my early experimentation and growth in the field."
    }), "\n", createVNode(_components.h2, {
      id: "layouts",
      children: "Layouts"
    }), "\n", createVNode($$Row, {
      cols: 3,
      children: [createVNode($$Figure, {
        src: "/images/play/tabulas/layout-16.jpg",
        alt: "Tabulas layout 16",
        caption: "Layout 16"
      }), createVNode($$Figure, {
        src: "/images/play/tabulas/layout-22.jpg",
        alt: "Tabulas layout 22",
        caption: "Layout 22"
      }), createVNode($$Figure, {
        src: "/images/play/tabulas/layout-28.jpg",
        alt: "Tabulas layout 28",
        caption: "Layout 28"
      }), createVNode($$Figure, {
        src: "/images/play/tabulas/layout-30.jpg",
        alt: "Tabulas layout 30",
        caption: "Layout 30"
      }), createVNode($$Figure, {
        src: "/images/play/tabulas/layout-32.jpg",
        alt: "Tabulas layout 32",
        caption: "Layout 32"
      }), createVNode($$Figure, {
        src: "/images/play/tabulas/layout-33.jpg",
        alt: "Tabulas layout 33",
        caption: "Layout 33"
      }), createVNode($$Figure, {
        src: "/images/play/tabulas/layout-34.jpg",
        alt: "Tabulas layout 34",
        caption: "Layout 34"
      }), createVNode($$Figure, {
        src: "/images/play/tabulas/layout-36.jpg",
        alt: "Tabulas layout 36",
        caption: "Layout 36"
      }), createVNode($$Figure, {
        src: "/images/play/tabulas/layout-38.jpg",
        alt: "Tabulas layout 38",
        caption: "Layout 38"
      })]
    })]
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

const url = "src/content/play/tabulas.mdx";
const file = "/private/tmp/flora-component-build/src/content/play/tabulas.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/private/tmp/flora-component-build/src/content/play/tabulas.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
