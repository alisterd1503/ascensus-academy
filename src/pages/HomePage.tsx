import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Tutors from "../components/Tutors";
import CTA from "../components/CTA";
import UsePageMeta from "../hooks/UsePageMeta";

const HomePage: React.FC = () => {
  UsePageMeta({
    title: "Ascensus Academy – A-Level Tutoring by Top University Students",
    description: "Premium A* tutoring by top UK university students. Personalised mentoring, vetted tutors, 1-to-1 online lessons, and tailored academic support.",
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
