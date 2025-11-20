import { Award, UserCheck, Users, Puzzle } from 'lucide-react';
import { NavItem, Tutor, Feature, Subjects, Pricing, Contact } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '/#services' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Subjects', href: '/subjects' },
  { label: 'Med Workshop', href: '/med-workshop' },
  { label: 'Tutors', href: '/#tutors' },
  { label: 'Apply', href: '/apply' },
  { label: 'Contact', href: '/contact-us' },
];

export const TUTORS: Tutor[] = [
  {
    id: 'seion',
    name: 'Seion',
    university: 'University of Warwick',
    course: 'Physics',
    image: '/uploads/tutors/seion.webp',
    bio: 'Seion is a clear-thinking, structured tutor studying Physics at the University of Warwick. <b>He </b><b>achieved A*A*A*A at A-Levels</b> and scored <b>1st in his cohort for both A-level Physics and Mathematics.</b> He brings a clear, step-by-step teaching style that helps students master even the most challenging topics. Providing a structured yet friendly approach, Seion focuses on breaking down challenging concepts into clear, manageable steps, whilst building deep understanding in his students.',
    subjects: ['Physics', 'Mathematics', 'Further Maths']
  },
  {
    id: 'sabrina',
    name: 'Sabrina',
    university: 'Imperial College London',
    course: 'Medicine',
    image: '/uploads/tutors/sabrina.webp',
    bio: 'Sabrina is a calm, patient, and encouraging tutor studying Medicine at Imperial College London. Known for her clarity and steady approach, she helps students feel at ease with even the trickiest topics. <b>Achieving A*AAA at A-level</b> and having a <b>strong background in Biology</b>, Sabrina supports her students in building confidence, developing consistency, and making meaningful academic progress - one step at a time.',
    subjects: ['Biology']
  },
  {
    id: 'dilan',
    name: 'Dilan',
    university: 'University of Warwick',
    course: 'MORSE',
    image: '/uploads/tutors/dilan.webp',
    bio: 'Dilan studies MORSE (Mathematics, Operational Research, Statistics &amp; Economics) at the University of Warwick - a degree that reflects his sharp quantitative skills and love for problem-solving. <b>Achieving A*A*A* in Maths, Further Maths, and Physics</b>, he brings a methodical and example-led approach to tutoring. He helps students understand the ‘why’ behind the method and apply it confidently in high-pressure exam settings.',
    subjects: ['Maths', 'Further Maths', 'Physics', 'Economics']
  }
];

export const FEATURES: Feature[] = [
  {
    title: 'Only A* Tutors',
    description: 'We are a team of <b>A* achievers</b>, stemming from the most prestigious institutions across the UK such as <b>LSE</b> and <b>Imperial College London</b>.',
    image: "/uploads/usp/astar-tutors.webp"
  },
  {
    title: 'Free Mentoring',
    description: 'Every student is paired with a <b>dedicated mentor</b> at <b>no extra cost</b>. This includes guidance on subject choices and university applications.',
    image: "/uploads/usp/free-mentoring.webp"
  },
  {
    title: 'Vetted Mentors',
    description: 'Every tutor at Ascensus Academy has been <b>DBS checked</b> and <b>ID verified</b>, so you can feel confident about who’s teaching your child.',
    image: "/uploads/usp/vetted-mentors.webp"
  },
  {
    title: 'Tailored 1-to-1 Lessons',
    description: 'Our <b>1-1 sessions</b> are online and personalised, giving students focused support that adapts to their individual needs.',
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