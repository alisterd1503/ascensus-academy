import { NavItem, Tutor, Subjects, Pricing, Contact, EmailJS, Founder, HomePage, AboutPage, FeatureSection } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About Us', href: '/about-us', preserveCase: false },
  { label: 'Med Workshop', href: '/med-workshop', preserveCase: false, tag: 'New' },
  { label: 'Subjects & Pricing', href: '/subjects', preserveCase: false },
  { label: 'Sign Up', href: '/sign-up', preserveCase: false },
  { label: 'Contact', href: '/contact-us', preserveCase: false },
  { label: 'Join The Team', href: '/join-us', preserveCase: false },
];

export const HOMEPAGE: HomePage = {
  hero: {
    welcomeText: 'Welcome to',
    title: 'Ascensus Academy',
    tagline: 'For Students, By Students.',
    primaryButtonLabel: 'View Our Services',
    secondaryButtonLabel: 'Meet the Team',
    image: '/uploads/index-hero.webp',
  },
  story: {
    title: 'Our Story',
    text: "Ascensus Academy was founded to <span class='font-medium text-primary'>revolutionise</span> the future of tutoring. We believe the traditional education system needs an upgrade. That is why we only hire undergraduate tutors who have personally achieved an <span class='font-medium text-primary'>A* at A-level in the subject</span> they teach.</br></br>Here, every student is paired with a <span class='font-medium text-primary'>personalised mentor</span>: a high achieving university student studying a similar course pathway.",
    buttonLabel: 'Learn More About Us',
    image: '/uploads/our-story.webp',
  },
  model: {
    heading: 'Our model is simple:',
    quote: '"If you want your child to succeed, connect them with someone who already has."',
  },
  cta: {
    title: 'Sign up for a free consultation call!',
    text: 'Start your journey to academic excellence today with a mentor who has walked the path before you.',
    primaryButtonLabel: 'Sign Up',
    secondaryButtonLabel: 'Contact Us',
  },
}

export const ABOUTPAGE: AboutPage = {
  title: 'About Us',
  aboutUs: {
    title: 'Who are we?',
    text: "Ascensus Academy was founded to <b>revolutionise</b> the future of tutoring. We believe the traditional education system needs an upgrade.",
    secondaryTitle: 'What sets our tutors apart?',
    points: [
      "They have <b>recently</b> been through the <b>same exams</b> themselves.",
      "They have <b>first-hand insight</b> into the demands, pressures and challenges that students face today.",
      "They bring<b> personalised and proven strategies</b> that actually work in today’s education system."
    ],
    secondaryText: "That’s why we only hire undergraduate tutors who have <b>personally achieved an A* at A-level</b> in the subject they teach. They’ve not only been through the system recently; <b>they’ve mastered it.</b>",
    image: '/uploads/who-are-we.webp',
  },
  aboutJourney: {
    title: 'Our Journey',
    text: "This mentorship programme was born out of a <b>shared vision</b> to support students in navigating academic challenges, career choices, and personal growth.<br /><br />Having personally experienced the struggles of balancing studies, ambitions, and wellbeing, the founders wanted to create a <b>supportive and structured platform</b> that empowers others to thrive.<br /><br />Over time, the founders have reflected the <b>power of mentorship</b> in shaping confidence, resilience, and direction. While the programme began with personal experiences, it has since grown into a wider community effort - one that connects students with guidance, resources, and opportunity.<br /><br />The aim of Ascensus Academy is not just to mentor, but to build a <b>culture of support</b> that continues long after each individual’s journey with us.",
    image: '/uploads/our-journey.webp',
  },
} 

export const FOUNDERS: Founder[] = [
  {
    id: 'austin',
    name: 'Austin Jiji',
    title: 'Incoming Level 7 Degree Apprentice with PwC (Chartered Accountancy)',
    image: '/uploads/tutors/austin.webp',
    bio: "Austin achieved <span class='font-semibold'>A<sup>*</sup>AB at A-Level in Economics, Mathematics, and Physics</span>, ranking <span class='font-semibold'>1st in his cohort for Economics.</span> He is an incoming Degree Apprentice in Chartered Accountancy with PwC and the University of Nottingham, starting in September 2026, bringing a structured, results-driven approach shaped by both academic and professional experience.",
    subjects: ['Economics']
  },
  {
    id: 'noel',
    name: 'Noel Chacko',
    title: 'Medical Student at the University of Birmingham',
    image: '/uploads/tutors/noel.webp',
    bio: "Noel achieved <span class='font-semibold'>A<sup>*</sup>AA at A-Level in Biology, Chemistry, and Mathematics</span>, ranking <span class='font-semibold'>1st in his cohort for Biology</span>. He is a second-year Medical student at the University of Birmingham, with a strong academic foundation and a precise, methodical approach to learning.",
    subjects: ['Biology']
  },
]

export const TUTORS: Tutor[] = [
  {
    id: 'seion',
    name: 'Seion',
    university: 'University of Warwick',
    course: 'Physics',
    image: '/uploads/tutors/seion.webp',
    bio: "Seion is a clear-thinking, structured tutor studying Physics at the University of Warwick. <span class='font-semibold'>He achieved A<sup>*</sup>A<sup>*</sup>A<sup>*</sup>A at A-Levels</span> and scored <span class='font-semibold'>1st in his cohort for both A-level Physics and Mathematics.</span> He brings a clear, step-by-step teaching style that helps students master even the most challenging topics. Providing a structured yet friendly approach, Seion focuses on breaking down challenging concepts into clear, manageable steps, whilst building deep understanding in his students.",
    subjects: ['Physics', 'Mathematics', 'Further Maths']
  },
  {
    id: 'sabrina',
    name: 'Sabrina',
    university: 'Imperial College London',
    course: 'Medicine',
    image: '/uploads/tutors/sabrina.webp',
    bio: "Sabrina is a calm, patient, and encouraging tutor studying Medicine at Imperial College London. Known for her clarity and steady approach, she helps students feel at ease with even the trickiest topics. <span class='font-semibold'>Achieving A<sup>*</sup>AAA at A-level</span> and having a <span class='font-semibold'>strong background in Biology</span>, Sabrina supports her students in building confidence, developing consistency, and making meaningful academic progress - one step at a time.",
    subjects: ['Biology']
  },
  {
    id: 'jeff',
    name: 'Jeff',
    university: 'University of Birmingham',
    course: 'Medicine',
    image: '/uploads/tutors/jeff.webp',
    bio: "Jeff is a dedicated, methodical tutor studying Medicine at the University of Birmingham. Achieving <span class='font-semibold'>A<sup>*</sup>A<sup>*</sup>A in Biology, Chemistry, and Mathematics</span>, he brings a strong scientific foundation and a calm, structured approach to his teaching. He helps students break down complex concepts with clarity, building confidence through step-by-step explanations and practical exam strategies. Jeff’s supportive style helps students develop consistency and achieve tangible progress across even the most demanding topics.",
    subjects: ['Biology', 'Chemistry']
  },
  {
    id: 'shainuja',
    name: 'Shainuja',
    university: 'Imperial College London',
    course: 'Medicine',
    image: '/uploads/tutors/shainuja.webp',
    bio: "Shainuja is a patient, results-driven tutor studying Medicine at Imperial College London. She achieved <span class='font-semibold'>A<sup>*</sup>A<sup>*</sup>AA in Chemistry, Mathematics, Biology, and Further Maths</span>, placing her among the top of her cohort in quantitative and scientific subjects. She combines a gentle teaching manner with rigorous academic discipline, helping students grasp difficult material through clear frameworks, worked examples, and steady reinforcement. Shainuja focuses on confidence-building and long-term retention, guiding students to excel in both understanding and exam performance.",
    subjects: ['Chemistry', 'Maths']
  },
  {
    id: 'sajana',
    name: 'Sajana',
    university: 'University of Bath',
    course: 'Aerospace Engineering',
    image: '/uploads/tutors/sajana.webp',
    bio: "Sajana is an analytical, forward-thinking tutor studying Aerospace Engineering at the University of Bath. With <span class='font-semibold'>A<sup>*</sup>A<sup>*</sup>A<sup>*</sup> in Mathematics, Physics, and Design Technology</span>, he brings a strong technical background and a passion for problem-solving. His teaching style blends logical breakdowns with real-world application, making abstract concepts intuitive and engaging. He supports students by simplifying challenging topics into manageable steps and encouraging structured thinking, essential skills for high-level STEM success.",
    subjects: ['Physics', 'Maths']
  },
  {
    id: 'felix',
    name: 'Felix',
    university: 'University College London',
    course: 'Economics',
    image: '/uploads/tutors/felix.webp',
    bio: "Felix is a clear-thinking and structured tutor studying Economics at UCL. <span class='font-semibold'>He achieved A<sup>*</sup>A<sup>*</sup>AA in Mathematics, Physics, Economics, and Further Mathematics.</span> He brings a logical, step-by-step approach to teaching, helping students break down complex concepts into manageable steps. Felix focuses on building strong fundamentals and exam confidence, enabling students to make consistent progress.",
    subjects: ['Maths', 'Physics']
  },
  {
    id: 'azam',
    name: 'Azam',
    university: 'University of Warwick',
    course: 'Physics',
    image: '/uploads/tutors/azam.webp',
    bio: "Azam is a dedicated and methodical tutor studying Physics at the University of Warwick.<span class='font-semibold'> He achieved A<sup>*</sup>A<sup>*</sup>A<sup>*</sup> at A-Level in Mathematics, Physics, and Biology.</span> With a calm and structured approach, Azam simplifies challenging topics and supports students in building confidence and precision. He focuses on clear understanding and consistent progress across all areas.",
    subjects: ['Maths','Physics','Biology']
  },
];

export const FEATURESSECTION: FeatureSection = {
  title: 'What We Offer',
  features: [
    {
      title: 'Only A* Tutors',
      description: "We are a team of <span class='font-semibold'>A<sup>*</sup> achievers</span>, stemming from the most prestigious institutions across the UK such as <span class='font-semibold'>LSE</span> and <span class='font-bold'>Imperial College London</span>.",
      image: "/uploads/usp/astar-tutors.webp"
    },
    {
      title: 'Free Mentoring',
      description: "Every student is paired with a <span class='font-semibold'>dedicated mentor</span> at <span class='font-semibold'>no extra cost</span>. This includes guidance on subject choices and university applications.",
      image: "/uploads/usp/free-mentoring.webp"
    },
    {
      title: 'Vetted Mentors',
      description: "Every tutor at Ascensus Academy has been <span class='font-semibold'>DBS checked</span> and <span class='font-semibold'>ID verified</span>, so you can feel confident about who’s teaching your child.",
      image: "/uploads/usp/vetted-mentors.webp"
    },
    {
      title: 'Tailored 1-to-1 Lessons',
      description: "Our <span class='font-semibold'>1-to-1 sessions</span> are online and personalised, giving students focused support that adapts to their individual needs.",
      image: "/uploads/usp/tailored-lessons.webp"
    }
  ]
}

export const SUBJECTS: Subjects[] = [
  {
    subject: "Biology",
    image: "/uploads/subjects/biology.webp",
  },
  {
    subject: "Chemistry",
    image: "/uploads/subjects/chemistry.webp",
  },
  {
    subject: "Physics",
    image: "/uploads/subjects/physics.webp",
  },
  {
    subject: "Maths",
    image: "/uploads/subjects/math.webp",
  },
  {
    subject: "Further Maths",
    image: "/uploads/subjects/further-maths.webp",
  },
  {
    subject: "Economics",
    image: "/uploads/subjects/economics.webp",
  },
  {
    subject: "Business",
    image: "/uploads/subjects/business.webp",
  },
  {
    subject: "English Literature",
    image: "/uploads/subjects/english-lit.webp",
  },
  {
    subject: "English Language",
    image: "/uploads/subjects/english-lan.webp",
  },
  {
    subject: "History",
    image: "/uploads/subjects/history.webp",
  },
  {
    subject: "Psychology",
    image: "/uploads/subjects/psychology.webp",
  }
];

export const PRICING: Pricing[] = [
  {
    title: "A-Level",
    price: "£36/hour",
    points: [
      "Expert tutor with deep knowledge of the A-Level curriculum.",
      "Lessons tailored to individual learning styles to maximise understanding.",
      "Exam technique coaching to build confidence and boost performance.",
    ],
    secondaryTitle: "Included mentorship",
    secondaryPoints: [
      "Guidance for UCAS and Degree Apprenticeship applications.",
      "Support with university entrance exams, personal statements, assessment centres and more!",
      "Interview preparation and academic enrichment advice.",
    ],
  },
  {
    title: "GCSE",
    price: "£24/hour",
    points: [
      "Experienced tutor with a passion for helping students succeed.",
      "Specialises in making complex topics understandable and engaging.",
      "Focuses on building confidence and study skills alongside subject knowledge.",
    ],
    secondaryTitle: "Included mentorship",
    secondaryPoints: [
      "Free personalised guidance on A-Level subject choices.",
      "Early career insights and pathways.",
      "Advice on building strong academic habits before sixth form.",
    ],
  },
];

export const MED_WORKSHOP: Pricing = {
  title: "Medicine Workshop",
  price: "£34",
  points: [
    "Delivered by medics with a <b>100% interview success rate</b> across MMI and Oxbridge formats.",
    "Includes a 1-to-1 mock for <b>MMI or Oxbridge</b> interviews up to 90 minutes.",
    "<b>Personalised</b>, detailed feedback on structure, communication, and reasoning provided.",
    "Proven <b>techniques, frameworks, and strategies</b> used by successful applicants.",
    "Comes with a <b>FREE</b> interview notes PDF collated by our team."
  ],
}

export const CONTACT: Contact = {
    title: "General Queries",
    description:
      "For all your general questions about our tutoring services, scheduling, or policies, please reach out to us at",
    email: "contact@ascensusacademy.com",
}

export const EMAILJS: EmailJS = {
  serviceId: "service_qk3z7ry",
  templateId: "template_prycer9",
  publicKey: "e3K5prMTEGo3mj5h0",
}
