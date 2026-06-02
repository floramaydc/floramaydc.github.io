/* empty css                                 */
import { p as createAstro, q as createComponent, w as renderComponent, D as renderTemplate, v as maybeRenderHead, o as addAttribute, H as spreadAttributes } from '../chunks/astro/server_D37m5tNR.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Dd7kTHl0.mjs';
import { g as getPublicImageSize } from '../chunks/publicImageSize_tT-4UM5E.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const igData = [
	{
		id: "18124460665546936",
		src: "18124460665546936.jpg",
		alt: "Giving Portugal the spotlight it deserves.",
		caption: "Giving Portugal the spotlight it deserves.",
		permalink: "https://www.instagram.com/p/DT3GWf7iSv_/",
		timestamp: "2026-01-23T17:04:55+0000",
		mediaType: "CAROUSEL_ALBUM"
	},
	{
		id: "17917202682257332",
		src: "17917202682257332.jpg",
		alt: "Seattle in golden hour yesterday 🤍",
		caption: "Seattle in golden hour yesterday 🤍",
		permalink: "https://www.instagram.com/p/DTnn0dKFGU0/",
		timestamp: "2026-01-17T16:49:31+0000",
		mediaType: "IMAGE"
	},
	{
		id: "18028054514595331",
		src: "18028054514595331.jpg",
		alt: "Ending our vacation at Bristol, Cotswold, and Wales (Cardiff, Caerphilly, & Chepstow).",
		caption: "Ending our vacation at Bristol, Cotswold, and Wales (Cardiff, Caerphilly, & Che…",
		permalink: "https://www.instagram.com/reel/DTYS5hMD_fG/",
		timestamp: "2026-01-11T18:01:08+0000",
		mediaType: "VIDEO"
	},
	{
		id: "18010707971820014",
		src: "18010707971820014.jpg",
		alt: "You melt my heart ❤️",
		caption: "You melt my heart ❤️",
		permalink: "https://www.instagram.com/p/DTWIJk6kklu/",
		timestamp: "2026-01-10T21:45:41+0000",
		mediaType: "IMAGE"
	}
];

const $$Astro = createAstro("https://www.floramaydc.com");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const base = "/".endsWith("/") ? "/" : "//";
  const ig = igData.slice(0, 4);
  const siteUrl = (Astro2.site?.toString() ?? "https://www.floramaydc.com/").replace(/\/$/, "");
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Flora May dela Cruz",
    jobTitle: "Senior UX and Product Designer",
    worksFor: { "@type": "Organization", name: "Microsoft" },
    url: `${siteUrl}/about/`,
    image: `${siteUrl}/images/about/flora.webp`,
    sameAs: [
      "https://www.linkedin.com/in/floramaydelacruz",
      "https://www.instagram.com/floramaydc",
      "https://github.com/floramaydc"
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About — Flora May dela Cruz", "description": "Flora May dela Cruz is a senior UX and product designer at Microsoft focused on AI, complex systems, and accessibility. Previously: Best Buy, AWS, T-Mobile, IBM.", "jsonLd": personJsonLd, "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="about-hero" data-astro-cid-kh7btl4r> <div class="about-hero__text" data-astro-cid-kh7btl4r> <p class="about-eyebrow" data-astro-cid-kh7btl4r>About</p> <h1 class="about-headline" data-astro-cid-kh7btl4r>
I design for clarity in complex systems<br data-astro-cid-kh7btl4r> <span class="about-headline-em" data-astro-cid-kh7btl4r>or everyday life.</span> </h1> </div> <figure class="about-portrait" data-astro-cid-kh7btl4r> <img${addAttribute(`${base}images/about/flora.webp`, "src")} alt="Flora May dela Cruz, wearing a navy blue jacket, holding an ice cream." width="1500" height="1500" loading="eager" decoding="async" data-astro-cid-kh7btl4r> </figure> </header> <section class="about-section" aria-labelledby="work-philosophy" data-astro-cid-kh7btl4r> <h2 id="work-philosophy" class="about-h2" data-astro-cid-kh7btl4r>Work &amp; philosophy</h2> <div class="about-prose" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
I'm a Senior Product Designer at Microsoft, focused on turning complex,
        technical problems into usable and trustworthy experiences. My work sits
        at the intersection of people, systems, and emerging technology.
</p> <p data-astro-cid-kh7btl4r>
As AI evolves, I've had the chance to design for powerful new capabilities.
        But I believe it should enhance the experiences we build, not replace them.
        Technology shouldn't trade clarity or intuition for scale. We still need
        structure, empathy, and ethics — especially when our tools shape how
        people work, learn, and make decisions.
</p> <p data-astro-cid-kh7btl4r>
Design is a responsibility. That's the mindset I bring to every product,
        every pattern, every decision.
</p> </div> </section> <section class="about-section" aria-labelledby="past-experience" data-astro-cid-kh7btl4r> <h2 id="past-experience" class="about-h2" data-astro-cid-kh7btl4r>Past experience</h2> <div class="about-prose" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Before Microsoft, I worked across consumer, cloud, enterprise, compliance,
        developer tools, and internal platforms. That range shaped my flexibility
        as a designer: learning new domains quickly and bringing structure to
        complex workflows.
</p> <ul class="about-list" data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r><strong data-astro-cid-kh7btl4r>Best Buy:</strong> Consumer mobile phone shopping and activation experiences.</li> <li data-astro-cid-kh7btl4r><strong data-astro-cid-kh7btl4r>Projekt202 → AWS:</strong> Early UX for Amazon CodeCatalyst, including CI/CD workflows and test reporting. I also supported a Prime Video proposal that helped win the contract.</li> <li data-astro-cid-kh7btl4r><strong data-astro-cid-kh7btl4r>Piktorlabs → T-Mobile:</strong> Multiple initiatives across cloud compliance, internal platforms, developer experiences, and enterprise workflows.</li> <li data-astro-cid-kh7btl4r><strong data-astro-cid-kh7btl4r>IBM:</strong> Started as an IT Specialist and later became a Country Operations Manager, giving me firsthand experience with enterprise systems from the operational side.</li> </ul> <p data-astro-cid-kh7btl4r>
The throughline has been making complex, multi-step experiences clearer
        and easier to navigate. Selected projects live on the
<a${addAttribute(`${base}work`, "href")} class="about-link" data-astro-cid-kh7btl4r>Work</a> page.
</p> </div> </section> <section class="about-section" aria-labelledby="personal-story" data-astro-cid-kh7btl4r> <h2 id="personal-story" class="about-h2" data-astro-cid-kh7btl4r>Personal story</h2> <div class="about-prose" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
I grew up in the Philippines at a time when technology lagged behind and
        conformity was expected. We were taught to follow the rules, work hard,
        and succeed — even when systems weren't always built for us. That shaped
        how I work today: focused, adaptive, and grounded.
</p> <p data-astro-cid-kh7btl4r>
As an immigrant, I've learned to move between different cultures and
        expectations. Design helps me connect those experiences and make things
        clearer for others.
</p> </div> </section> <section class="about-section" aria-labelledby="fun-side" data-astro-cid-kh7btl4r> <h2 id="fun-side" class="about-h2" data-astro-cid-kh7btl4r>On the fun side</h2> <div class="about-prose" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Outside of work, I love creating stories, spaces, and images. It's how I
        stay curious and connected to myself. I started writing a children's book
        while pregnant with Isla, just playing with prompts and story ideas to
        create the illustrations. My husband Nick and I styled our old townhouse
        together — pale and minimal meets bold and bright. And I draw what I
        can, when I can, to clear my head.
</p> <p data-astro-cid-kh7btl4r>
Those projects live on the <a${addAttribute(`${base}play`, "href")} class="about-link" data-astro-cid-kh7btl4r>Play</a> page —
        each one opened as a small book.
</p> </div> </section> <section class="about-section about-ig" aria-labelledby="travel" data-astro-cid-kh7btl4r> <h2 id="travel" class="about-h2" data-astro-cid-kh7btl4r>Travel &amp; lately</h2> <div class="about-prose" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
When design work takes a pause, I'm off exploring with my family. I post
        the chronicles on Instagram at
<a href="https://www.instagram.com/floramaydc" class="about-link" target="_blank" rel="noopener noreferrer" data-astro-cid-kh7btl4r>@floramaydc</a>.
</p> </div> <ul class="ig-grid" data-astro-cid-kh7btl4r> ${ig.map((p, i) => {
    const imagePath = `images/about/ig/${p.src}`;
    const imageSize = getPublicImageSize(imagePath);
    return renderTemplate`<li data-astro-cid-kh7btl4r> <a${addAttribute(p.permalink || "https://www.instagram.com/floramaydc", "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`View on Instagram — ${p.caption || p.alt}`, "aria-label")} data-astro-cid-kh7btl4r> <img${addAttribute(`${base}${imagePath}`, "src")}${addAttribute(p.alt, "alt")}${addAttribute(i === 0 ? "eager" : "lazy", "loading")}${addAttribute(i === 0 ? "high" : "auto", "fetchpriority")} decoding="async"${spreadAttributes(imageSize ? { width: imageSize.width, height: imageSize.height } : {}, void 0, { "class": "astro-kh7btl4r" })} data-astro-cid-kh7btl4r> ${p.caption && renderTemplate`<span class="ig-caption" data-astro-cid-kh7btl4r>${p.caption}</span>`} </a> </li>`;
  })} </ul> <p class="ig-follow" data-astro-cid-kh7btl4r> <a href="https://www.instagram.com/floramaydc" target="_blank" rel="noopener noreferrer" class="about-link" data-astro-cid-kh7btl4r>Follow @floramaydc →</a> </p> </section> ` })} `;
}, "/private/tmp/flora-component-build/src/pages/about.astro", void 0);
const $$file = "/private/tmp/flora-component-build/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
