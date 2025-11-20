import { Award, UserCheck, Users, Puzzle } from 'lucide-react';
import { NavItem, Tutor, Feature } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Subjects', href: '#subjects' },
  { label: 'Med Workshop', href: '#workshop' },
  { label: 'Tutors', href: '#tutors' },
  { label: 'Apply', href: '#apply' },
  { label: 'Contact', href: '#contact' },
];

export const TUTORS: Tutor[] = [
  {
    id: 'seion',
    name: 'Seion',
    university: 'University of Warwick',
    course: 'Physics',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop', // Placeholder resembling the user
    achievements: 'Achieved A*A*A* at A-Levels',
    bio: 'Seion is a clear-thinking, structured tutor studying Physics at the University of Warwick. He scored 1st in his cohort for both A-level Physics and Mathematics. He brings a clear, step-by-step teaching style that helps students master even the most challenging topics.',
    subjects: ['Physics', 'Mathematics', 'Further Maths']
  },
  {
    id: 'sabrina',
    name: 'Sabrina',
    university: 'Imperial College London',
    course: 'Medicine',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop', // Placeholder
    achievements: 'Achieved A*AAA at A-level',
    bio: 'Sabrina is a calm, patient, and encouraging tutor studying Medicine at Imperial. Known for her clarity and steady approach, she helps students feel at ease with even the trickiest topics. She supports her students in building confidence and developing consistency.',
    subjects: ['Biology', 'Chemistry']
  },
  {
    id: 'dilan',
    name: 'Dilan',
    university: 'University of Warwick',
    course: 'MORSE (Maths, OR, Stats, Econ)',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop', // Placeholder
    achievements: 'Achieved A*A*A* in Maths, FM & Physics',
    bio: 'Dilan studies MORSE at Warwick. He brings a methodical and example-led approach to tutoring. He helps students understand the "why" behind the method and apply it confidently in high-pressure exam settings.',
    subjects: ['Maths', 'Further Maths', 'Physics', 'Economics']
  }
];

export const FEATURES: Feature[] = [
  {
    title: 'Only A* Tutors',
    description: 'We are a team of A* achievers, stemming from the most prestigious institutions across the UK such as LSE and Imperial College London.',
    icon: Award
  },
  {
    title: 'Free Mentoring',
    description: 'Every student is paired with a dedicated mentor at no extra cost. This includes guidance on subject choices and university applications.',
    icon: Users
  },
  {
    title: 'Vetted Mentors',
    description: 'Every tutor at Ascensus Academy has been DBS checked and ID verified, so you can feel confident about who’s teaching your child.',
    icon: UserCheck
  },
  {
    title: 'Tailored 1-to-1 Lessons',
    description: 'Our 1-1 sessions are online and personalised, giving students focused support that adapts to their individual needs.',
    icon: Puzzle
  }
];
