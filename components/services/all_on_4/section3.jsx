"use client";
import { useState } from "react";
import Image from "next/image";
import Cosmetic5 from "./section5";
import FAQSection from "./FAQsection";

export default function Cosmetic3({ CustomComponent }) {
  const items = [
    {
      title: "Zygomatic Dental Implants?",
      description:
        "Zygomatic implants are a specialised solution for patients with severe bone loss in the upper jaw, where traditional implants cannot be placed. Instead of relying on jawbone density, the implants are anchored into the zygomatic bone (cheekbone), creating a strong and stable foundation for a full arch of fixed teeth. These implants are longer than standard ones and are placed at a 45° angle, eliminating the need for bone grafts. Like the All-on-4® technique, provisional teeth are usually fitted within 1–2 days after surgery. Depending on your bone structure, you may need between one and four zygomatic implants to achieve a secure, long-lasting smile.",
      img: "/images/all-on-4.jpg",
      link: "#",
    },
    {
      title: "All-on-4® & Dental Implants",
      description:
        "The All-on-4® treatment is a proven solution for missing teeth and a secure alternative to dentures. Using just four implants, a full arch of fixed teeth is supported with maximum stability. The MSDP protocol follows the Malo two-bridge process: provisional teeth are fitted within 24 hours (usually the same day), and final custom teeth are placed once healing is complete. Benefits of MSDP All-on-4® implants include: Less invasive, requiring only four implants. Provisional teeth within 24 hours. Avoids most bone grafting. 98%* success rate. Natural-looking teeth that feel and function like real ones.",
      img: "/images/all-on-4-plus.jpg",
      link: "#",
    },
    {
      title: "All-on-4® vs Dental Restoration",
      description:
        "Restorative dentistry includes treatments such as fillings, crowns, root canals, bridges, implants, and dentures. These procedures repair or replace damaged or missing teeth but may involve multiple steps and ongoing maintenance. By comparison, the All-on-4® treatment provides a fixed full-arch solution using only four implants per jaw. This advanced approach avoids the need for bone grafting in most cases and delivers natural-looking provisional teeth within 24 hours. At MSDP, we follow the clinically proven Malo Protocol, a two-stage process where patients first receive a provisional bridge during healing, followed by their final custom bridge for a long-lasting, confident smile.",
      img: "/images/zygomatic.jpg",
      link: "#",
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-b from-[#C7EFFF] from-[66%] to-[#1C4C57] to-[41%] py-12">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <h2 className="text-xl text-center md:text-8xl font-semibold text-[#1C4C57] mb-8"  style={{ fontFamily: "OptimaModoki, sans-serif" }}>
            Dental Implant Solution
          </h2>

          {/* Grid of Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, idx) => {
              const [expanded, setExpanded] = useState(false);
              const maxChars = 200; // cutoff for preview
              const isLong = item.description.length > maxChars;
              const displayText =
                expanded || !isLong
                  ? item.description
                  : item.description.slice(0, maxChars) + "...";

              return (
                <a
                  href={item.link}
                  key={idx}
                  className="flex flex-col  overflow-hidden  transition duration-300 bg-white"
                >
                  {/* Image */}
                  <div className="relative w-full h-56 md:h-64">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="bg-[#1C4C57] p-5 flex flex-col flex-grow">
                    <h3 className="text-[#C7EFFF] text-2xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white text-lg leading-relaxed">
                      {displayText}
                    </p>
                    {isLong && (
                      <button
                        onClick={(e) => {
                          e.preventDefault(); // prevent link navigation
                          setExpanded(!expanded);
                        }}
                        className="mt-2 text-[#EC95A4] text-lg font-medium underline hover:no-underline self-start"
                      >
                        {expanded ? "Read less" : "Read more"}
                      </button>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {CustomComponent && <CustomComponent />}
      <Cosmetic5 CustomComponent={FAQSection} />
    </div>
  );
}
