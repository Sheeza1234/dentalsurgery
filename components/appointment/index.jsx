"use client";
import CommunityGrid from '../community/index'

export default function RequestAppointment() {
  return (
    <div>
    <div className="flex items-center justify-center bg-[#93D9E6]">
      <div className="bg-[#B6E5FD] rounded-3xl p-10 w-[800px] h-[300px] text-center shadow-lg mt-16 mb-16">
        <h2 style={{ fontFamily: "OptimaModoki, sans-serif" }} className="text-6xl text-[#1C4C57] font-semibold mt-8">Request an Appointment</h2>
        <div className="flex justify-center gap-6 mt-10">
          <button style={{ fontFamily: "OptimaModoki, sans-serif" }} className="bg-[#1C4C57] text-white px-6 py-2 rounded-md text-xl font-semibold shadow-md hover:bg-[#93D9E6] hover:text-[#1C4C57]">
            CLICK HERE
          </button>
          <button style={{ fontFamily: "OptimaModoki, sans-serif" }} className="bg-[#1C4C57] text-white px-6 py-2 rounded-md text-xl font-semibold shadow-md hover:bg-[#93D9E6] hover:text-[#1C4C57]">
            (03) 5367 5355
          </button>
        </div>
      </div>
    </div>
    <CommunityGrid/>
    </div>
  );
}
