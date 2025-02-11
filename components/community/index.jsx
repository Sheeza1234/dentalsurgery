"use client";
import ContactSection from '../contact/index'

export default function CommunityGrid() {
  const locations = [
    ["BACCHUS MARSH", "MADDINGLEY", "DARLEY", "BALLAN"],
    ["GISBORNE", "AINTREE", "PENTLAND HILLS", "DALES CREEK"],
    ["MELTON WEST", "MELTON SOUTH", "BALLIANG", "BALLIANG EAST"],
    ["ROWSLEY", "NEWBURY", "MOUNT EGERTON", "GORDON"],
    ["INGLISTON", "MOUNT COTTRELL", "SPARGO CREEK", "BALLENGAROOK"],
    ["GREENDALE", "COLBROOK", "KOROBEIT", "BLACKWOOD"],
    ["BLAKEVILLE", "MORNING", "COIMADAL", "TOOLERN VALE"],
    ["MARWAN", "GLENMORE", "ROCKBANK", "PLUMPTON"],
    ["BARRYS REEF", "BUNDING", "MYRNIONG", "FISKVILLE"],
    ["QUANDONG", "EYNESBURY", "WEIR VIEWS", "PARWAN"],
    ["BROOKFIELD", "MERRIMU", "EXFORD", "HOPETOUN PARK"],
  ];

  return (
    <div>
    <div className="min-h-screen bg-[#1C4C57] flex flex-col items-center py-12">
      {/* Header */}
      <h1 style={{fontFamily:'Inter'}} className="text-[#C7EFFF] text-4xl font-semibold mb-16">
        <span style={{ fontFamily: 'Abnes, sans-serif' }} className="text-3xl">MSDP</span> Servicing Local Community Since{" "}
        <span className="font-bold">1942</span>
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6 w-[1700px]  px-8">
        {locations.flat().map((location, index) => (
          <div
            key={index}
            style={{ fontFamily: "OptimaModoki, sans-serif" }}
            className="bg-[#C7EFFF] text-[#1C4C57] text-2xl font-semibold py-3 rounded-full text-center shadow-md"
          >
            {location}
          </div>
        ))}
      </div>
    </div>
    <ContactSection/>
    </div>
  );
}
