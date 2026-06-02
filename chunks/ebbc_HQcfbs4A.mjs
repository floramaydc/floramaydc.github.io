import { s as createVNode, g as Fragment, _ as __astro_tag_component__ } from './astro/server_D37m5tNR.mjs';
import { $ as $$Figure } from './Figure_DnPj4iYz.mjs';
import { $ as $$Row } from './Row_BFyXOKl_.mjs';
import { $ as $$Compare } from './Compare_BewhVI9K.mjs';
import 'clsx';

const frontmatter = {
  "title": "Elliott Bay Book Company",
  "summary": "Redesigning the website for an independent Seattle bookstore using a full user-centered design process — competitive analysis, contextual interviews, baseline testing, card sorting, and comparative prototypes.",
  "order": 10,
  "tags": ["ux-research", "retail", "user-centered-design", "card-sorting", "school-project"],
  "cover": "/images/work/ebbc/cover.jpg",
  "coverAlt": "Elliott Bay Book Co. diagram with circles labeled Independent Bookstore, Community Engagement, and Tourist Attraction",
  "organization": "Elliott Bay Book Company (school project)",
  "role": "UX Researcher · UX Designer",
  "year": "2017",
  "team": "Two students",
  "archive": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "overview",
    "text": "Overview"
  }, {
    "depth": 3,
    "slug": "what-is-user-centered-design",
    "text": "What is User-Centered Design?"
  }, {
    "depth": 2,
    "slug": "user-research-methods",
    "text": "User research methods"
  }, {
    "depth": 3,
    "slug": "1-competitive-analysis",
    "text": "#1 Competitive Analysis"
  }, {
    "depth": 3,
    "slug": "2-contextual-interview",
    "text": "#2 Contextual Interview"
  }, {
    "depth": 3,
    "slug": "3-baseline-testing",
    "text": "#3 Baseline Testing"
  }, {
    "depth": 3,
    "slug": "4-card-sorting",
    "text": "#4 Card Sorting"
  }, {
    "depth": 3,
    "slug": "5-comparative-paper-prototype",
    "text": "#5 Comparative Paper Prototype"
  }, {
    "depth": 2,
    "slug": "iterative-design",
    "text": "Iterative design"
  }, {
    "depth": 3,
    "slug": "the-existing-site-before",
    "text": "The existing site (before)"
  }, {
    "depth": 3,
    "slug": "home-page",
    "text": "Home page"
  }, {
    "depth": 3,
    "slug": "books-page",
    "text": "Books page"
  }, {
    "depth": 3,
    "slug": "staff-picks",
    "text": "Staff Picks"
  }, {
    "depth": 3,
    "slug": "events-page",
    "text": "Events page"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }, {
    "depth": 2,
    "slug": "reflections",
    "text": "Reflections"
  }];
}
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", createVNode(_components.p, {
      children: "Elliott Bay Book Company (EB) is an independent bookstore in Seattle. It continues to thrive despite the increasing growth of the buying and selling of electronic books. This is because of the unique experiences they offer to their customers — community events, an in-store coffee shop, and an interior that draws tourists as much as locals."
    }), "\n", createVNode(_components.p, {
      children: "This was a three-month school project. Our two-student team was tasked with conducting a variety of user research methods throughout a web design or redesign process. I significantly contributed to Competitive Analysis, Baseline Testing, Card Sorting, and Visual Design."
    }), "\n", createVNode(_components.h3, {
      id: "what-is-user-centered-design",
      children: "What is User-Centered Design?"
    }), "\n", createVNode(_components.p, {
      children: "UCD is a process that aims to achieve good user experience by giving extensive attention to usability goals, user characteristics, environment, tasks, and workflow of a product, service, or process at each stage of the design process."
    }), "\n", createVNode($$Figure, {
      src: "/images/work/ebbc/ucd-diagram.png",
      alt: "User-Centered Design process diagram showing Plan, Research, Design, Adapt + Develop, Launch + Measure"
    }), "\n", createVNode(_components.h2, {
      id: "user-research-methods",
      children: "User research methods"
    }), "\n", createVNode($$Figure, {
      src: "/images/work/ebbc/activity-overview.png",
      alt: "EBBC research activity overview mapping Competitive Analysis, Contextual Interview, Baseline Testing, Card Sorting, Comparative Paper Prototype, and Visual Design across the UCD process",
      caption: "EBBC research activity overview"
    }), "\n", createVNode(_components.h3, {
      id: "1-competitive-analysis",
      children: "#1 Competitive Analysis"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "What was the purpose?"
      }), " We conducted a competitive analysis as preparatory research. The methodology lets you evaluate the strengths and weaknesses of competitors before you commit to a design direction."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "What actions were taken?"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Selected two competitors with similar business DNA, target audience, popularity, and location in most-visited US cities."
      }), "\n", createVNode(_components.li, {
        children: "Compared business performance using DemographicsNow."
      }), "\n", createVNode(_components.li, {
        children: "Read reviews on Yelp and Google."
      }), "\n", createVNode(_components.li, {
        children: "Compared the UI design, features, and best practices."
      }), "\n", createVNode(_components.li, {
        children: "Evaluated strengths and weaknesses."
      }), "\n"]
    }), "\n", createVNode($$Figure, {
      src: "/images/work/ebbc/client-ebbc.jpg",
      alt: "Elliott Bay Book Company website",
      caption: "EB Book Company website"
    }), "\n", createVNode($$Row, {
      cols: 2,
      children: [createVNode($$Figure, {
        src: "/images/work/ebbc/competitor-last.png",
        alt: "The Last Bookstore website",
        caption: "Competitor 1 — The Last Bookstore"
      }), createVNode($$Figure, {
        src: "/images/work/ebbc/competitor-strand.png",
        alt: "Strand Bookstore website",
        caption: "Competitor 2 — Strand Bookstore"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Findings and recommendations"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "From a business standpoint, Strand Bookstore (SB) in New York generated more revenue, followed by EB, then The Last Bookstore (LB) in Los Angeles."
      }), "\n", createVNode(_components.li, {
        children: "In terms of popularity, Strand was the most-visited bookstore."
      }), "\n", createVNode(_components.li, {
        children: "SB and LB used clearer labels and taxonomy. EB needed better information architecture and more informative labels."
      }), "\n", createVNode(_components.li, {
        children: "Book categories could be easily spotted in SB and LB. EB needed to create them."
      }), "\n", createVNode(_components.li, {
        children: "Unlike SB and LB’s events page with a calendar of events, EB populated its event page using books as a primary element — confusing. EB needed an event page where event information is instantly visible."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "What we would do differently."
      }), " We would consider changing the variables in selecting competitors — perhaps bookstores located in the same city and established in the same timeframe. We remained curious about what motivated customers who would prefer to visit Twice Sold Tales over EB."]
    }), "\n", createVNode(_components.h3, {
      id: "2-contextual-interview",
      children: "#2 Contextual Interview"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "What was the purpose?"
      }), " To validate our observations from the Competitive Analysis and to better understand customer behavior."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Our objectives:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Know what type of people go to Elliott Bay Book Company."
      }), "\n", createVNode(_components.li, {
        children: "Know how users use the EB website."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Approach."
      }), " Prepared interview questions using the AEIOU framework (Activities, Environments, Interactions, Objects, Users). Intercepted bookstore visitors on-site and reached out to students who wanted to participate. Recorded the interviews and took notes on the highlights."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Findings."
      }), " The four customers we interviewed on-site and the two students liked:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "The ambiance of the bookstore"
      }), "\n", createVNode(_components.li, {
        children: "Their interactions with the staff"
      }), "\n", createVNode(_components.li, {
        children: "The bookstore as a place to hang out with friends"
      }), "\n", createVNode(_components.li, {
        children: "The memories they had in the bookstore"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The majority did not use the EB website — they preferred the in-store experience. Those who attempted using it found it frustrating and difficult to use."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Come for the books, stay for the experience."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "It became obvious that customers enjoy visiting the bookstore not only because of the books but because of the experiences they offer. This led us to consider browsing travel websites. What if we redesigned EB’s website not only as an online retail shop, but as a destination? Since customers loved the staff picks, how do we make staff picks more visible to increase sales? And since events are one of the main reasons people visit, how do we improve the usability of the event page to increase store traffic?"
    }), "\n", createVNode(_components.h3, {
      id: "3-baseline-testing",
      children: "#3 Baseline Testing"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "What is it?"
      }), " The baseline test is a methodology used to evaluate the website’s current performance by gathering quantitative and qualitative data."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "What we did:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Prepared a baseline test script, scenarios, and tasks."
      }), "\n", createVNode(_components.li, {
        children: "Developed a Key Performance Indicator (KPI) plan."
      }), "\n", createVNode(_components.li, {
        children: "Observed participants’ interaction with the website."
      }), "\n", createVNode(_components.li, {
        children: "Gathered and analyzed data."
      }), "\n"]
    }), "\n", createVNode($$Figure, {
      src: "/images/work/ebbc/baseline-results.jpg",
      alt: "Baseline testing quantitative results matrix",
      caption: "Quantitative results from the baseline test. S = Scenario, T = Task, P = Participant, Null = Participant gave up."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Success rate"
        }), ": on average, 57% (3 out of 5 participants) failed in achieving a satisfactory result for completing each task."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Failed distribution"
        }), ": of the 3 who didn’t achieve a satisfactory rating, 2–3 were unable to complete the task within the time limit, and 1–2 gave up entirely."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Error count"
        }), ": participants made mistakes when using the search bar to look for information — a major driver of the high failure rate."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Given the high failure rate, I insisted we go back to our first impressions — redesign the information architecture, use clear labels, and improve the taxonomy. That led us to the card sorting activity."
    }), "\n", createVNode(_components.h3, {
      id: "4-card-sorting",
      children: "#4 Card Sorting"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Why?"
      }), " Card sorting generates a category tree or taxonomy to improve information architecture, workflows, menu structure, and navigation paths."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "How:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Created groups and cards using OptimalSort."
      }), "\n", createVNode(_components.li, {
        children: "Asked 10 participants to group the cards."
      }), "\n", createVNode(_components.li, {
        children: "Asked supplementary post-questions."
      }), "\n", createVNode(_components.li, {
        children: "Gathered and analyzed data."
      }), "\n"]
    }), "\n", createVNode($$Row, {
      cols: 2,
      children: [createVNode($$Figure, {
        src: "/images/work/ebbc/card-sort-results.jpg",
        alt: "Card sort results matrix",
        caption: "The Results Matrix"
      }), createVNode($$Figure, {
        src: "/images/work/ebbc/popular-placement.jpg",
        alt: "Popular placement matrix",
        caption: "Popular Placement Matrix"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Based on the collective results, categories arranged logically as ", createVNode(_components.strong, {
        children: "Books, Events, About, More."
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "90–100% of participants placed eight cards under Books (All Collections, Audiobooks, Bestsellers, Digital Books, First Editions, What’s Popular, Staff Picks, What’s New)."
      }), "\n", createVNode(_components.li, {
        children: "100% chose Book Group Meetings, Calendar of Events, and Children’s Events under Events."
      }), "\n", createVNode(_components.li, {
        children: "Only Contact Us had clear consensus under About."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Actions we considered:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Separate Books from other Media. Many participants felt there were too many cards under Books — Audiobooks, Digital books, CDs, DVDs would be cleaner in a separate Media category."
      }), "\n", createVNode(_components.li, {
        children: "Add Programs to the navigation (Book Consignment, Book Donations, Maiden Voyage)."
      }), "\n", createVNode(_components.li, {
        children: ["Rename and shorten labels: ", createVNode(_components.em, {
          children: "What’s New → New Releases, What’s Popular → Popular Now, Digital Books → eBooks, Calendar of Events → Calendar."
        })]
      }), "\n", createVNode(_components.li, {
        children: "Place Gift Certificates strategically in a secondary navigation."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Closed vs Open vs Hybrid card sort."
      }), " We repeated this activity. The first attempt was a hybrid card sort that confused participants — everyone seemed to create a new category, making it difficult to analyze. We switched to a closed card sort so they could focus on grouping the cards."]
    }), "\n", createVNode(_components.h3, {
      id: "5-comparative-paper-prototype",
      children: "#5 Comparative Paper Prototype"
    }), "\n", createVNode(_components.p, {
      children: "A paper prototype is a low-fidelity wireframe made with pen and paper, used to test user interfaces quickly and economically. We created two designs and compared them to test which was more usable."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "The original paper prototype demonstration is a video — not yet re-hosted in this archive."
      })
    }), "\n", createVNode(_components.p, {
      children: "It was really fun. We found a new appreciation for using pen and paper in creating prototypes — ideas flow freely and the folding of papers became a nice trick for transitioning between pages. Personally, I always keep a pen and paper. Each time I have an aha-moment, I sketch my ideas."
    }), "\n", createVNode(_components.h2, {
      id: "iterative-design",
      children: "Iterative design"
    }), "\n", createVNode(_components.p, {
      children: "User-Centered Design is iterative. A user insight becomes a design insight. We took everything from the research above and turned it into wireframes, then into two hi-fi visual directions to test which one users preferred."
    }), "\n", createVNode(_components.h3, {
      id: "the-existing-site-before",
      children: "The existing site (before)"
    }), "\n", createVNode(_components.p, {
      children: "For reference, this is what the existing EB site looked like before the redesign — the starting point for the baseline test."
    }), "\n", createVNode($$Row, {
      cols: 2,
      children: [createVNode($$Figure, {
        src: "/images/work/ebbc/existing-homepage.png",
        alt: "Existing EB home page",
        caption: "Existing Home"
      }), createVNode($$Figure, {
        src: "/images/work/ebbc/existing-bookpage.png",
        alt: "Existing EB book page",
        caption: "Existing Books"
      }), createVNode($$Figure, {
        src: "/images/work/ebbc/existing-eventpage.png",
        alt: "Existing EB events page",
        caption: "Existing Events"
      }), createVNode($$Figure, {
        src: "/images/work/ebbc/existing-staffpage.png",
        alt: "Existing EB staff page",
        caption: "Existing Staff"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "home-page",
      children: "Home page"
    }), "\n", createVNode(_components.p, {
      children: "We created two low-fidelity prototypes and combined them."
    }), "\n", createVNode($$Row, {
      cols: 2,
      children: [createVNode($$Figure, {
        src: "/images/work/ebbc/home-lofi-1.jpg",
        alt: "Home page low-fidelity, design 1",
        caption: "Low-fi · Design 1"
      }), createVNode($$Figure, {
        src: "/images/work/ebbc/home-lofi-2.png",
        alt: "Home page low-fidelity, design 2",
        caption: "Low-fi · Design 2"
      })]
    }), "\n", createVNode(_components.p, {
      children: "We then moved to a mid-fidelity exploration before committing to the hi-fi direction."
    }), "\n", createVNode($$Figure, {
      src: "/images/work/ebbc/home-med.jpg",
      alt: "Home page mid-fidelity exploration",
      caption: "Mid-fi",
      width: "narrow"
    }), "\n", createVNode(_components.p, {
      children: "For the high-fidelity prototypes, we created two versions — one cool-toned, one warm-toned — and chose the one preferred by users."
    }), "\n", createVNode($$Compare, {
      before: "/images/work/ebbc/home-final-cool.png",
      after: "/images/work/ebbc/home-final-warm.png",
      beforeLabel: "Cool palette",
      afterLabel: "Warm palette",
      beforeAlt: "High-fidelity home page in a cool palette",
      afterAlt: "High-fidelity home page in a warm palette",
      caption: "The cool palette was chosen as the final direction."
    }), "\n", createVNode(_components.h3, {
      id: "books-page",
      children: "Books page"
    }), "\n", createVNode(_components.p, {
      children: "To simplify the books category, Staff Picks was merged into Books. When we conducted the baseline test and card sort, most participants placed them under Books anyway."
    }), "\n", createVNode($$Row, {
      cols: 3,
      children: [createVNode($$Figure, {
        src: "/images/work/ebbc/books-lofi.jpg",
        alt: "Books page low-fidelity",
        caption: "Low-fi"
      }), createVNode($$Figure, {
        src: "/images/work/ebbc/books-med.jpg",
        alt: "Books page mid-fidelity",
        caption: "Mid-fi"
      }), createVNode($$Figure, {
        src: "/images/work/ebbc/books-final.png",
        alt: "Final Books page design",
        caption: "Final"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "staff-picks",
      children: "Staff Picks"
    }), "\n", createVNode(_components.p, {
      children: "Staff Picks were a recurring theme in interviews and card sorting — customers loved them. We prototyped a dedicated experience before ultimately merging it into Books."
    }), "\n", createVNode($$Row, {
      cols: 2,
      children: [createVNode($$Figure, {
        src: "/images/work/ebbc/staffpicks-lofi.jpg",
        alt: "Staff picks page low-fidelity",
        caption: "Low-fi"
      }), createVNode($$Figure, {
        src: "/images/work/ebbc/staffpicks-med.jpg",
        alt: "Staff picks page mid-fidelity",
        caption: "Mid-fi"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "events-page",
      children: "Events page"
    }), "\n", createVNode(_components.p, {
      children: "Events were crucial to EB. Their existing interface was confusing — confirmed by the high failure rate during the baseline test."
    }), "\n", createVNode($$Row, {
      cols: 3,
      children: [createVNode($$Figure, {
        src: "/images/work/ebbc/events-lofi.jpg",
        alt: "Events page low-fidelity",
        caption: "Low-fi"
      }), createVNode($$Figure, {
        src: "/images/work/ebbc/events-med.jpg",
        alt: "Events page mid-fidelity",
        caption: "Mid-fi"
      }), createVNode($$Figure, {
        src: "/images/work/ebbc/events-final.png",
        alt: "Final Events page design",
        caption: "Final"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "The design with a cooler tone was chosen as the final direction. Considering the time constraint, I was able to complete the redesign of the home, books, and events pages. A gargantuan effort was allocated for the redesign of the information architecture."
    }), "\n", createVNode(_components.p, {
      children: "Borrowing inspiration from travel and destination websites, the home page features a fullscreen image of the bookstore interior. We also incorporated staff picks as a global element of the header — visible across all three pages."
    }), "\n", createVNode(_components.h2, {
      id: "reflections",
      children: "Reflections"
    }), "\n", createVNode(_components.p, {
      children: "There is great value in following a UCD approach, especially in reconciling the gap between the business and the users. As a designer, I learned to look at each design challenge from the lens of the users."
    }), "\n", createVNode(_components.p, {
      children: "For this particular project, I would have loved to learn more about the bookstore’s business goals and identity. And if the redesign was implemented, it would be great to measure performance — is there an increase in new visitors? Incremental growth from online shopping? More traffic to the website?"
    }), "\n", createVNode(_components.p, {
      children: "After conducting a variety of user research methods, I found a new appreciation for truly empathizing with users and using insights to implement a design."
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

const url = "src/content/work/ebbc.mdx";
const file = "/private/tmp/flora-component-build/src/content/work/ebbc.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/private/tmp/flora-component-build/src/content/work/ebbc.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
