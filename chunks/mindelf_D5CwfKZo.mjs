import { s as createVNode, g as Fragment, _ as __astro_tag_component__ } from './astro/server_D37m5tNR.mjs';
import { $ as $$Figure } from './Figure_DnPj4iYz.mjs';
import { $ as $$Row } from './Row_BFyXOKl_.mjs';
import { $ as $$Compare } from './Compare_BewhVI9K.mjs';
import 'clsx';

const frontmatter = {
  "title": "Mind Elf",
  "summary": "An education platform that enables every student to receive instruction as effective as one-on-one tutoring. Kickstarted at Startup Weekend Seattle EDU — startup-round winner, then advanced to the UW investor round.",
  "order": 12,
  "tags": ["education", "edtech", "startup", "rapid-prototyping", "machine-learning"],
  "cover": "/images/work/mindelf/cover.png",
  "coverAlt": "Mind Elf desktop application mockup",
  "client": "Mind Elf (early-stage startup)",
  "role": "UX Lead (with branding contributions)",
  "year": "2017–2018",
  "team": "6 people — 2 Engineers, 2 Business Development, Product Owner, UX",
  "archive": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "summary",
    "text": "Summary"
  }, {
    "depth": 2,
    "slug": "my-role-and-contributions",
    "text": "My role and contributions"
  }, {
    "depth": 2,
    "slug": "background",
    "text": "Background"
  }, {
    "depth": 2,
    "slug": "how-might-we-solve-this-acute-problem",
    "text": "How might we solve this acute problem?"
  }, {
    "depth": 2,
    "slug": "what-we-needed-to-accomplish",
    "text": "What we needed to accomplish"
  }, {
    "depth": 2,
    "slug": "process",
    "text": "Process"
  }, {
    "depth": 2,
    "slug": "aligning-ux-with-business-and-technology",
    "text": "Aligning UX with business and technology"
  }, {
    "depth": 2,
    "slug": "how-the-students-mobile-application-empowers-the-instructor",
    "text": "How the student’s mobile application empowers the instructor"
  }, {
    "depth": 2,
    "slug": "afterthought",
    "text": "Afterthought"
  }, {
    "depth": 2,
    "slug": "reflections",
    "text": "Reflections"
  }];
}
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", createVNode(_components.p, {
      children: "MindElf is an education technology solution that helps Calculus instructors get the best possible learning outcomes for their students — by enabling every student to receive instruction that is as effective as one-on-one tutoring."
    }), "\n", createVNode(_components.p, {
      children: "Kickstarted at Startup Weekend Seattle EDU, our project emerged as the startup-round winner and was then entered into the UW investment round. Although we halted the tool’s development, this venture was instrumental in focusing on machine learning and using gamification strategies to engage students. It highlighted the importance of using gamification to facilitate mastery in Calculus — a principle that has significantly influenced my approach to product design."
    }), "\n", createVNode(_components.p, {
      children: "This was a seven-month project that kicked off during Startup Weekend EDU Seattle (SWEDU) in September 2017 and continued through the Business Plan Competition (BPC) investor round in April 2018. I joined the team in November 2017."
    }), "\n", createVNode(_components.h2, {
      id: "my-role-and-contributions",
      children: "My role and contributions"
    }), "\n", createVNode(_components.p, {
      children: "We were a six-person team: 2 Engineers, 2 Business Development, a Product Owner, and UX. I owned the UX initiatives, with some contributions in branding."
    }), "\n", createVNode(_components.p, {
      children: "Our tasks:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Develop an education platform that helps Calculus instructors get the best possible outcome from their students."
      }), "\n", createVNode(_components.li, {
        children: "Create prototypes that enable the team to convey these to potential users (students and teachers), investors, and other stakeholders."
      }), "\n"]
    }), "\n", createVNode($$Figure, {
      src: "/images/work/mindelf/team-img.png",
      alt: "The Mind Elf team mid-project",
      caption: "The team, mid-project"
    }), "\n", createVNode(_components.h2, {
      id: "background",
      children: "Background"
    }), "\n", createVNode(_components.p, {
      children: ["Calculus is a required course for all STEM majors. ", createVNode(_components.strong, {
        children: "Out of 700k students who take Calculus 1 annually, 30% fail the subject."
      }), " With the rapid increase in demand for STEM workers with a secondary degree, the Calculus problem is becoming more acute."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Insights from the MAA National Study of College Calculus."
      })
    }), "\n", createVNode($$Figure, {
      src: "/images/work/mindelf/classroom.png",
      alt: "A classroom — context for the problem",
      caption: "The Calculus classroom is where the failure rate begins."
    }), "\n", createVNode(_components.h2, {
      id: "how-might-we-solve-this-acute-problem",
      children: "How might we solve this acute problem?"
    }), "\n", createVNode(_components.p, {
      children: "The software was built on three principles:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Data-driven"
        }), " — Collect data on each student’s strengths and weaknesses during lectures, practice problems, homework, and quizzes, to create a dynamic picture of their knowledge profile."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Adaptable"
        }), " — Offer alternative explanations of the lecture material in video and written form. Offer each student a set of practice problems tailored to their needs, and match students with study partners and tutors."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Integrated"
        }), " — Available on web, mobile, and tablet, empowering students to study at home and on the go."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "what-we-needed-to-accomplish",
      children: "What we needed to accomplish"
    }), "\n", createVNode(_components.p, {
      children: "We moved fast. The six of us worked closely to develop the product roadmap, business model, branding, and platform — simultaneously — to meet our deadlines. We wanted to ensure everything was user-centered, but also mindful of business strategy."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Pitch for student group from Boston (February 2018)"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "First version of the student app prototypes."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Business Proposal Competition (March 2018)"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Second version of the student app prototypes."
      }), "\n", createVNode(_components.li, {
        children: "Website."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Investor round (April 2018)"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Improvements on the second version of the student app prototypes."
      }), "\n", createVNode(_components.li, {
        children: "Improvements on the website."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "process",
      children: "Process"
    }), "\n", createVNode(_components.p, {
      children: ["Since the deadlines were back-to-back, we knew we did not want to sacrifice the user experience. Fortunately, there were already preparatory and secondary research conducted during SWEDU, including competitive analysis. The team also put out a survey and interviewed instructors and students. We used these as the bases of the ideation process and decided to do ", createVNode(_components.em, {
        children: "rapid prototyping"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "What is rapid prototyping?"
      }), " According to an article on InVision App, rapid prototyping is a design workflow that consists of ideation, prototyping, and testing. It was very useful in validating ideas."]
    }), "\n", createVNode(_components.p, {
      children: "We took each target milestone as an opportunity to discover and validate ideas. For instance, when we delivered the pitch with the student group from Boston, students gave us feedback regarding the business model and the first version of the prototypes. That feedback was used to iterate the updated versions."
    }), "\n", createVNode(_components.h2, {
      id: "aligning-ux-with-business-and-technology",
      children: "Aligning UX with business and technology"
    }), "\n", createVNode(_components.p, {
      children: "We wanted to align UX goals with technology and business goals. From an operational and design standpoint, we strongly believed that knowing the functional specifications and business targets was crucial. So we considered three aspects:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Business"
        }), " — What is viable in the marketplace?"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Technology"
        }), " — What is possible with technology?"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "User experience"
        }), " — What is desirable to users?"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "For production prototypes, we used Figma."
    }), "\n", createVNode($$Compare, {
      before: "/images/work/mindelf/prototype-v1.png",
      after: "/images/work/mindelf/prototype-v2.png",
      beforeLabel: "Pitch v1 (Boston, Feb 2018)",
      afterLabel: "Investor round (Apr 2018)",
      beforeAlt: "First version of the prototype before adding user story and interaction",
      afterAlt: "The prototype presented during the investor round",
      caption: "Iteration between Boston pitch and the investor round."
    }), "\n", createVNode(_components.h2, {
      id: "how-the-students-mobile-application-empowers-the-instructor",
      children: "How the student’s mobile application empowers the instructor"
    }), "\n", createVNode(_components.p, {
      children: "Students provide the data using the mobile application — classroom interaction, practice problems, questions, and the like. As students input data, the web application provides instructors with descriptive and predictive analysis, as well as recommendations regarding the students’ performance and needs."
    }), "\n", createVNode($$Row, {
      cols: 3,
      children: [createVNode($$Figure, {
        src: "/images/work/mindelf/enter.png",
        alt: "Sign-in screen",
        caption: "Sign-in"
      }), createVNode($$Figure, {
        src: "/images/work/mindelf/dashboard.png",
        alt: "Instructor dashboard",
        caption: "Instructor dashboard"
      }), createVNode($$Figure, {
        src: "/images/work/mindelf/lesson-plan.png",
        alt: "Lesson plan view",
        caption: "Lesson plan"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "afterthought",
      children: "Afterthought"
    }), "\n", createVNode(_components.p, {
      children: "The prototype was well-received by the judges during the investor round. It helped the team articulate our ideas by allowing the listener to envision the experience visually through the interactive prototype."
    }), "\n", createVNode(_components.h2, {
      id: "reflections",
      children: "Reflections"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "In this project, I learned the importance of rapid prototyping as a design workflow, especially for an early-stage startup. The benefits include quick turnaround time and cost-effectiveness."
      }), "\n", createVNode(_components.li, {
        children: "I also learned that working closely with the product and development team yields a holistic product approach."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "What I could have done better"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "If I could do it again, I would create a journey map and a service blueprint to see the overall interaction."
      }), "\n", createVNode(_components.li, {
        children: "I would have explored distinct personas rather than a generic approach to the key users."
      }), "\n"]
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

const url = "src/content/work/mindelf.mdx";
const file = "/private/tmp/flora-component-build/src/content/work/mindelf.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/private/tmp/flora-component-build/src/content/work/mindelf.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
