import React, { useEffect, useRef, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import PageHeader from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import UsePageMeta from "../hooks/UsePageMeta";
import { JoinTheTeamPage } from "../types";
import { getJoinTheTeamPage } from "../lib/queries";
import { urlFor } from "../lib/sanity";

const JoinPage: React.FC = () => {
  const [joinTheTeamPage, setJoinTheTeamPage] = useState<JoinTheTeamPage | null>(null);
  const scriptContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
        getJoinTheTeamPage().then(setJoinTheTeamPage);
      }, []);

  useEffect(() => {
    if (!joinTheTeamPage) return;
    if (!scriptContainer.current) return;

    // Prevent multiple scripts (React 18 StrictMode)
    if (scriptContainer.current.childElementCount === 0) {
      const script = document.createElement("script");
      script.src =
        "https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9wZG5KZyIsIldlYnNpdGVJRCI6Indic181MlZKYyIsIldlYnNpdGVCbG9ja0lEIjoid2JiX1FMZmZKcyJ9";
      script.async = true;
      scriptContainer.current.appendChild(script);
    }
  }, [joinTheTeamPage]);

  UsePageMeta({
    title: "Join The Team – Become a Tutor at Ascensus Academy",
    description: "Apply to become a tutor at Ascensus Academy. Join our team of high-achieving A* tutors and help guide students with personalised mentorship and expert tuition.",
    url: "https://ascensusacademy.com/join-us",
    image: "/uploads/ascensus-academy.jpg",
  });

  if (!joinTheTeamPage) return null;

  return (
    <MainLayout>
      <PageHeader title={joinTheTeamPage.heading} />

      <Reveal>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch rounded-md">
                {/* Workshop Image */}
                <div className="w-full overflow-hidden rounded-md shadow-md h-[200px] sm:h-auto">
                  <img
                    src={joinTheTeamPage.image ? urlFor(joinTheTeamPage.image).url() : '/uploads/join-us.webp'}
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
