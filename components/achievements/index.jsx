"use client";

import { useState } from "react";
import MeetTheTeam from '../team/index'

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const tabs = ["ALL", "ALL ON 4", "VENEERS", "FAST BRACES", "INVISALIGN", "IMPLANTS", "WHITENING"];
  const sections = [
    { id: 6, category: "ALL" },
    { id: 7, category: "ALL" },
    { id: 8, category: "ALL" },
    { id: 9, category: "ALL" },
    { id: 10, category: "ALL" },
    { id: 11, category: "ALL" },
    { id: 12, category: "ALL" },
    { id: 13, category: "ALL" },
    { id: 14, category: "ALL" },
    { id: 15, category: "ALL" },
    { id: 16, category: "ALL" },
    { id: 17, category: "ALL" },
    { id: 18, category: "ALL" },
    { id: 19, category: "ALL" },
    { id: 20,  category:"ALL"}
  ];

  const filteredSections = activeTab === "ALL" ? sections : sections.filter((section) => section.category === activeTab);

  return (
    <div>
    <div className="min-h-screen bg-[#93D9E6] text-center p-8">
      <h1
        style={{ fontFamily: "OptimaModoki, sans-serif" }}
        className="text-6xl font-semibold text-[#1C4C57] mb-6"
      >
        MSDP DEDICATION TO ACHIEVE THE BEST
      </h1>
      <p style={{ fontFamily: 'OptimaModoki, sans-serif' }} 
             className="mt-16 text-3xl text-center max-w-[80%] mx-auto">
           A radiant smile is meant to be shared, and seeing the possibilities 
           is the first step in your cosmetic dental journey.  Explore the transformative 
           power of our work through compelling before-and-after photos showcasing 
           the stunning results achieved by our cosmetic dentistry patients in Bacchus 
           Marsh and Broader area of Moorabool Shire.
          </p>

      {/* Tabs */}
      <div className="flex ml-64 space-x-16 mb-8 mt-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            style={{ fontFamily: "OptimaModoki, sans-serif" }}
            className={`px-4 py-2 border border-0 text-3xl font-medium text-[#1C4C57]`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Grid Sections */}
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6">
        {filteredSections.map((section) => (
          <div key={section.id} className="ml-8 flex flex-col gap-4">
            {/* Filled box */}
            <div className="bg-white text-center py-2 w-36 h-12  shadow-lg rounded-md">
            <h2 className="font-semibold text-xl">Section {section.id}</h2>
          </div>

            {/* Empty box */}
            <div className="bg-white text-center w-72 py-8 h-64 shadow-lg">
            <h2 className="font-semibold text-xl"></h2>
          </div>
          </div>
        ))}
      </div>
    </div>
    <MeetTheTeam/>
    </div>
  );
};

export default Achievements;
