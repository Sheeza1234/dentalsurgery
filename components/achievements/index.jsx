"use client";

import { useState } from "react";
import MeetTheTeam from "../team/index";

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const tabs = [
    "ALL",
    "ALL ON 4",
    "VENEERS",
    "FAST BRACES",
    "INVISALIGN",
    "IMPLANTS",
    "WHITENING",
  ];
  const sections = Array.from({ length: 15 }, (_, index) => ({
    id: index + 6,
    category: "ALL",
  }));

  const filteredSections =
    activeTab === "ALL"
      ? sections
      : sections.filter((section) => section.category === activeTab);

  return (
    <div>
      {/* Section Container */}
      <div className="min-h-screen bg-[#93D9E6] text-center p-6 sm:p-8">
        {/* Title */}
        <h1
          style={{ fontFamily: "OptimaModoki, sans-serif" }}
          className="text-3xl sm:text-6xl font-semibold text-[#1C4C57] mb-6"
        >
          MSDP DEDICATION TO ACHIEVE THE BEST
        </h1>

        {/* Description */}
        <p
          style={{ fontFamily: "OptimaModoki, sans-serif" }}
          className="mt-6 sm:mt-12 text-lg sm:text-3xl max-w-[90%] sm:max-w-[80%] mx-auto"
        >
          A radiant smile is meant to be shared, and seeing the possibilities is
          the first step in your cosmetic dental journey. Explore the
          transformative power of our work through compelling before-and-after
          photos showcasing the stunning results achieved by our cosmetic
          dentistry patients in Bacchus Marsh and the broader area of Moorabool
          Shire.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-10 sm:mt-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              style={{ fontFamily: "OptimaModoki, sans-serif" }}
              className={`px-3 sm:px-4 py-2 border border-0 text-lg sm:text-2xl font-medium text-[#1C4C57] hover:text-white hover:bg-[#1C4C57] transition-all`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8 sm:mt-12 px-4 sm:px-0">
          {filteredSections.map((section) => (
            <div key={section.id} className="flex flex-col gap-4 items-center">
              {/* Filled box */}
              <div className="bg-white text-center py-2 w-28 sm:w-36 h-12 shadow-lg rounded-md">
                <h2 className="font-semibold text-lg sm:text-xl">
                  Section {section.id}
                </h2>
              </div>

              {/* Empty box */}
              <div className="bg-white text-center w-64 sm:w-72 py-8 h-48 sm:h-64 shadow-lg rounded-md"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Meet the Team Section */}
      <MeetTheTeam />
    </div>
  );
};

export default Achievements;
