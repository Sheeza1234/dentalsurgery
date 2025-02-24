import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import HowWeHelp from "../works/index";

export default function Welcome() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Ensure code only runs on client
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight); // Store window height on client
      
      const handleScroll = () => {
        setOffset(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className=" bg-[#93D9E6] flex flex-col items-center overflow-hidden">
      <Head>
        <title>Main Street Dental</title>
      </Head>

      {/* Welcome Section - Fixed for 2/3 of Screen */}
      <div className="relative w-full h-[54vh] flex justify-center items-center overflow-hidden">
        <h1
          style={{ fontFamily: "Abnes, sans-serif" }}
          className={`mt-18 text-[#1C4C57] tracking-wide  uppercase inset-0 z-0 text-8xl relative transition-all duration-[9744000ms] ${offset > (window.innerHeight * 1) / 2 ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
        >
          Welcome
          <span className="block ml-[450] mt-8 mb-6">To</span>
          <span className="ml-[670]">MSDP</span>
        </h1>

      </div>


      <div
        className="w-[80%] mt-72 ml-72 overflow-hidden transition-transform duration-[4000ms] ease-out"
        style={{
          transform: `translateY(-${offset * 1.2}px)`, // 1.2 controls speed; adjust as needed
        }}
      >

        <div className="grid grid-cols-3 gap-56">
          <div className="relative group ">
            <Image
              src="/welcome1.png"
              alt="Dentist"
              width={350}
              height={300}
              className="transition-transform transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src="/welcome2.png"
              alt="Dentist Hover"
              width={350}
              height={300}
              className="absolute top-0 left-0 opacity-0 translate-x-10 transition-transform transition-opacity duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            />
          </div>

          {/* Image 2 */}
          <div className="relative group">
            <Image
              src="/welcome1.png"
              alt="Team Celebrating"
              width={350}
              height={300}
              className="transition-transform transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src="/welcome2.png"
              alt="Team Celebrating Hover"
              width={350}
              height={300}
              className="absolute top-0 left-0 opacity-0 translate-x-10 transition-transform transition-opacity duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            />
          </div>
        </div>

        <div className="ml-[346px] grid grid-cols-3 gap-56">
          {/* Image 3 */}
          <div className="relative group">
            <Image
              src="/welcome1.png"
              alt="Dentist"
              width={350}
              height={300}
              className="transition-transform transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src="/welcome2.png"
              alt="Dentist Hover"
              width={350}
              height={300}
              className="absolute top-0 left-0 opacity-0 translate-x-10 transition-transform transition-opacity duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            />
          </div>

          {/* Image 4 */}
          <div className="relative group">
            <Image
              src="/welcome1.png"
              alt="Dentist"
              width={350}
              height={300}
              className="ml-[120px] transition-transform transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src="/welcome2.png"
              alt="Dentist Hover"
              width={350}
              height={300}
              className="ml-[120px] absolute top-0 left-0 opacity-0 translate-x-10 transition-transform transition-opacity duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            />
          </div>
        </div>

        <div>
          {/* Image 5 */}
          <div className="relative group">
            <Image
              src="/welcome1.png"
              alt="Dentist"
              width={350}
              height={300}
              className="ml-[620px] transition-transform transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src="/welcome2.png"
              alt="Dentist Hover"
              width={350}
              height={300}
              className="ml-[620px] absolute top-0 left-0 opacity-0 translate-x-10 transition-transform transition-opacity duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            />
          </div>
        </div>

      </div>
      <div>
        <main className="mt-[-800]">
          <h2
            className="text-8xl text-[#1C4C57] text-center"
            style={{ fontFamily: "OptimaModoki, sans-serif" }}
          >
            Friendly, Dedicated &<br />
            <span className="text-[#EC95A4]"> Highly Qualified Dentist</span>
          </h2>

          <p
            className="mt-6 w-[80%] text-4xl text-[#1C4C57] mx-auto text-center"
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

          <div className="flex justify-center mt-10 mb-24">
            <button
              style={{ fontFamily: "OptimaModoki, sans-serif" }}
              className="text-[#EC95A4] h-24 text-3xl bg-[#1C4C57] py-2 px-6 rounded-md hover:bg-[#C7EFFF] hover:text-[#1C4C57] transition"
            >
              Request an Appointment
            </button>
          </div>

        </main>
      </div>
      <HowWeHelp />
    </div>
  );
}
