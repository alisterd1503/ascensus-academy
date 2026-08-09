export interface NavItem {
  label: string;
  href: string;
  preserveCase?: boolean;
  tag?: string;
}

export interface HomeHero {
  welcomeText: string;
  title: string;
  tagline: string;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
  image: string;
}

export interface HomeStory {
  title: string;
  text: string;
  buttonLabel: string;
  image: string;
}

export interface HomeModel {
  heading: string;
  quote: string;
}

export interface HomeCTA {
  title: string;
  text: string;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
}

export interface HomePage {
  hero: HomeHero;
  story: HomeStory;
  model: HomeModel;
  cta: HomeCTA;
}

export interface AboutUs {
  title: string;
  text: string;
  secondaryTitle: string;
  points: string[];
  secondaryText: string;
  image: string;
}

export interface AboutJourney {
  title: string;
  text: string;
  image: string;
}

export interface AboutPage {
  title: string;
  aboutUs: AboutUs;
  aboutJourney: AboutJourney;
}

export interface Founder {
  _key?: string;
  name: string;
  title: string;
  image?: string;
  bio: string;
  subjects: string[];
}

export interface FounderSection {
  title: string;
  subtitle: string;
  founders: Founder[];
}

export interface Tutor {
  _key?: string;
  name: string;
  university: string;
  course: string;
  image?: any;
  bio: string;
  subjects: string[];
}

export interface TutorSection {
  title: string;
  subtitle: string;
  tutors: Tutor[];
}

export interface Feature {
  title: string;
  description: string;
  image: string;
}

export interface FeatureSection {
  title: string;
  features: Feature[];
}

export interface Subjects {
  subject: string;
  image: string;
}

export interface Pricing {
  title: string;
  price: string;
  points: string[];
  secondaryTitle?: string;
  secondaryPoints?: string[];
}

export interface Contact {
  title: string;
  description: string;
  email: string;
}

export interface EmailJS {
  serviceId: string;
  templateId: string;
  publicKey: string;
}