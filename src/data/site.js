// Central content for UGUTU Community Foundation.
// Edit text and image paths here; every page updates. Image paths of "" show a placeholder.

export const org = {
  name: "UGUTU Community Foundation",
  shortName: "UGUTU",
  logo: "/images/web/logo.png",       // full logo (transparent)
  logoMark: "/images/web/logo-mark.png", // emblem only (header / favicon)
  tagline: "Helping deprived Tanzanian children realise their full potential through education.",
  registration: "Registered NGO under the Non-Governmental Organizations Act, No. 24 of 2002, United Republic of Tanzania.",
  areaOfOperation: "A national organisation working across Tanzania, headquartered in Arusha.",
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
    instagram: "jowindaycare",
    facebook: "",
    youtube: "",
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
  swift: "KCBLTZTZ",
  bankAddress: "Ali Hassan Mwinyi / Kaunda Drive Junction, P.O. Box 804, Dar es Salaam, Tanzania",
};

// Broader mandate (shown on About and Organization Profile).
export const scope = "UGUTU Community Foundation works across Tanzania for the social development of vulnerable and marginalised groups — children, youth, women and families alike. Education is our foundation, but our mandate is broader: alongside our schools we work on entrepreneurship and livelihoods, environmental conservation, and the rights of women and children. Headquartered in Arusha, and registered to operate anywhere in the country, we grow our reach wherever we are needed and as resources allow.";

// Image slots — drop a file in public/images/ and set the path here.
export const images = {
  hero: "/images/web/gallery/IMG_8212.jpg",   // children at the JOWIN Daycare signboard
  story: "/images/web/story.jpg",
  serve: "/images/web/gallery/IMG_1143.jpg",  // a pupil learning with a tablet
  funding: "/images/web/community.jpg",
  volunteer: "/images/web/volunteer.jpg",
  goods: "/images/web/gallery/IMG_2333.jpg",  // donated uniforms, shoes & stationery
  partner: "/images/web/story.jpg",
  profile: "/images/web/community.jpg",
};

// The story / why we exist.
export const story = `Many members of our community have never been able to access quality education, held back by poverty and the simple inability to afford the cost of schooling. Children from poor families are the most exposed. In pastoralist Maasai communities especially, girls are too often pulled out of school by early marriage and early pregnancy, while others drift toward child labour and drug use when the classroom door stays closed. UGUTU Community Foundation exists to change that — to make quality education reachable for orphans and vulnerable children, and to build stronger, self-reliant communities around them.`;

// The two schools run under the Foundation.
export const schools = [
  {
    slug: "ugutu-pre-primary",
    name: "UGUTU Pre & Primary School",
    location: "Simanjiro, Manyara Region",
    tag: "Our main project",
    lead: true,
    image: "/images/web/gallery/IMG_5836.jpg",
    summary: "Our growing school in the Maasai community of Simanjiro — and the focus of our work this year.",
    body: "Simanjiro is where most of our effort now goes. We have land to grow, and a community that increasingly wants education for its children. Our goal this year is to raise funds to build classrooms and dormitories so more children can learn — and board — safely, and to sponsor children whose families cannot meet the cost of school.",
    needs: ["Classroom construction", "Dormitory construction", "Child sponsorship", "Uniforms, stationery & shoes"],
  },
  {
    slug: "jowin-daycare",
    name: "JOWIN Daycare",
    location: "Mji Mwema, Usa River, Arumeru District",
    tag: "Early education",
    lead: false,
    image: "/images/web/jowin.jpg",
    summary: "Our pre-primary school in Usa River, where the youngest children begin their education.",
    body: "At JOWIN Daycare in Usa River we teach early, foundational learning and work to find sponsors so vulnerable children can continue their schooling. It is where many children take their very first steps into education.",
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

// Programs = the objectives from Article 9 — for children, youth, women and families.
export const programs = [
  {
    slug: "quality-education",
    title: "Education & Sponsorship",
    summary: "Quality education and sponsorship for orphans, vulnerable children and young people, so poverty is never the reason a learner leaves school.",
    body: "Education is where we start. Through our schools and sponsorships we remove the barriers — cost, distance and hardship — that keep vulnerable children and youth out of the classroom, and we keep them learning once they are there.",
  },
  {
    slug: "entrepreneurship",
    title: "Livelihoods & Entrepreneurship",
    summary: "Practical entrepreneurship and income-generating skills for families, women and youth, building lasting self-reliance.",
    body: "Strong families raise educated children. We equip parents, women and young people with entrepreneurship and livelihood skills, so households can support their own children's schooling and communities can grow stronger from within.",
  },
  {
    slug: "environment",
    title: "Environment & Community",
    summary: "Advocating for environmental conservation and helping communities protect the land and resources they depend on.",
    body: "A healthy environment is the foundation of a healthy community. We raise awareness and support local action to conserve the natural resources our communities rely on today and for the future.",
  },
  {
    slug: "rights-awareness",
    title: "Rights & Advocacy",
    summary: "Standing up for the vulnerable and voiceless — the rights of women, youth and children across the community.",
    body: "We speak up for the marginalised, voiceless and underprivileged — especially women, youth and children — through awareness, advocacy and community education about the rights every person holds, including a girl's right to stay in school.",
  },
];

// Project activities — the "what we're doing" feed. Add photos and update freely.
export const activities = [
  {
    title: "Early learning at JOWIN Daycare",
    location: "Usa River, Arusha",
    image: "/images/web/jowin.jpg",
    text: "Our youngest pupils get their first foundation — reading, numbers and play-based learning — in a safe, caring classroom.",
  },
  {
    title: "Growing the school in Simanjiro",
    location: "Simanjiro, Manyara",
    image: "/images/web/gallery/IMG_5839.jpg",
    text: "Developing classrooms and boarding for children in the Maasai community, so more can learn close to home.",
  },
  {
    title: "Sponsoring vulnerable children",
    location: "Across our schools",
    image: "/images/web/gallery/20260114_091049.jpg",
    text: "Covering fees, uniforms and materials for orphans and vulnerable children who could not otherwise attend school.",
  },
  {
    title: "Volunteers on the ground",
    location: "Arusha & Simanjiro",
    image: "/images/web/gallery/IMG_0899.jpg",
    text: "Visitors join our teachers to support teaching, mentoring and the daily life of our schools.",
  },
];

// Testimonials — add as you gather them: { quote, name, role, image }
export const testimonials = [];

// Ways to help (homepage).
export const involve = [
  { title: "Donate", blurb: "Fund classrooms, dormitories and school places for children who cannot afford them.", cta: "Support our work", href: "/get-involved/#donate" },
  { title: "Give goods", blurb: "Donate uniforms, stationery, shoes and learning materials — the basics that keep a child in class.", cta: "Donate goods", href: "/get-involved/#goods" },
  { title: "Volunteer", blurb: "Visitors are welcome to give their time — teaching, mentoring and supporting our schools.", cta: "Become a volunteer", href: "/get-involved/#volunteer" },
  { title: "Partner", blurb: "Organisations and sponsors can partner with us on grants, construction and long-term projects.", cta: "Partner with us", href: "/get-involved/#partner" },
];

// Leadership — Article 30 organisation members.
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

// Objectives (Article 9) — used on the Organization Profile.
export const objectives = [
  "Promote good, quality education for orphans and vulnerable children",
  "Empower the community with entrepreneurship and livelihood skills",
  "Advocate for environmental conservation",
  "Raise awareness of the rights of children and women",
];

// Gallery images (curated).
const G = "/images/web/gallery";
export const gallery = [
  { src: `${G}/IMG_8212.jpg`, alt: "Children outside the JOWIN Daycare signboard", caption: "At JOWIN Daycare, Usa River" },
  { src: `${G}/IMG_0899.jpg`, alt: "Two smiling pupils with a volunteer", caption: "Joy in every day" },
  { src: `${G}/20260114_091049.jpg`, alt: "Pupils in blue uniform at the chalkboard", caption: "Ready to learn" },
  { src: `${G}/IMG_5836.jpg`, alt: "Children learning outdoors in Simanjiro", caption: "Outdoor learning, Simanjiro" },
  { src: `${G}/IMG_5839.jpg`, alt: "A volunteer teaching children in Simanjiro", caption: "Lessons in the Maasai community" },
  { src: `${G}/IMG_1141.jpg`, alt: "Children learning with tablets in class", caption: "Learning with tablets" },
  { src: `${G}/IMG_1143.jpg`, alt: "A pupil smiling with a learning tablet", caption: "In class" },
  { src: `${G}/IMG_2333.jpg`, alt: "Donated uniforms, shoes and stationery", caption: "Uniforms, shoes & supplies" },
  { src: `${G}/IMG_2345.jpg`, alt: "New backpacks for pupils", caption: "New backpacks" },
  { src: `${G}/IMG_2330.jpg`, alt: "Donated school shoes", caption: "School shoes" },
  { src: `${G}/IMG_8533.jpg`, alt: "A joyful moment with a pupil", caption: "Smiles all round" },
  { src: "/images/web/jowin.jpg", alt: "A classroom at JOWIN Daycare", caption: "In the classroom" },
  { src: "/images/web/story.jpg", alt: "Group at a mural reading 'a place where love grows for learning'", caption: "A place where love grows for learning" },
  { src: "/images/web/community.jpg", alt: "Volunteers and children together", caption: "Together" },
];

// Primary navigation.
export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Our Schools", href: "/schools/" },
  { label: "Our Work", href: "/our-work/" },
  { label: "Get Involved", href: "/get-involved/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Contact", href: "/contact/" },
];
