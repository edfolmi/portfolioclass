// All portfolio copy lives here. Edit this file to update the site.

export const site = {
  name: "Ephraim",
  role: "AI & Backend Engineer",
  location: "Nigeria",
  email: "hello@example.com", // TODO: replace with your real contact email
  availability: "Open to select collaborations",
  url: "https://github.com/edfolmi",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const hero = {
  eyebrow: "AI & Backend Engineer",
  headline: ["I build AI systems", "that hold up in", "production."],
  intro:
    "I design the backends, pipelines and evaluation loops that turn promising AI demos into dependable products, and I'm the founder of Squinia.",
  primaryCta: { label: "View projects", href: "#projects" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
  stats: [
    { value: "Voice", label: "real-time AI systems" },
    { value: "Evals", label: "datasets and feedback loops" },
    { value: "Founder", label: "Squinia" },
  ],
};

export const about = {
  title: "Engineering for the moment after the demo.",
  paragraphs: [
    "I'm an AI and backend engineer focused on the unglamorous parts that decide whether an AI product survives contact with real users: latency budgets, failure handling, evaluation datasets, and clear feedback for the people using it.",
    "I founded Squinia, an AI-powered platform where people practise interviews and workplace conversations through chat, voice and video simulations, then get structured feedback. It serves individuals, bootcamps, universities and companies.",
    "I also write a newsletter, AI Engineering in Production, for senior engineers who ship AI features and have to keep them running.",
  ],
  facts: [
    { label: "Role", value: "AI / Backend Engineer" },
    { label: "Founder", value: "Squinia" },
    { label: "Writing", value: "AI Engineering in Production" },
    { label: "Based in", value: "Nigeria" },
  ],
  skills: [
    {
      group: "AI systems",
      items: ["LLM applications", "Voice pipelines", "Evaluation datasets", "Structured feedback"],
    },
    {
      group: "Backend",
      items: ["API design", "Service architecture", "Data pipelines", "Exchange integrations"],
    },
    {
      group: "Product",
      items: ["Simulation design", "Founder-led delivery", "Technical writing"],
    },
  ],
};

export type Project = {
  title: string;
  year: string;
  kind: string;
  summary: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Squinia",
    year: "Ongoing",
    kind: "Founder · AI platform",
    summary:
      "An AI-powered communication simulation platform. Learners rehearse interviews and workplace conversations over chat, voice and video, then receive structured, rubric-based feedback.",
    tags: ["Voice AI", "Evaluation", "Simulation", "Feedback"],
  },
  {
    title: "Candleweb BOT",
    year: "MVP",
    kind: "Trading automation",
    summary:
      "A cryptocurrency trading bot MVP built around a clean architecture and pluggable exchange integrations, so strategies stay separate from execution details.",
    tags: ["Backend", "Exchange APIs", "Automation"],
  },
  {
    title: "AI Engineering in Production",
    year: "Newsletter",
    kind: "Writing",
    summary:
      "A newsletter for senior software engineers on what it takes to run AI features reliably: architecture, evaluation, cost, and the failures nobody puts in the launch post.",
    tags: ["Writing", "LLMs", "Architecture"],
  },
];

export const contact = {
  title: "Let's build something dependable.",
  blurb:
    "Have a product that needs to move from prototype to production, or want to talk about AI engineering? I'd like to hear about it.",
  links: [
    { label: "GitHub", href: "https://github.com/edfolmi" },
    // TODO: add LinkedIn / newsletter URLs
  ],
};
