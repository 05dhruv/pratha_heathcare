// Central place to edit organisation details, navigation and static page content.

export const site = {
    name: "Pratha Healthcare",
    short: "PH",
    tagline: "Restoring vision. Rebuilding lives. Providing Quality Healthcare.",
    description: "A national-award-winning charitable healthcare organisation devoted for improving the quality of life, disability care, education for specially-abled children and eradication of avoidable blindness.",
    email: "info@prathahealthcare.org",
    phone: "+91 9897203030",
    address: "Moradabad, Uttar Pradesh, India",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    social: [
        { name: "Facebook", href: "https://www.facebook.com/prathahealthcare" },
        { name: "X", href: "https://x.com/PrathaHealth" },
        { name: "Instagram", href: "https://www.instagram.com/prathahealthcare/" },
        { name: "YouTube", href: "https://www.youtube.com/@PrathaHealthcare" },
        { name: "LinkedIn", href: "https://www.linkedin.com/company/prathahealthcare/" },
        { name: "Pinterest", href: "https://in.pinterest.com/prathahealthcare" },
    ],
};

export const defaultSlides = [{
        id: 3,
        title: "Pratha Healthcare is committed to help and rehabilitate the differently-abled",
        image: "/admin/slider/Disability Care.webp",
        link: "/disability-care",
    },
    {
        id: 4,
        title: "Pratha Healthcare Committed to Eradicate the Avoidable Blindness",
        image: "/admin/slider/Eye Care.webp",
        link: "/eyecare",
    },
];

export const defaultStats = [
    { id: 1, label: "Cataract Operation", value: 172755, position: 1 },
    { id: 2, label: "Assistive Devices and Mobility Aids", value: 89906, position: 2 },
];

export const defaultPosts = [{
        id: 13,
        title: "22nd Free Eye Camp Successfully Concludes by Pratha Healthcare, Moradabad, Courtesy of Shri Krishnalal Sharma Charitable Trust, Moradabad",
        excerpt: "Pratha Healthcare Moradabad organised the ending ceremony of the 22nd Free Eye Camp on Punytithi of the late Shri Mayank Sharma.",
        content: "Pratha Healthcare Moradabad organised the ending ceremony of the 22nd Free Eye Camp on Punytithi of the late Shri Mayank Sharma.",
        image: "/admin/blog/31-10-2023/Kachaura Camp.jpg",
        postedAt: "2023-10-31T00:00:00.000Z",
    },
    {
        id: 2,
        title: "Embassy of Japan in India provided Eye Medical Equipment",
        excerpt: "Modern eye machines and equipment have been provided by the Embassy of Japan under the Project for the Provision of Eye Medical Equipment to Pratha Healthcare",
        content: "Modern eye machines and equipment have been provided by the Embassy of Japan under the Project for the Provision of Eye Medical Equipment to Pratha Healthcare",
        image: "/admin/blog/23-08-2022/Kalyanam_Karoti_The_handover_ceremony.webp",
        postedAt: "2022-08-23T00:00:00.000Z",
    },
];

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
};

export const programmes = [
    { title: "Eye Care", text: "Aiming to eradicate curable blindness and providing the best eye care by restoring the gift of vision to communities in need.", href: "/eyecare" },
    { title: "Rehabilitation of the Disabled", text: "Free prosthetic and orthotic services, including assistive devices, for amputees and the disabled.", href: "/disability-care" },
    { title: "Education for Children with Special Needs", text: "Special school for intellectually or developmentally disabled, hearing-impaired and visually impaired children.", href: "/sambal-special-school" },
    { title: "Outreach for Rural Health", text: "A mobile healthcare system delivering care to marginalised communities in remote villages.", href: "/outreach-services" },
];

export const endeavors = [
    { title: "Eye Care", href: "/eyecare", image: "/assets/img/projects/Eye_Care.webp" },
    { title: "Disability Care", href: "/disability-care", image: "/assets/img/projects/Rehabilitation_Center.webp" },
];

export const objectives = [
    "Explore easily adoptable methods to reduce the causes of blindness and extend service and security to vulnerable and marginalised communities.",
    "Awaken social consciousness to provide social and psychological assistance to the needy, and rehabilitation and treatment for destitute people in every segment of disability.",
    "Operate schools, training and wellness centres for children with special needs, empowering them with education and vocational training.",
    "Operate hospitals that provide eye care, hearing and speech care and disability care to the poor.",
    "Enable differently-abled and older people to strengthen the social, economic and political life of their communities.",
];

export const blessings = [
    { name: "Kanchi Kamakoti Pithadhishvar Jagadguru Swami Jayendra Saraswati Ji Maharaj", image: "/assets/img/Blessings/1.webp" },
    { name: "Swami Shri Akhandanand Saraswati Ji Maharaj", image: "/assets/img/Blessings/2.webp" },
    { name: "Sant Shri Morari Bapu Ji", image: "/assets/img/Blessings/3.webp" },
    { name: "Swami Shri Gurusharananad Ji Maharaj", image: "/assets/img/Blessings/4.webp" },
    { name: "Shri Nritya Gopaldas Ji Maharaj", image: "/assets/img/Blessings/5.webp" },
    { name: "Shri Pundrik Goswami Ji Maharaj", image: "/assets/img/Blessings/6.webp" },
    { name: "Shri Satyanarayan Reddy, Governor, Uttar Pradesh", image: "/assets/img/Blessings/7.webp" },
    { name: "Shri Surajbhan, Governor, Uttar Pradesh", image: "/assets/img/Blessings/8.webp" },
    { name: "Shri Motilal Vora, Governor, Uttar Pradesh", image: "/assets/img/Blessings/9.webp" },
    { name: "General VK Singh, Minister of State for External Affairs", image: "/assets/img/Blessings/10.webp" },
    { name: "Shri Ravikant, Vice Chairman of Tata Motors", image: "/assets/img/Blessings/11.webp" },
    { name: "WVK Krishna Shankar Director, BHEL", image: "/assets/img/Blessings/12.webp" },
    { name: "Prof. Durg Singh Chauhan, Vice Chancellor, GLA University", image: "/assets/img/Blessings/13.webp" },
    { name: "Shri Raj Babbar, Actor & Politician", image: "/assets/img/Blessings/14.webp" },
];

export const awards = [
    { year: "", title: "National Award for the Empowerment of Persons with Disabilities", by: "Ministry of Social Justice and Empowerment, Government of India" },
];