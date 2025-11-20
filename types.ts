import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Tutor {
  id: string;
  name: string;
  university: string;
  course: string;
  image: string;
  bio: string;
  subjects: string[];
}

export interface Feature {
  title: string;
  description: string;
  image: string;
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