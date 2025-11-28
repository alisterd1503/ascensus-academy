import React, { useEffect, useRef } from "react";
import MainLayout from "../layouts/MainLayout";
import PageHeader from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import UsePageMeta from "../hooks/UsePageMeta";

const JoinPage: React.FC = () => {
  const scriptContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scriptContainer.current) return;

    // Prevent multiple scripts (React 18 StrictMode)
    if (scriptContainer.current.childElementCount === 0) {
      const script = document.createElement("script");
      script.src =
        "https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9wZG5KZyIsIldlYnNpdGVJRCI6Indic181MlZKYyIsIldlYnNpdGVCbG9ja0lEIjoid2JiX1FMZmZKcyJ9";
      script.async = true;
      scriptContainer.current.appendChild(script);
    }
  }, []);

  UsePageMeta({
    title: "Join The Team – Become a Tutor at Ascensus Academy",
    description: "Apply to become a tutor at Ascensus Academy. Join our team of high-achieving A* tutors and help guide students with personalised mentorship and expert tuition.",
    url: "https://ascensusacademy.com/join-us",
    image: "/uploads/ascensus-academy.jpg",
  });

  return (
    <MainLayout>
      <PageHeader title="Join The Team" />

      <Reveal>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch rounded-md">
                {/* Workshop Image */}
                <div className="w-full overflow-hidden rounded-md shadow-md h-[200px] sm:h-auto">
                  <img
                    src="/uploads/join-us.webp"
                    alt="Medicine Workshop"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* LEFT: TutorBird Form */}
                <div
                ref={scriptContainer}
                className="bg-gray-50 p-0 rounded-2xl shadow-md flex-1"
                ></div>
            </div>
          </div>
        </section>
      </Reveal>
    </MainLayout>
  );
};

export default JoinPage;
