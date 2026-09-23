// Central content for UGUTU Community Foundation.
// Edit text and image paths here; every page updates. Image paths of "" show a placeholder.

export const org = {
  name: "UGUTU Community Foundation",
  shortName: "UGUTU",
  logo: "/images/web/logo.png",
  logoMark: "/images/web/logo-mark.png",
  tagline: "Empowering communities, transforming lives and building a sustainable future.",
  motto: "Empowering Communities. Transforming Lives. Building a Sustainable Future.",
  registration: "Registered NGO under the Non-Governmental Organizations Act, No. 24 of 2002, United Republic of Tanzania.",
  areaOfOperation: "A national organisation working across Tanzania, headquartered in Arusha.",
  vision: "Helping deprived Tanzanian children realise their full potential through education.",
  mission: "Providing quality services to the community through quality education.",
  email: "info@ugutucommunityfoundation.org",
  address: {
    street: "Mji Mwema Street, near Unambwe Secondary School",
    ward: "Usa River Ward, Arumeru District",
    region: "Arusha Region, Tanzania",
    poBox: "P.O. Box 6075",
  },
  social: { instagram: "jowindaycare", facebook: "", youtube: "" },
};

// Phone contacts (shown on Contact page and footer; NOT on the Donate section).
export const contacts = [
  { name: "Joel Vomo", role: "Chairperson", phone: "0754 882 111", tel: "+255754882111" },
  { name: "Winifrida Massawe", role: "Executive Secretary", phone: "0767 358 800", tel: "+255767358800" },
];

// Broader mandate (About / Profile).
export const scope = "UGUTU Community Foundation works across Tanzania for the social development of vulnerable and marginalised communities. Education is our foundation, but our mandate is broader: alongside our learning centers we work on clean water, healthcare, agriculture, livestock and economic empowerment. Headquartered in Arusha and registered to operate anywhere in the country, we grow our reach wherever we are needed and as resources allow.";

// Image slots.
export const images = {
  hero: "/images/web/gallery/IMG_8212.jpg",   // children at the JOWIN signboard, Usa River
  story: "/images/web/story.jpg",
  serve: "/images/web/gallery/IMG_1143.jpg",
  funding: "/images/web/community.jpg",
  volunteer: "/images/web/volunteer.jpg",
  goods: "/images/web/gallery/IMG_2333.jpg",
  partner: "/images/web/story.jpg",
  profile: "/images/web/community.jpg",
  centersLead: "/images/web/gallery/simanjiro-school.jpg",
};

// Short narrative (Organization Profile).
export const story = `UGUTU Community Foundation began in response to a simple reality: too many members of our community have never been able to access quality education, held back by poverty. Children from poor families are the most exposed — and in pastoralist Maasai communities especially, girls are often pulled out of school by early marriage and early pregnancy. We exist to change that: to make quality education reachable for orphans and vulnerable children, and to build stronger, more self-reliant communities around them through an integrated approach to development.`;

// Home — "why we exist" narrative.
export const whyWeExist = [
  "We are building an integrated approach to community development, where education becomes the foundation that opens doors to opportunities such as healthcare, clean water and economic empowerment. These, in turn, create livelihoods and self-reliance that help families stand on their own.",
  "An educated child can become a professional, an entrepreneur, a farmer or a teacher. A productive farm can create food, income, employment and skills. A healthy family can work, learn, invest and build.",
  "Together, we can turn resources into opportunity, opportunity into livelihoods, and livelihoods into a better future.",
];
export const whyWeExistCall = "Support a community. Empower a family. Invest in the next generation.";

// The two centers run under the Foundation.
export const centers = [
  {
    slug: "ugutu-center",
    name: "Ugutu Center",
    location: "Simanjiro, Manyara Region",
    tag: "Our focus this year",
    lead: true,
    image: "/images/web/gallery/simanjiro-school.jpg",
    summary: "A learning and empowering center in the Maasai community of Simanjiro — a learning center and agricultural project, and one of UCF's main focuses this year.",
    body: "At Simanjiro, Ugutu Learning Center has the opportunity to grow, in a community that is in need of education for its children. This center has been established with the great support of Worldserve International and its donors, Tom Lawrence and family, to whom we are deeply grateful and humbled. From here we are building classrooms, boarding and an agricultural project so more children can learn close to home and families can grow more self-reliant.",
    needs: ["Classrooms", "Dormitories", "Child sponsorship", "Uniforms, shoes & learning materials"],
  },
  {
    slug: "jowin-center",
    name: "JOWIN Learning and Care Center",
    location: "Mji Mwema, Usa River, Arumeru District",
    tag: "Learning & care",
    lead: false,
    image: "/images/web/jowin.jpg",
    summary: "Our daycare center in Usa River, where the youngest children begin their learning experience.",
    body: "At JOWIN Learning and Care Center in Usa River, our youngest children take their very first steps into education — early, foundational learning in a safe and caring place — while we work to find sponsors so vulnerable children can continue their schooling.",
    needs: ["Child sponsorship", "Uniforms", "Shoes", "Learning materials"],
  },
];

// This year's appeal.
export const appeal = {
  title: "Help us build the Ugutu Center in Simanjiro",
  body: "This year our priority is developing the Ugutu Learning Center in Simanjiro. Your donations will transform children's lives.",
  items: [
    { label: "Classrooms", note: "Safe, permanent rooms so more children can learn." },
    { label: "Dormitories", note: "Boarding so children from far away can stay in school." },
    { label: "Child sponsorship", note: "Covering fees for children whose families cannot." },
    { label: "Uniforms, shoes & materials", note: "The everyday basics that keep a child in class." },
  ],
};

// The Six Pillars (About page).
export const pillars = [
  { icon: "book", title: "Education", tag: "Our First Priority", text: "Improving educational opportunities, learning environments, skills development, mentorship, scholarships and pathways for young people to achieve their potential." },
  { icon: "water", title: "Water", tag: "Supporting Learning and Life", text: "Developing reliable access to clean water for schools, families, healthcare, agriculture, livestock and productive community activities." },
  { icon: "health", title: "Healthcare", tag: "Healthy People Learn and Thrive", text: "Supporting healthier families and communities through access to essential healthcare, sanitation, hygiene, nutrition and health education." },
  { icon: "sprout", title: "Agriculture", tag: "Learning to Produce and Prosper", text: "Promoting knowledge, innovation, sustainable farming, food security, value addition and agricultural entrepreneurship." },
  { icon: "livestock", title: "Livestock", tag: "Developing Skills and Household Assets", text: "Supporting livestock knowledge, animal health, sustainable production and opportunities for families to build productive assets." },
  { icon: "briefcase", title: "Economic Empowerment", tag: "Turning Knowledge Into Opportunity", text: "Helping young people and families transform education and skills into entrepreneurship, employment, businesses, income and greater self-reliance." },
];

// Programs, projects & activities (Our Work page).
export const programs = [
  {
    slug: "education", icon: "book", title: "Education & Skills Development", subtitle: "Our Core Program",
    intro: "Education is at the heart of UGUTU Community Foundation. We create opportunities for children and young people to access quality education, develop practical skills, discover their talents and prepare for meaningful participation in their communities and the economy.",
    activities: ["Supporting access to quality education", "School infrastructure and learning facilities", "Scholarships and educational support", "Books, learning materials and school supplies", "Digital and computer literacy", "Vocational and practical skills training", "Career guidance and mentorship", "Leadership and life-skills development", "Sports, arts, creativity and talent development", "Adult and community education", "Supporting teachers and educational institutions"],
    goal: "To help children and young people move from learning → skills → opportunity → independence.",
  },
  {
    slug: "water", icon: "water", title: "Water & Community Development", subtitle: "Water That Creates Opportunity",
    intro: "Reliable access to clean water is essential for education, health, agriculture, livestock and economic development. Our water initiatives develop sustainable water resources that serve schools, healthcare facilities, households and productive community activities.",
    activities: ["Community water projects", "Water supply infrastructure", "School and institutional water access", "Water storage facilities", "Water for agriculture and irrigation", "Livestock watering facilities", "Hygiene and sanitation education", "Community water management", "Productive and income-generating use of water"],
    goal: "To turn water resources into a foundation for health, education and economic opportunity.",
  },
  {
    slug: "healthcare", icon: "health", title: "Healthcare & Wellbeing", subtitle: "Healthy People Learn, Work and Thrive",
    intro: "A healthy community is better positioned to educate its children, develop its economy and build a sustainable future. We support initiatives that improve access to essential healthcare, health education, sanitation, hygiene and nutrition.",
    activities: ["Community health awareness", "Health and hygiene education", "School health initiatives", "Nutrition awareness", "Sanitation and hygiene projects", "Support for healthcare facilities", "Community health outreach", "Maternal and child health awareness", "Preventive health education"],
    goal: "To help create healthier families and communities where children can learn and adults can work and prosper.",
  },
  {
    slug: "agriculture", icon: "sprout", title: "Agriculture & Food Security", subtitle: "From Knowledge to Production",
    intro: "We see agriculture not only as a source of food, but as a powerful platform for education, skills development, employment and economic empowerment. Our agricultural projects introduce practical knowledge and opportunities for farmers, young people and families.",
    activities: ["Demonstration farms", "Modern farming techniques", "Irrigation and water-efficient agriculture", "Crop production and horticulture", "Climate-smart agriculture", "Farmer training", "Youth agricultural programs", "Agricultural entrepreneurship", "Food processing and value addition", "Market-linkage initiatives"],
    goal: "To transform agriculture from a subsistence activity into a source of knowledge, food, skills, employment and sustainable income.",
  },
  {
    slug: "livestock", icon: "livestock", title: "Livestock Development", subtitle: "Building Productive Households",
    intro: "Livestock can provide food, income, assets and opportunities for rural families. Our livestock initiatives focus on improving knowledge, animal health, productivity and access to economic opportunities.",
    activities: ["Livestock husbandry training", "Animal health awareness", "Improved livestock management", "Breeding and productivity initiatives", "Poultry and small-livestock projects", "Youth livestock training", "Livestock feed and pasture development", "Value addition", "Market access", "Livestock-based entrepreneurship"],
    goal: "To help families and young people develop livestock into sustainable and productive livelihoods.",
  },
  {
    slug: "economic", icon: "briefcase", title: "Economic Empowerment & Entrepreneurship", subtitle: "Turning Skills Into Opportunities",
    intro: "Education becomes even more powerful when people can use what they have learned to create livelihoods. We support young people, women and families to develop practical economic skills and build sustainable income-generating activities.",
    activities: ["Entrepreneurship training", "Vocational skills", "Small-business development", "Youth enterprise initiatives", "Women's economic empowerment", "Financial literacy", "Savings and community enterprise groups", "Business mentorship", "Market access and value addition", "Employment and income-generating projects"],
    goal: "To help people move from knowledge to skills, skills to opportunity, and opportunity to sustainable income.",
  },
  {
    slug: "youth", icon: "cap", title: "Youth Development & Leadership", subtitle: "Preparing the Next Generation",
    intro: "Young people are not only beneficiaries of development — they are future leaders, entrepreneurs, professionals, farmers, innovators and community builders. Our youth programs equip them with knowledge, confidence, practical skills and opportunities.",
    activities: ["Leadership development", "Mentorship", "Career guidance", "Entrepreneurship", "Vocational skills", "Digital literacy", "Sports and talent development", "Environmental awareness", "Community service", "Innovation and creativity"],
    goal: "To raise a generation that is educated, skilled, confident, responsible and capable of creating opportunities for others.",
  },
  {
    slug: "community", icon: "globe", title: "Community Development & Partnerships", subtitle: "Development Through Collaboration",
    intro: "Lasting change requires collaboration. We bring together communities, local leaders, educational and government institutions, businesses, donors, foundations, volunteers and development partners around practical community priorities.",
    activities: ["Community consultations", "Participatory project planning", "Capacity building", "Community infrastructure", "Partnerships and resource mobilization", "Volunteer programs", "Community awareness campaigns", "Monitoring and evaluation", "Knowledge sharing"],
    goal: "To ensure communities participate in shaping, implementing and sustaining the solutions that affect their future.",
  },
];

// The development cycle (Our Work — integrated approach).
export const cycle = ["Education", "Skills", "Opportunity", "Income", "Empowerment", "Community Transformation"];

// Ways to help (Get Involved + homepage).
export const involve = [
  { icon: "heart", title: "Donate", tagline: "Give a gift that creates opportunity", blurb: "Your contribution helps turn community needs into lasting solutions.", cta: "Donate", href: "/get-involved/#donate" },
  { icon: "hands", title: "Volunteer", tagline: "Give your time. Share your skills.", blurb: "Join us with your knowledge, experience, talents or time and become part of our work on the ground.", cta: "Volunteer", href: "/get-involved/#volunteer" },
  { icon: "users", title: "Partner With Us", tagline: "Let's build something that lasts", blurb: "Partner with us as a company, foundation, institution, organisation or individual to create sustainable community impact.", cta: "Partner with us", href: "/get-involved/#partner" },
  { icon: "sprout", title: "Sponsor a Project", tagline: "Choose a project. Create lasting impact.", blurb: "Support a specific initiative in education, water, healthcare, agriculture, livestock, youth development or economic empowerment.", cta: "Sponsor a project", href: "/get-involved/#sponsor" },
  { icon: "mail", title: "Contact Us", tagline: "Let's start a conversation", blurb: "Have an idea, want to collaborate, or would like to learn more about our work? We'd love to hear from you.", cta: "Contact us", href: "/contact/" },
];

// Donation tiers — EXAMPLE amounts (USD). Edit freely; add TZS if you like.
export const donationTiers = [
  { amount: "$5", period: "/ month", text: "Books, pens and learning materials for a child." },
  { amount: "$15", period: "/ month", text: "A uniform, shoes and supplies to keep a child in class." },
  { amount: "$30", period: "/ month", text: "Sponsor a child's education — fees and essentials." },
  { amount: "$100", period: "one-off", text: "Help build classrooms and learning facilities." },
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
export const fundingSources = ["Membership fees", "Fundraising", "Gifts from friends and supporters", "Grants and donations", "Income-generating activities"];

// Objectives (Profile).
export const objectives = [
  "Promote good, quality education for orphans and vulnerable children",
  "Empower the community with entrepreneurship and livelihood skills",
  "Advocate for environmental conservation",
  "Raise awareness of the rights of children and women",
];

// Gallery images (curated).
const G = "/images/web/gallery";
export const gallery = [
  { src: `${G}/IMG_8212.jpg`, alt: "Children outside the JOWIN Daycare signboard", caption: "JOWIN Learning & Care Center, Usa River" },
  { src: `${G}/IMG_0899.jpg`, alt: "Two smiling pupils with a volunteer", caption: "Joy in every day" },
  { src: `${G}/simanjiro-school.jpg`, alt: "The Ugutu Center building in Simanjiro", caption: "Our center in Simanjiro" },
  { src: `${G}/simanjiro-classroom.jpg`, alt: "A bright classroom at the Ugutu Center", caption: "Inside the Simanjiro classroom" },
  { src: `${G}/simanjiro-class-window.jpg`, alt: "Children learning at the Ugutu Center", caption: "A day in class, Simanjiro" },
  { src: `${G}/simanjiro-reading.jpg`, alt: "Children reading together in Simanjiro", caption: "Reading together" },
  { src: `${G}/simanjiro-kids.jpg`, alt: "Two pupils at the Ugutu Center", caption: "Simanjiro pupils" },
  { src: `${G}/simanjiro-meal.jpg`, alt: "Children sharing a meal at the center", caption: "A warm meal at the center" },
  { src: `${G}/20260114_091049.jpg`, alt: "Pupils in blue uniform at the chalkboard", caption: "Ready to learn" },
  { src: `${G}/IMG_1141.jpg`, alt: "Children learning with tablets in class", caption: "Learning with tablets" },
  { src: `${G}/IMG_2333.jpg`, alt: "Donated uniforms, shoes and stationery", caption: "Uniforms, shoes & supplies" },
  { src: `${G}/IMG_2345.jpg`, alt: "New backpacks for pupils", caption: "New backpacks" },
  { src: `${G}/IMG_8533.jpg`, alt: "A joyful moment with a pupil", caption: "Smiles all round" },
  { src: "/images/web/community.jpg", alt: "Volunteers and children together", caption: "Together" },
];

// Primary navigation.
export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "UCF Centers", href: "/centers/" },
  { label: "Our Work", href: "/our-work/" },
  { label: "Get Involved", href: "/get-involved/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Contact", href: "/contact/" },
];
