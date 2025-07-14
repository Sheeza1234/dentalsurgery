"use client";
import Image from "next/image";
import Reviews from '../../reviews/index'
import Navbar from '../../navbar/index';
import Cosmetic1 from "./section1";

export default function CosmeticDentistry({CustomComponent}) {
  const logos = [
    "medicare.png", "medi.png", "somno.png", "aust.png", "irisipum.png",
    "DP.png", "DSD.png", "gIDE.png", "AOSTDS_logo_DHG.png", "Bupa.png",
    "DIR-Logo-Dental-House.png", "HICAP.png", "SIRONA.png",
    "Invisalign-Provider-in-Sunbury-Dental-Couture.png"
  ];

  return (
    <div>
      <div className="bg-[#C7EFFF] w-full min-h-screen pt-24 sm:pt-28">
        <Navbar />

        <main className="flex flex-col px-4 md:px-12 mt-20 sm:mt-36">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center md:justify-start">
            {/* Animated Circle */}
            <div className=" ml-24 relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[520px] md:h-[540px] lg:w-[620px] lg:h-[640px] flex items-center justify-center">
              <div className="absolute bg-[#1C4C57] inset-0 rounded-full border-4 border-transparent animate-border-spin before:absolute before:inset-0 before:rounded-full before:border-4 before:border-[#1C4C57] before:animate-border-warp"></div>

              <Image
                src="/hugging.png"
                alt="Team hugging"
                fill
                className="relative rounded-full object-cover mt-4 sm:mt-6"
              />
            </div>

            <style>
              {`
                @keyframes borderSpin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }

                @keyframes borderWarp {
                  0%   { clip-path: inset(10% 90% 20% 80%); border-width: 0px; }
                  20%  { clip-path: inset(35% 0% 0% 0%); border-width: 6px; }
                  40%  { clip-path: inset(90% 10% 70% 15%); border-width: 4px; }
                  60%  { clip-path: inset(0% 90% 0% 5%); border-width: 7px; }
                  80%  { clip-path: inset(0% 5% 0% 0%); border-width: 5px; }
                  100% { clip-path: inset(5% 55% 10% 90%); border-width: 3px; }
                }

                .animate-border-spin {
                  animation: borderSpin 5s linear infinite;
                }

                .animate-border-warp {
                  animation: borderWarp 10s ease-in-out infinite alternate;
                }
              `}
            </style>

            {/* Text Content */}
            <div className="ml-16 text-center md:text-left mt-8 sm:mt-12 md:mt-24 max-w-[95%] sm:max-w-[90%] lg:max-w-[900px]">
              <h1 className="text-3xl sm:text-5xl md:text-8xl text-[#1C4C57]" style={{ fontFamily: 'Italianno, sans-serif' }}>
                COSMETIC <span className="ml-4">DENTISTRY</span>
              </h1>
              <h2 className="text-2xl sm:text-4xl md:text-7xl text-[#1C4C57] mt-4">
                Transform<br/> 
                <span className="text-[#EC95A4] text-4xl sm:text-6xl md:text-7xl">your smile </span>
                <span className="text-3xl sm:text-5xl md:text-6xl">and boost your<br/> confidence</span>
              </h2>

              {/* Scrolling Logos */}
              <div className="bg-[#C7EFFF] mx-auto md:mx-0 h-[60px] sm:h-[70px] p-2 w-full max-w-[95%] sm:max-w-[600px] flex justify-center md:justify-start gap-8 mt-6 overflow-hidden">
                <div className="flex logo-container">
                  <div className="logo-wrapper flex animate-scroll">
                    {[...logos, ...logos].map((src, index) => (
                      <Image key={index} src={`/${src}`} alt={`Logo ${index}`} width={100} height={100} className="w-auto h-10 sm:h-14 mx-4" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Call to Action Button */}
        <div className="flex justify-center mt-12">
          <button className="text-lg sm:text-xl md:text-2xl mb-12 text-[#EC95A4] w-40 sm:w-48 md:w-64 h-12 sm:h-14 md:h-16 bg-[#1C4C57] rounded-md hover:bg-[#93D9E6] hover:text-[#1C4C57] transition">
            Book Now
          </button>
        </div>
      </div>

      {CustomComponent && <CustomComponent />}
      <Reviews CustomComponent={Cosmetic1} />
    </div>
  );
}
