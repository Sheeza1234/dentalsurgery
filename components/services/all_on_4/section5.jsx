"use client";
import { useState } from "react";
import Image from "next/image";
import AppointmentForm from "./AppointmentForm";
import { PlayCircle } from "lucide-react";
import ContactSection from "@/components/contact";

export default function Cosmetic5({ CustomComponent }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <section className="bg-[#D4EBF4] py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          
          {/* LEFT SIDE TEXT */}
          <div className="text-white">
            <p className="text-xl font-semibold tracking-wide text-[#1C4C57] mb-3">
              The Best Way To Learn
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Treatment <span className="text-[#EC95A4]">Information</span> Video
            </h1>

            <p className="mt-6 text-xl text-[#1C4C57] leading-relaxed max-w-lg">
              Watch 15-minute Treatment Information Video. It covers the full
              procedure, costs, benefits, and risks – giving you clear, honest
              guidance to help you make an informed decision.
            </p>

            <button
              onClick={() => setIsPlaying(true)}
              className="mt-6 inline-flex items-center gap-2 bg-white text-[#EC95A4] px-5 py-3 rounded-md font-semibold shadow hover:bg-gray-100 transition"
            >
              <PlayCircle size={22} className="text-[#1C4C57]" />
              Watch Now
            </button>
          </div>

          {/* RIGHT SIDE IMAGE / VIDEO */}
          <div className="flex justify-center">
            {!isPlaying ? (
              <Image
                src="/all-on-4.png"  // Default image (before play)
                alt="Treatment Information Video"
                width={600}
                height={400}
                className="rounded-lg cursor-pointer"
                onClick={() => setIsPlaying(true)} // also clickable
              />
            ) : (
              <video
                src="/intro.mp4" // <-- put your video in /public/videos
                controls
                autoPlay
                className="rounded-lg w-full h-auto"
              />
            )}
          </div>
        </div>
      </section>

      {CustomComponent && <CustomComponent />}
      <AppointmentForm CustomComponent={ContactSection} />
    </div>
  );
}

// Single Reusable Component for Treatments
function TreatmentCard({ title, description }) {
  return (
    <div className="bg-[#B6E5FD] text-[#1C4C57] p-8 rounded-[40px] flex items-center shadow-lg min-h-[300px]">
      {/* Circle Design */}
      <div className="bg-[#1C4C57] w-28 h-28 rounded-full flex-shrink-0 flex justify-center items-center">
        <Image src="/teeth.png" alt="teeth" width={80} height={80} />
      </div>

      {/* Content */}
      <div className="ml-6 flex-1">
        <h4 className="text-3xl text-[#2F7584] font-semibold">{title}</h4>
        <p className="mt-2 text-xl">{description}</p>
      </div>
    </div>
  );
}
