import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Tutors from "../components/Tutors";
import CTA from "../components/CTA";

const HomePage: React.FC = () => {
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
