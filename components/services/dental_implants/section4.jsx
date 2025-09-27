import { Star } from "lucide-react";

export default function Cosmetic4({CustomComponent}) {
  return (
    <div>
    <div className="flex flex-col items-center text-center bg-[#85C4D1] py-10 px-4">
      {/* Section Title */}
      <h2 style={{ fontFamily: "OptimaModoki, sans-serif" }} className="text-4xl md:text-7xl font-semibold text-[#1C4C57] uppercase">
        OUR HAPPY PATIENT
      </h2>

      {/* Divider */}
      <div className="w-36 border-t-2 border-[#1C4C57] my-3"></div>

      {/* Logo */}
      <div style={{ fontFamily: 'Abnes, sans-serif' }} className="text-[#1C4C57] text-4xl font-serif my-2">MS<span className="ml-2">DP</span></div>

      {/* Quote */}
      <div className="max-w-3xl text-white text-2xl leading-relaxed italic relative mt-3">
        <span className="text-[#1C4C57] text-6xl absolute -left-6 top-0">“</span>
        If you want a caring, gentle dentist I highly recommend Saba. I have complete trust in her. She is really tiny which means to me her hands are tiny. Think about it, a fist full of tiny fingers or a fist full of large fingers - in your mouth. I have been going to her since she first came to Bacchus Marsh. I am 77 and have my own teeth and I feel with Saba’s care I will keep them until the end.
        <span className="text-[#1C4C57] text-6xl absolute -right-6 bottom-0">”</span>
      </div>

      {/* Patient Name */}
      <p className="text-[#1C4C57] text-3xl font-semibold mt-4">Shirley Bawden</p>

      {/* Star Rating */}
      <div className="flex mt-2 space-x-1 text-[#EC95A4]">
        {[...Array(5)].map((_, index) => (
          <Star key={index} fill="currentColor" stroke="none" size={44} />
        ))}
      </div>
    </div>
     {CustomComponent && <CustomComponent />}
     </div>
  );
}
