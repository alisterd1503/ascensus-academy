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
  achievements: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}