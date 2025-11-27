import { NavItem, Tutor, Feature, Subjects, Pricing, Contact, EmailJS } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About Us', href: '/about-us', preserveCase: false },
  { label: 'Med Workshop', href: '/med-workshop', preserveCase: false, tag: 'New' },
  { label: 'Subjects & Pricing', href: '/subjects', preserveCase: false },
  { label: 'Sign Up', href: '/sign-up', preserveCase: false },
  { label: 'Contact', href: '/contact-us', preserveCase: false },
  { label: 'Join The Team', href: '/join-us', preserveCase: false },
];

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
    subjects: ['Chemistry', 'Maths']
  },
];

export const FEATURES: Feature[] = [
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
];

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
