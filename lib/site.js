// Central place to edit organisation details, navigation and static page content.

export const site = {
  name: "Kalyanam Karoti",
  short: "KK",
  tagline: "Restoring vision. Rebuilding lives. Since 1981.",
  description:
    "A national-award-winning charitable organisation in Mathura working for people with disabilities, specially-abled children and the eradication of avoidable blindness.",
  email: "kalyanamkarotimathura@gmail.com",
  phone: "+91 9897203030",
  address: "Mathura, Uttar Pradesh, India",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  social: [
    { name: "Facebook", href: "https://www.facebook.com/kalyanamkaroti" },
    { name: "X", href: "https://x.com/KalyanamKaroti" },
    { name: "Instagram", href: "https://www.instagram.com/kalyanamkaroti/" },
    { name: "YouTube", href: "https://www.youtube.com/@KalyanamKaroti" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/kalyanamkaroti/" },
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Impact Report", href: "/impact" },
      { label: "Honors and Awards", href: "/honors-and-awards" },
      { label: "Notifications", href: "/notifications" },
    ],
  },
  {
    label: "Our Services",
    href: "#",
    children: [
      { label: "Disability Care", href: "/disability-care" },
      { label: "Eye Care", href: "/eyecare" },
      { label: "Sambal Special School", href: "/sambal-special-school" },
      { label: "Outreach Services", href: "/outreach-services" },
      { label: "Physio Care", href: "/physio-care" },
      { label: "Screening Center", href: "/screening-center" },
      { label: "New Super Specialty Eye Hospital", href: "/kalyanam-karoti-eye-institute" },
    ],
  },
  {
    label: "Media",
    href: "#",
    children: [
      { label: "Image Gallery", href: "/image-gallery" },
      { label: "Video Gallery", href: "/video-gallery" },
      { label: "News", href: "/blog" },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];

// Service / programme pages, rendered by app/[slug]/page.jsx
export const services = {
  eyecare: {
    title: "Eye Care",
    lead: "Aiming to eradicate curable blindness by restoring the gift of vision to communities in need.",
    image: "",
    body: [
      "Our base hospital provides free and subsidised cataract surgery, glaucoma care, retina screening and paediatric eye care to patients who have no other access to eye health facilities.",
      "Village-level awareness and screening camps bring patients to the hospital, where surgery, medicines, spectacles and follow-up are provided.",
    ],
    points: ["Free cataract surgeries", "Eye bank and corneal transplant support", "Spectacles and follow-up care", "School eye screening"],
  },
  "disability-care": {
    title: "Disability Care",
    lead: "Free prosthetic and orthotic services, including assistive devices, for amputees and the disabled.",
    image: "",
    body: [
      "Our artificial limbs manufacturing and rehabilitation centre fits customised prosthetics, callipers and mobility aids so that people can return to work and family life with dignity.",
    ],
    points: ["Artificial limbs and callipers", "Wheelchairs and tricycles", "Corrective surgery support", "Rehabilitation counselling"],
  },
  "sambal-special-school": {
    title: "Sambal Special School",
    lead: "Education for children with special needs: intellectual and developmental disabilities, hearing and visual impairment.",
    image: "",
    body: [
      "Sambal provides free education, vocational training, physiotherapy, occupational therapy and speech therapy to children with special needs, using individually planned teaching methods.",
    ],
    points: ["Special education", "Vocational training", "Speech and hearing therapy", "Parent counselling"],
  },
  "outreach-services": {
    title: "Outreach Services",
    lead: "A mobile healthcare system serving marginalised communities in remote villages.",
    image: "",
    body: [
      "Netra Sachal, our mobile eye-care unit, travels through districts of western Uttar Pradesh to test eyes, identify cataract patients and bring them safely to the hospital for surgery.",
    ],
    points: ["Mobile eye testing vans", "Village screening camps", "Patient transport for surgery", "Community health awareness"],
  },
  "physio-care": {
    title: "Physio Care",
    lead: "Physiotherapy and occupational therapy centre in Mathura.",
    image: "",
    body: [
      "Trained therapists support children and adults with neurological, orthopaedic and developmental conditions through affordable, regular therapy sessions.",
    ],
    points: ["Physiotherapy", "Occupational therapy", "Home-exercise guidance", "Therapy for special-school students"],
  },
  "screening-center": {
    title: "Screening Center",
    lead: "Audiometry, speech therapy and early screening for hearing and speech impairment.",
    image: "",
    body: [
      "Early identification changes outcomes. The centre offers hearing assessments, hearing-aid guidance and speech therapy for infants, children and adults.",
    ],
    points: ["Audiometry", "Speech therapy", "Hearing-aid guidance", "Early-intervention screening"],
  },
  "kalyanam-karoti-eye-institute": {
    title: "Kalyanam Karoti Eye Institute",
    lead: "Our new super-specialty eye hospital in Mathura.",
    image: "",
    body: [
      "The Eye Institute extends our base hospital with super-specialty departments, modern operation theatres and training facilities. Replace this text with the latest project details.",
    ],
    points: ["Super-specialty clinics", "Modern operation theatres", "Training and research", "Eye bank"],
  },
};

export const programmes = [
  { title: "Eye Care", text: "Aiming to eradicate curable blindness and providing the best eye care by restoring the gift of vision to communities in need.", href: "/eyecare" },
  { title: "Rehabilitation of the Disabled", text: "Free prosthetic and orthotic services, including assistive devices, for amputees and the disabled.", href: "/disability-care" },
  { title: "Education for Children with Special Needs", text: "Special school for intellectually or developmentally disabled, hearing-impaired and visually impaired children.", href: "/sambal-special-school" },
  { title: "Outreach for Rural Health", text: "A mobile healthcare system delivering care to marginalised communities in remote villages.", href: "/outreach-services" },
];

export const endeavors = [
  { title: "Eye Care", href: "/eyecare", image: "" },
  { title: "Disability Care", href: "/disability-care", image: "" },
  { title: "Special Child Care", href: "/sambal-special-school", image: "" },
  { title: "Netra Sachal", href: "/outreach-services", image: "" },
  { title: "Physio Care", href: "/physio-care", image: "" },
  { title: "Hearing & Speech", href: "/screening-center", image: "" },
];

export const objectives = [
  "Explore easily adoptable methods to reduce the causes of blindness and extend service and security to vulnerable and marginalised communities.",
  "Awaken social consciousness to provide social and psychological assistance to the needy, and rehabilitation and treatment for destitute people in every segment of disability.",
  "Operate schools, training and wellness centres for children with special needs, empowering them with education and vocational training.",
  "Operate hospitals that provide eye care, hearing and speech care and disability care to the poor.",
  "Enable differently-abled and older people to strengthen the social, economic and political life of their communities.",
];

export const blessings = [
  "Kanchi Kamakoti Pithadhishvar Jagadguru",
  "Swami Shri Akhandanand Saraswati",
  "Sant Shri Morari Bapu",
  "Swami Shri Gurusharananad",
  "Shri Nritya Gopaldas",
  "Shri Pundrik Goswami",
];

export const awards = [
  { year: "", title: "National Award for the Empowerment of Persons with Disabilities", by: "Ministry of Social Justice and Empowerment, Government of India" },
];
