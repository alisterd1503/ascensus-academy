import React from "react";
import MainLayout from "../layouts/MainLayout";
import PageHeader from "../components/PageHeader";
import SubjectList from "../components/SubjectList";
import { PRICING } from "../constants";
import PriceCard from "../components/PriceCard";
import { Reveal } from "../components/Reveal";
import usePageMeta from "../hooks/UsePageMeta";

const SubjectsPage: React.FC = () => {
  usePageMeta({
    title: "About Ascensus Academy – Our Tutors, Mentorship & Mission",
    description: "Discover Ascensus Academy's mission, our expert A* tutors, and the personalised mentorship approach that empowers students to succeed in today’s education system.",
    url: "https://ascensusacademy.com/subjects",
    image: "/uploads/social-about-us.png",
  });
  return (
    <MainLayout>
      {/* Page Header */}
      <PageHeader title="Subjects" />

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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Choose the qualification level that suits your needs.
              </p>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed font-medium">
                Both GCSE and A-Level students receive the same high-quality tutoring, the only difference
                is the tailored mentorship included for each stage.
              </p>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {PRICING.map((price, index) => (
                <PriceCard key={index} item={price} />
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </MainLayout>
  );
};

export default SubjectsPage;
