export const siteConfig = {
  name: "Nova Atelier",
  url: "https://www.novaatelier.com",
  description:
    "Premium corporate website starter for modern companies that need a refined, scalable digital presence.",
  email: "hello@novaatelier.com",
  phone: "+1 (555) 240-1804",
  location: "Paris, London, Remote",
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/legal", label: "Legal" },
];

export const heroStats = [
  { value: "02", label: "weeks to launch a refined MVP presence" },
  { value: "08", label: "core sections ready to adapt and scale" },
  { value: "100%", label: "TypeScript-based structure for production work" },
];

export const services = [
  {
    title: "Brand Presence Strategy",
    label: "Strategy",
    description: "Sharper messaging, clearer information architecture, and a homepage narrative designed to build trust quickly.",
    longDescription:
      "Positioning support, content hierarchy, and conversion-aware page planning for companies evolving their digital presence or preparing to launch a new offer.",
  },
  {
    title: "Premium Website Design",
    label: "Design",
    description: "A visual system with confidence, restraint, and premium spacing across every viewport.",
    longDescription:
      "Art direction, responsive UI systems, section design, and reusable page patterns suited to corporate sites, boutique consultancies, and high-end service brands.",
  },
  {
    title: "Next.js Frontend Build",
    label: "Build",
    description: "Production-ready implementation using a simple stack that stays fast to maintain and easy to deploy.",
    longDescription:
      "App Router foundations, component-driven architecture, tasteful motion, SEO metadata, and a clean setup designed for GitHub workflows and Node.js hosting.",
  },
  {
    title: "Launch Readiness",
    label: "Launch",
    description: "The practical layer that helps a polished website move from concept to deployment with less friction.",
    longDescription:
      "Deployment guidance, legal page placeholders, metadata coverage, reusable content structures, and a contact flow ready for CRM or email integration later.",
  },
];

export const values = [
  {
    title: "Precision",
    description: "Every screen and component should feel measured, not improvised. Premium execution comes from restraint and consistency.",
  },
  {
    title: "Clarity",
    description: "Good corporate websites help people understand what matters quickly. Layout, copy hierarchy, and interaction design all support that goal.",
  },
  {
    title: "Longevity",
    description: "The structure is designed to evolve into a real company website without throwing away the starter once content, CMS, or integrations arrive.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Frame the narrative",
    description: "Clarify the message, audience priorities, and the sections required to support real business conversations.",
  },
  {
    step: "02",
    title: "Design the system",
    description: "Establish typography, surfaces, motion, spacing, and reusable patterns that hold together across every page.",
  },
  {
    step: "03",
    title: "Ship with confidence",
    description: "Build on a simple foundation, verify production commands, and leave room for future integrations without clutter.",
  },
];

export const contactDetails = [
  { title: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { title: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}` },
  { title: "Location", value: siteConfig.location, href: "#" },
];

export const legalSections = [
  {
    title: "Legal Notice",
    paragraphs: [
      "This website starter is provided as a neutral corporate template for Nova Atelier. Before public launch, replace all placeholder business details with the official company name, registration information, registered address, and contact channels relevant to your jurisdiction.",
      "Publishing entity details, company identifiers, and hosting disclosures should be reviewed with legal counsel to match the territory where the final business operates.",
    ],
  },
  {
    title: "Privacy",
    paragraphs: [
      "The current starter does not require analytics, advertising trackers, or persistent customer accounts. If those features are added later, update this section to describe data collection, lawful basis, retention periods, processors, and user rights in clear language.",
      "If you connect the contact form to a CRM or inbox provider, document how messages are transmitted, stored, and deleted, and ensure consent notices match the final processing workflow.",
    ],
  },
  {
    title: "Cookies",
    paragraphs: [
      "This starter does not include a cookie banner because it does not place optional tracking cookies by default. Reassess this decision before launch if analytics, embedded third-party content, or marketing tools are introduced.",
    ],
  },
];
