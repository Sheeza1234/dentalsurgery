"use client";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Cosmetic4({ CustomComponent }) {
  const reviews = [
    {
      id: 1,
      stars: 5,
      name: "Misha",
      review:
        "I have been here for at least 2-3 years, and their service has been amazing. The staff are absolutely lovely and go to great lengths to ensure my teeth are healthy and straight due to my braces. I've been seeing Saba, and she is calming and amazing in what she does when it comes to my dental health. Highly recommend 😊",
    },
    {
      id: 2,
      stars: 5,
      name: "Julie Ferguson",
      review: "Saba is very gentle and a skilled dentist.",
    },
    {
      id: 3,
      stars: 5,
      name: "Jeet Dhaliwal",
      review:
        "The best, professional & reasonable dentist. Would recommend them to everyone. The best in town.",
    },
    {
      id: 4,
      stars: 5,
      name: "Charlotte Gellie",
      review:
        "The staff are so lovely and caring. Helped alleviate any anxiety I was feeling. I walked out with sparkling teeth. Thank you to Dr Saba and her wonderful team. We LOVE Main St Dental 😁",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000); // every 5 sec
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div>
      <div className="flex flex-col items-center text-center bg-[#85C4D1] py-16 px-6 overflow-hidden">
        {/* Section Title */}
        <h2
          style={{ fontFamily: "OptimaModoki, sans-serif" }}
          className="text-4xl md:text-7xl font-semibold text-[#1C4C57] uppercase"
        >
          OUR HAPPY PATIENTS
        </h2>

        {/* Divider */}
        <div className="w-36 border-t-2 border-[#1C4C57] my-3"></div>

        {/* Logo */}
        <div
          style={{ fontFamily: "Abnes, sans-serif" }}
          className="text-[#1C4C57] text-4xl font-serif my-2"
        >
          MS<span className="ml-2">DP</span>
        </div>

        {/* Carousel */}
        <div className="relative w-full max-w-4xl mt-6 h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[index].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl text-white text-xl md:text-2xl leading-relaxed italic relative px-6"
            >
              <span className="text-[#1C4C57] text-6xl absolute -left-6 top-0">
                “
              </span>
              {reviews[index].review}
              <span className="text-[#1C4C57] text-6xl absolute -right-6 bottom-0">
                ”
              </span>

              {/* Patient Name */}
              <p className="text-[#1C4C57] text-2xl md:text-3xl font-semibold mt-6">
                {reviews[index].name}
              </p>

              {/* Star Rating */}
              <div className="flex mt-2 justify-center space-x-1 text-[#EC95A4]">
                {[...Array(reviews[index].stars)].map((_, idx) => (
                  <Star
                    key={idx}
                    fill="currentColor"
                    stroke="none"
                    size={32}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-[#1C4C57]" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {CustomComponent && <CustomComponent />}
    </div>
  );
}
