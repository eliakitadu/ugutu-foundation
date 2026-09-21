// Central content for UGUTU Community Foundation.
// Everything the site displays lives here so content can be edited without touching markup.
// Image paths left as "" fall back to a styled placeholder until a real file is added.

export const org = {
  name: "UGUTU Community Foundation",
  shortName: "UGUTU",
  logo: "", // set to "/images/logo.png" once the logo file is added to public/images/
  tagline: "Helping deprived Tanzanian children realise their full potential through education.",
  registration: "Registered NGO under the Non-Governmental Organizations Act, No. 24 of 2002, United Republic of Tanzania.",
  areaOfOperation: "Based in Arusha and Manyara Regions, and registered to work nationwide across Tanzania.",
  vision: "Helping deprived Tanzanian children realise their full potential through education.",
  mission: "Providing quality services to the community through quality education.",
  email: "info@ugutufoundation.org", // TODO: not wired to a mailbox yet
  address: {
    street: "Mji Mwema Street, near Unambwe Secondary School",
    ward: "Usa River Ward, Arumeru District",
    region: "Arusha Region, Tanzania",
    poBox: "P.O. Box 6075",
  },
  social: {
    instagram: "jowindaycare", // handle only, no @  (TODO: dedicated org account later)
    facebook: "", // TODO
    youtube: "", // TODO
  },
};

// Phone contacts.
export const contacts = [
  { name: "Joel Vomo", role: "Chairperson", phone: "0754 882 111", tel: "+255754882111" },
  { name: "Winifrida Massawe", role: "Executive Secretary", phone: "0767 358 800", tel: "+255767358800" },
];

// Bank account for donations (KCB Bank Tanzania).
export const bank = {
  bankName: "KCB Bank Tanzania Limited",
  branch: "Arusha Papu",
  accountName: "UGUTU COMMUNITY",
  accountNumber: "3391643595",
  currency: "TZS",
  swift: "KCBLTZTZ", // for international transfers
  bankAddress: "Ali Hassan Mwinyi / Kaunda Drive Junction, P.O. Box 804, Dar es Salaam, Tanzania",
};

// Broader mandate (shown on About).
export const scope = "UGUTU Community Foundation is based in Arusha and Manyara, but our registration allows us to work anywhere in Tanzania — and as funding grows, so will our reach. While our schools are at the centre of what we do, our mandate is broader: we work for social development among vulnerable families and individuals across the country, from education and livelihoods to the environment and the rights of women and children.";

// Generic image slots — drop a file in public/images/ and set the path here.
export const images = {
  hero: "",        // e.g. /images/hero.jpg
  story: "",       // e.g. /images/story.jpg
  serve: "",       // e.g. /images/serve.jpg
  funding: "",     // e.g. /images/funding.jpg
};

// The story / why we exist (from the constitution preamble + community context).
export const story = `Many members of our community have never been able to access quality education, held back by poverty and the simple inability to afford the cost of schooling. Children from poor families are the most exposed. In pastoralist Maasai communities especially, girls are too often pulled out of school by early marriage and early pregnancy, while others drift toward child labour and drug use when the classroom door stays closed. UGUTU Community Foundation exists to change that — to make quality education reachable for orphans and vulnerable children, and to build stronger, self-reliant communities around them.`;

// The two schools run under the Foundation.
export const schools = [
  {
    slug: "ugutu-pre-primary",
    name: "UGUTU Pre & Primary School",
    location: "Simanjiro, Manyara Region",
    tag: "Our main project",
    lead: true,
    image: "", // /images/schools/ugutu-pre-primary.jpg
    summary:
      "Our growing school in the Maasai community of Simanjiro — and the focus of our work this year.",
    body:
      "Simanjiro is where most of our effort now goes. We have land to grow, and a community that increasingly wants education for its children. Our goal this year is to raise funds to build classrooms and dormitories so more children can learn — and board — safely, and to sponsor children whose families cannot meet the cost of school.",
    needs: [
      "Classroom construction",
      "Dormitory construction",
      "Child sponsorship",
      "Uniforms, stationery & shoes",
    ],
  },
  {
    slug: "jowin-daycare",
    name: "JOWIN Daycare",
    location: "Mji Mwema, Usa River, Arumeru District",
    tag: "Early education",
    lead: false,
    image: "", // /images/schools/jowin-daycare.jpg
    summary:
      "Our pre-primary school in Usa River, where the youngest children begin their education.",
    body:
      "At JOWIN Daycare in Usa River we teach early, foundational learning and work to find sponsors so vulnerable children can continue their schooling. It is where many children take their very first steps into education.",
    needs: ["Child sponsorship", "Learning materials"],
  },
];

// This year's appeal — the concrete funding drive (Simanjiro).
export const appeal = {
  title: "Help us build the school in Simanjiro",
  body: "This year our priority is developing UGUTU Pre & Primary School in Simanjiro. Your support goes straight into the things children need most.",
  items: [
    { label: "Classrooms", note: "Safe, permanent rooms so more children can learn." },
    { label: "Dormitories", note: "Boarding so children from far away can stay in school." },
    { label: "Child sponsorship", note: "Covering fees for children whose families cannot." },
    { label: "Uniforms, stationery & shoes", note: "The everyday basics that keep a child in class." },
  ],
};

// Programs = the objectives from Article 9 of the constitution.
export const programs = [
  {
    slug: "quality-education",
    title: "Quality Education for Vulnerable Children",
    summary:
      "Promoting good, quality education for orphans and vulnerable children so that poverty is never the reason a child stays out of school.",
    body:
      "At the heart of everything we do is a simple belief: every Tanzanian child deserves a real chance to learn. Through our schools we remove the barriers — cost, distance, and hardship — that keep orphans and vulnerable children out of the classroom, and keep them learning once they are there.",
  },
  {
    slug: "entrepreneurship",
    title: "Community Entrepreneurship Skills",
    summary:
      "Empowering community members with practical entrepreneurship and livelihood skills that build lasting self-reliance.",
    body:
      "Education does not end at childhood. We equip families and young people with entrepreneurship and income-generating skills, so households can support their own children's schooling and communities can grow stronger from within.",
  },
  {
    slug: "environment",
    title: "Environment Conservation",
    summary:
      "Advocating for environmental conservation and helping communities protect the land they depend on.",
    body:
      "A healthy environment is the foundation of a healthy community. We raise awareness and support local action to conserve the natural resources our communities rely on for the future.",
  },
  {
    slug: "rights-awareness",
    title: "Children's & Women's Rights",
    summary:
      "Raising awareness about the rights of children and women, and standing up for the vulnerable and voiceless.",
    body:
      "We speak up for the marginalised, voiceless and underprivileged — especially women, youth and children — through awareness, advocacy and community education about the rights every person holds, including a girl's right to stay in school.",
  },
];

// Ways to help.
export const involve = [
  {
    title: "Donate",
    blurb: "Fund classrooms, dormitories and school places for children who cannot afford them.",
    cta: "Support our work",
    href: "/get-involved/#donate",
  },
  {
    title: "Give goods",
    blurb: "Donate uniforms, stationery, shoes and learning materials — the everyday basics that keep a child in class.",
    cta: "Donate goods",
    href: "/get-involved/#goods",
  },
  {
    title: "Volunteer",
    blurb: "Visitors are welcome to give their time on the ground — teaching, mentoring and supporting our schools.",
    cta: "Become a volunteer",
    href: "/get-involved/#volunteer",
  },
  {
    title: "Partner",
    blurb: "Organisations and sponsors can partner with us on grants, construction and long-term projects.",
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

// Gallery. Add images to fill it:
// { src: "/images/gallery/photo-1.jpg", alt: "Description", caption: "Optional caption" }
export const gallery = [];

// Primary navigation.
export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Our Schools", href: "/schools/" },
  { label: "Programs", href: "/programs/" },
  { label: "Get Involved", href: "/get-involved/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Contact", href: "/contact/" },
];
