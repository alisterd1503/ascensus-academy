import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import PageHeader from "../components/PageHeader";
import SubjectList from "../components/SubjectList";
import PriceCard from "../components/PriceCard";
import { Reveal } from "../components/Reveal";
import UsePageMeta from "../hooks/UsePageMeta";
import { getQualifications } from "../lib/queries"; 
import { QualificationSection } from "../types";

const SubjectsPage: React.FC = () => {
  const [qualificationsSection, setQualificationsSection] = useState<QualificationSection | null>(null);

  UsePageMeta({
    title: "Subjects & Tutoring – Ascensus Academy",
    description: "Explore Ascensus Academy's tutoring for GCSE and A-Level students in Biology, Chemistry, Physics, Maths, Further Maths, and Economics. Tailored lessons, mentorship, and exam preparation to help students succeed.",
    url: "https://ascensusacademy.com/subjects",
    image: "/uploads/ascensus-academy.jpg",
  });

  useEffect(() => {
    getQualifications().then(setQualificationsSection);
  }, []);

  if (!qualificationsSection) return null;

  return (
    <MainLayout>
      {/* Page Header */}
      <PageHeader title={qualificationsSection.heading} />

      {/* Subject list */}
      <Reveal>
        <SubjectList />
      </Reveal>

      {/* Pricing Section */}
      <Reveal>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{qualificationsSection.heading}</h2>
              <p className="text-md md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {qualificationsSection.subheading}
              </p>
              <p className="text-md md:text-xl text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed md:font-medium">
                {qualificationsSection.description}
              </p>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {qualificationsSection.qualifications.map((qualification, index) => (
                <PriceCard key={qualification._key || index} item={qualification} />
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </MainLayout>
  );
};

export default SubjectsPage;
