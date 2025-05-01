"use client";
import CommunityGrid from "../community/index";

export default function RequestAppointment() {
  return (
    <div>
      <div className="flex items-center justify-center bg-[#93D9E6] px-4">
        <div className="bg-[#B6E5FD] rounded-3xl p-6 sm:p-10  max-w-[800px] h-auto text-center shadow-lg mt-10 sm:mt-16 mb-10 sm:mb-16">
          {/* Title */}
          <h2
            style={{ fontFamily: "OptimaModoki, sans-serif" }}
            className="text-xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1C4C57] font-semibold mt-4 sm:mt-8"
          >
            Request an Appointment
          </h2>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-10">
            <button
              style={{ fontFamily: "OptimaModoki, sans-serif" }}
              className="bg-[#1C4C57] text-white px-4 sm:px-6 py-2 rounded-md text-lg sm:text-xl font-semibold shadow-md hover:bg-[#93D9E6] hover:text-[#1C4C57] transition"
            >
              CLICK HERE
            </button>
            <button
              style={{ fontFamily: "OptimaModoki, sans-serif" }}
              className="bg-[#1C4C57] text-white px-4 sm:px-6 py-2 rounded-md text-lg sm:text-xl font-semibold shadow-md hover:bg-[#93D9E6] hover:text-[#1C4C57] transition"
            >
              (03) 5367 5355
            </button>
          </div>
        </div>
      </div>
      <CommunityGrid />
    </div>
  );
}
