import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import HowWeHelp from "../works/index";

export default function Welcome() {
  const [offset, setOffset] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

useEffect(() => {
  if (typeof window !== "undefined") {
    setWindowHeight(window.innerHeight);
  }
}, []);

  
useEffect(() => {
  if (typeof window !== "undefined") {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }
}, []);

  

  return (
  <div className="bg-[#93D9E6] flex flex-col items-center overflow-hidden">
    <Head>
      <title>Main Street Dental</title>
    </Head>

    {/* Welcome Section + Animated Images - only on large screens */}
    <div className="hidden lg:block w-full">
      <div className="relative h-[54vh] flex justify-center items-center overflow-hidden">
        <h1
          style={{ fontFamily: "Abnes, sans-serif" }}
          className={`mt-24 text-[#1C4C57] tracking-wide uppercase inset-0 z-0 text-8xl transition-all duration-[9744000ms] ${
            offset > windowHeight / 2 ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          Welcome
          <div className="block ml-[450px] mt-16 mb-6">To</div>
          <div className="ml-[670px] mt-16">MSDP</div>
        </h1>
      </div>

      <div
        className="w-[90%] mt-72 ml-72 overflow-hidden transition-transform duration-[4000ms] ease-out"
        style={{
          transform: `translateY(-${offset * 1.2}px)`,
        }}
      >
        <div className="grid grid-cols-3 gap-x-56 gap-y-0">
          <div className="relative group">
            <Image src="/main.png" alt="Dentist1" width={350} height={300}
              className="transition duration-300 group-hover:opacity-0" />
            <Image src="/main.png" alt="Dentist Hover1" width={350} height={300}
              className="absolute top-0 left-0 opacity-0 translate-x-10 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </div>
          <div className="relative group">
            <Image src="/main1.png" alt="Team Celebrating2" width={350} height={300}
              className="transition duration-300 group-hover:opacity-0" />
            <Image src="/main1.png" alt="Team Celebrating Hover2" width={350} height={300}
              className="absolute top-0 left-0 opacity-0 translate-x-10 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </div>
        </div>

        <div className="ml-[346px] grid grid-cols-3 gap-56">
          <div className="relative group">
            <Image src="/main2.png" alt="Dentist3" width={350} height={300}
              className="transition duration-300 group-hover:opacity-0" />
            <Image src="/main2.png" alt="Dentist Hover3" width={350} height={300}
              className="absolute top-0 left-0 opacity-0 translate-x-10 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </div>
          <div className="relative group">
            <Image src="/main3.png" alt="Dentist4" width={350} height={300}
              className="ml-[120px] transition duration-300 group-hover:opacity-0" />
            <Image src="/main3.png" alt="Dentist Hover4" width={350} height={300}
              className="ml-[120px] absolute top-0 left-0 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </div>
        </div>

        <div className="gap-56">
          <div className="relative group">
            <Image src="/main4.png" alt="Dentist5" width={350} height={300}
              className="ml-[620px] transition duration-300 group-hover:opacity-0" />
            <Image src="/main4.png" alt="Dentist Hover5" width={350} height={300}
              className="ml-[620px] absolute top-0 left-0 opacity-0 translate-x-10 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </div>
        </div>
      </div>
    </div>

    {/* Heading + About Section - visible on all screens */}
    <div className="mt-12 lg:mt-[-800px] w-full px-4 lg:px-0 max-w-7xl mx-auto">
      <h2
        className="text-3xl lg:text-8xl text-[#1C4C57] text-center"
        style={{ fontFamily: "OptimaModoki, sans-serif" }}
      >
        Friendly, Dedicated &<br/>
        <span className="text-[#EC95A4]"> Highly Qualified Dentist</span>
      </h2>

      <p
        className="mt-8 lg:mt-16 w-full lg:w-[90%] text-lg lg:text-4xl text-[#1C4C57] mx-auto text-center"
        style={{ fontFamily: "OptimaModoki, sans-serif" }}
      >
        Main Street Dental Practice is one of the oldest dental practices in{" "}
        <span className="text-[#EC95A4]">Bacchus Marsh</span>. According to
        the <em>Melton Express</em> published on Saturday, November 28, 1942,
        resident dentist Mr. M.G. Pietriche began his practice at the{" "}
        <span className="text-[#EC95A4]">Main Street</span> surgery on Monday,
        November 30. In 2008,{" "}
        <span className="text-[#EC95A4]">Dr. Saba Farooq</span> joined the
        surgery, continuing its tradition of exceptional dental services.
      </p>

      <div className="flex justify-center mt-12 lg:mt-24 mb-12">
        <button
          style={{ fontFamily: "OptimaModoki, sans-serif" }}
          className="text-[#EC95A4] text-xl lg:text-4xl bg-[#1C4C57] py-3 lg:py-6 px-6 rounded hover:bg-[#C7EFFF] hover:text-[#1C4C57] transition"
        >
          Request an Appointment
        </button>
      </div>
    </div>

    <HowWeHelp />
  </div>
);

}
