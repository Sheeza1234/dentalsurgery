import Image from "next/image";
export default function MovingBar() {
  const logos = [
    "medicare.png", "medi.png", "somno.png", "aust.png", "irisipum.png",
    "DP.png", "DSD.png", "gIDE.png", "AOSTDS_logo_DHG.png", "Bupa.png",
    "DIR-Logo-Dental-House.png", "HICAP.png", "SIRONA.png",
    "Invisalign-Provider-in-Sunbury-Dental-Couture.png"
  ];

  return (
    <div className="bg-[#C7EFFF] h-[70px] p-2 flex justify-center md:justify-start gap-8 mt-0 overflow-hidden border-t-0 w-full">
      <div className="flex logo-container">
        <div className="logo-wrapper">
          {[...logos, ...logos].map((src, index) => (
            <Image key={index} src={`/${src}`} alt={`Logo ${index}`} width={100} height={100} className="w-auto h-12 sm:h-16 mx-4" />
          ))}
        </div>
      </div>
    </div>
  );
}
