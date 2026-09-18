// Central content for UGUTU Community Foundation.
// Everything the site displays lives here so content can be edited without touching markup.

export const org = {
  name: "UGUTU Community Foundation",
  shortName: "UGUTU",
  tagline: "Helping deprived Tanzanian children realise their full potential through education.",
  registration: "Registered NGO under the Non-Governmental Organizations Act, No. 24 of 2002, United Republic of Tanzania.",
  areaOfOperation: "Operating nationally across Tanzania, based in Arusha Region.",
  vision: "Helping deprived Tanzanian children realise their full potential through education.",
  mission: "Providing quality services to the community through quality education.",
  email: "info@ugutufoundation.org", // TODO: confirm real address
  phone: "", // TODO: add phone number
  address: {
    street: "Mji Mwema Street, near Unambwe Secondary School",
    ward: "Usa River Ward, Arumeru District",
    region: "Arusha Region, Tanzania",
    poBox: "P.O. Box 6075",
  },
  social: {
    facebook: "", // TODO
    instagram: "", // TODO
    youtube: "", // TODO
  },
};

// The story / why we exist (from the constitution preamble).
export const story = `Many members of our community have never been able to access quality education, held back by poverty and the simple inability to afford the cost of schooling. Children from poor families are the most exposed — pushed towards child labour and drug use when the doors of the classroom stay closed to them. UGUTU Community Foundation exists to change that: to make quality education reachable for orphans and vulnerable children, and to build stronger, self-reliant communities around them.`;

// Programs = the objectives from Article 9 of the constitution.
export const programs = [
  {
    slug: "quality-education",
    title: "Quality Education for Vulnerable Children",
    summary:
      "Promoting good, quality education for orphans and vulnerable children so that poverty is never the reason a child stays out of school.",
    body:
      "At the heart of everything we do is a simple belief: every Tanzanian child deserves a real chance to learn. We work to remove the barriers — cost, distance, and hardship — that keep orphans and vulnerable children out of the classroom, and to keep them learning once they are there.",
    icon: "book",
  },
  {
    slug: "entrepreneurship",
    title: "Community Entrepreneurship Skills",
    summary:
      "Empowering community members with practical entrepreneurship and livelihood skills that build lasting self-reliance.",
    body:
      "Education does not end at childhood. We equip families and young people with entrepreneurship and income-generating skills, so households can support their own children's schooling and communities can grow stronger from within.",
    icon: "spark",
  },
  {
    slug: "environment",
    title: "Environment Conservation",
    summary:
      "Advocating for environmental conservation and helping communities protect the land they depend on.",
    body:
      "A healthy environment is the foundation of a healthy community. We raise awareness and support local action to conserve the natural resources our communities rely on for the future.",
    icon: "leaf",
  },
  {
    slug: "rights-awareness",
    title: "Children's & Women's Rights",
    summary:
      "Raising awareness about the rights of children and women, and standing up for the vulnerable and voiceless.",
    body:
      "We speak up for the marginalised, voiceless and underprivileged — especially women, youth and children — through awareness, advocacy and community education about the rights every person holds.",
    icon: "shield",
  },
];

// Ways to help — the AADJT "how to help" pattern.
export const involve = [
  {
    title: "Donate",
    icon: "heart",
    blurb: "Your gift funds school places, learning materials and skills programmes for children who cannot afford them.",
    cta: "Support our work",
    href: "/get-involved/#donate",
  },
  {
    title: "Volunteer",
    icon: "hands",
    blurb: "Share your time and skills on the ground in Arusha — teaching, mentoring, and supporting our programmes.",
    cta: "Become a volunteer",
    href: "/get-involved/#volunteer",
  },
  {
    title: "Partner",
    icon: "spark",
    blurb: "Organisations and sponsors can partner with us on grants, projects and long-term community initiatives.",
    cta: "Partner with us",
    href: "/get-involved/#partner",
  },
];

// Leadership — Article 30 organisation members table.
export const team = [
  { name: "Joel Alan Vomo", role: "Chairperson" },
  { name: "Winifrida Epimark Massawe", role: "Executive Secretary" },
  { name: "Simeon Bisumbaguswa Vomo", role: "Treasurer" },
  { name: "Elizabeth John Mtui", role: "Board Member" },
  { name: "Joan Francis Vomo", role: "Board Member" },
];

// How the foundation is funded (Article 25).
export const fundingSources = [
  "Membership fees",
  "Fundraising",
  "Gifts from friends and supporters",
  "Grants and donations",
  "Income-generating activities",
];

// News / updates. Leave empty for a friendly "coming soon" state.
// To publish a post, add an object: { title, date, excerpt, href }
export const news = [];

// Primary navigation.
export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Programs", href: "/programs/" },
  { label: "Get Involved", href: "/get-involved/" },
  { label: "News", href: "/news/" },
  { label: "Contact", href: "/contact/" },
];
