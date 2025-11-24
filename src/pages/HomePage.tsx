import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Tutors from "../components/Tutors";
import CTA from "../components/CTA";import UsePageMeta from "../hooks/UsePageMeta";
;

const HomePage: React.FC = () => {
  UsePageMeta({
    title: "About Ascensus Academy – Our Tutors, Mentorship & Mission",
    description: "Discover Ascensus Academy's mission, our expert A* tutors, and the personalised mentorship approach that empowers students to succeed in today’s education system.",
    url: "https://ascensusacademy.com/",
    image: "/uploads/social-about-us.png",
  });
  
  return (
    <MainLayout>
      <Hero />
      <About />
      <Features />
      <Tutors />
      <CTA />
    </MainLayout>
  );
};

export default HomePage;
