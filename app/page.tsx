"use client"; 
import Image from "next/image";
import Navbar from '../components/navbar/index';
import dynamic from "next/dynamic";
const Welcome = dynamic(() => import("../components/welcome/index"), { ssr: false });


export default function CosmeticDentistry() {
  const logos = [
    "medicare.png", "medi.png", "somno.png", "aust.png", "irisipum.png",
    "DP.png", "DSD.png", "gIDE.png", "AOSTDS_logo_DHG.png", "Bupa.png",
    "DIR-Logo-Dental-House.png", "HICAP.png", "SIRONA.png",
    "Invisalign-Provider-in-Sunbury-Dental-Couture.png"
  ];
  return (
    <div>
      <div className="bg-[#C7EFFF] w-full h-full pt-[100px]">

        {/* Top Header */}
<Navbar/>



        {/* Main Content */}
        <main className="flex flex-col px-4 md:px-12 mt-36">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Animated Circle */}

            {/* Animated Circle */}
      <div className="relative md:ml-36 md:mr-24 md:w-[620px] md:h-[640px] flex items-center justify-center">
        {/* Animated Border */}
        <div className="absolute bg-[#1C4C57] inset-0 rounded-full border-4 border-transparent animate-border-spin before:absolute before:inset-0 before:rounded-full before:border-4 before:border-[#1C4C57] before:animate-border-warp"></div>

        {/* Team Hugging Image */}
        <Image
          src="/hugging.png"
          alt="Team hugging"
          width={650}
          height={700}
          className="relative rounded-full object-cover mt-6"
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
            <div className="text-center md:text-left mt-12 md:mt-48">
              <h1 className="text-4xl md:text-6xl text-[#1C4C57] " style={{ fontFamily: 'Abnes, sans-serif' }}>G<span className="ml-2">ENTLE CARE</span></h1>
              <h1 className="text-4xl md:text-7xl text-[#1C4C57] mt-6">
                Anxiety and pain <span className="text-[#EC95A4]">free</span> <br /> experience
              </h1>

              {/* Scrolling Logos */}
              <div className="bg-[#C7EFFF] ml-4 h-[70px] p-2 w-[600px]  flex justify-center md:justify-start gap-8 mt-6 overflow-hidden">
              <div className="flex logo-container">
            <div className="logo-wrapper">
          {/* Duplicate the logos to create an infinite loop */}
          {[...logos, ...logos].map((src, index) => (
            <Image key={index} src={`/${src}`} alt={`Logo ${index}`} width={150} height={150} className="w-auto h-12 sm:h-16 mx-4" />
          ))}
          </div>
        </div>
              </div>

            </div>
          </div>
        </main>

        {/* Call to Action Button */}
        <div className="flex justify-center mt-12">
          <button className="text-xl md:text-2xl mb-12 text-[#EC95A4] w-48 md:w-64 h-16 bg-[#1C4C57] rounded-md hover:bg-[#93D9E6] hover:text-[#1C4C57] transition">
            Book Now
          </button>
        </div>
      </div>
      <Welcome/>
    </div>
  );
}


