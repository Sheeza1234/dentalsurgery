import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import CommunityGrid from "../community";

const FAQSections = () => {
  const faqs = [
    { question: "How often should I visit the dentist?", answer: "It’s recommended to visit the dentist every 6 months for a routine check-up and cleaning. Regular visits help catch issues early and maintain good oral health." },
    { question: "What should I do if I have a dental emergency?", answer: "If you experience a dental emergency like a toothache, chipped tooth, or lost filling, contact us immediately. We offer same-day emergency appointments to manage pain and prevent further damage." },
    { question: "Do you accept health insurance or offer payment plans?", answer: "Yes, we accept most major health funds and offer flexible payment plans. We also process HICAPS claims on the spot to make payments easier for you." },
    { question: "Is teeth cleaning painful?", answer: "Professional cleanings are generally not painful. You may feel slight discomfort if there is a lot of plaque or tartar, but our team ensures a gentle and comfortable experience." },
    { question: "What age should children first see a dentist?", answer: "We recommend bringing your child in for their first dental visit by age 1, or when their first tooth appears. Early visits help them feel comfortable and establish healthy habits." },
    { question: "What services do you offer at Main Street Dental Practice?", answer: "We offer a full range of dental services including:Preventive care, Fillings and extractions, Crowns and bridges, Root canals, Cosmetic dentistry (whitening, veneers), Children's dentistry, Emergency dental care" }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
    <section style={{ fontFamily: "OptimaModoki, sans-serif" }} className="bg-[#85C4D1] py-16 px-6  flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side (Text) */}
        <div className="md:w-1/2">
          <h2 className="text-9xl font-bold text-[#1C4C57]">FAQs</h2>
          <p className="text-2xl text-[#1C4C57] mt-4">
            Explore the answers to common queries about our dental services in our Frequently Asked Questions (FAQ) section.
            From appointment scheduling to post-treatment care, find the information you need to make your dental experience
            with us smooth and informed.
          </p>
          <a href="tel:0353675355">
          <button className="bg-[#1C4C57] mt-6 px-6 py-3 text-2xl text-[#EC95A4] font-semibold rounded-md hover:bg-[#B6E5FD] hover:text-[#1C4C57] transition duration-300">
            CALL US AT (03) 5367 5355
          </button>
          </a>
        </div>

        {/* Right Side (FAQ List) */}
        <div className="md:w-1/2 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#C7EFFF] shadow-md rounded-lg p-4 transition-all duration-300">
              <button
                className="flex justify-between text-left w-full text-2xl font-medium text-[#1C4C57]"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                {openIndex === index ? <FaMinus className="text-[#1C4C57]" /> : <FaPlus className="text-[#1C4C57]" />}
              </button>
              {openIndex === index && <p className="mt-2 text-xl text-[#1C4C57]">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
    <CommunityGrid />
    </div>
  );
};

export default FAQSections;
