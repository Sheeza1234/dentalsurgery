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
        From the Reception staff Chloe and Taylah to the dental assistant Tess and
        finally, to the amazing Dr Thea, I have been looked after so well!! I would
        highly recommend anyone to attend as my experience has been wonderful.
        <span className="text-[#1C4C57] text-6xl absolute -right-6 bottom-0">”</span>
      </div>

      {/* Patient Name */}
      <p className="text-[#1C4C57] text-3xl font-semibold mt-4">Brenda F.</p>

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
