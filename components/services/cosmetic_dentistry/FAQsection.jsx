import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQSection = ({CustomComponent}) => {
  const faqs = [
    { question: "Are cosmetic dental treatments painful?", answer: "Most cosmetic dental treatments are minimally invasive and typically involve little to no discomfort. Procedures like teeth whitening or bonding are non-invasive, while others, such as dental implants or veneers, may involve local anaesthesia to ensure a pain-free experience. Our team will prioritise your comfort throughout the process and provide aftercare instructions to minimise any post-treatment discomfort." },
    { question: "How long do cosmetic dentistry results last?", answer: "The longevity of cosmetic dentistry results will depend on the type of procedure and how well you maintain your oral hygiene. Teeth whitening results can last from several months to a couple of years depending on your habits, while veneers and dental implants can last for decades with proper care. Regular dental check-ups and good oral hygiene practices will help extend the life of your cosmetic dental work." },
    { question: "Is cosmetic dentistry suitable for everyone?", answer: "Cosmetic dentistry can benefit most people looking to improve the appearance of their smile, but the suitability of certain treatments may depend on your oral health. Before proceeding with any cosmetic dental treatment, we will conduct a thorough assessment to ensure your teeth and gums are healthy enough for the procedure. If you have existing dental issues, those may need to be addressed first." },
    { question: "How much does cosmetic dentistry cost?", answer: "The cost of cosmetic dentistry varies according to the procedure. Simple treatments, like teeth whitening, are more affordable, while complex procedures, such as dental implants or veneers, come at a higher cost. We offer personalised treatment plans to suit your budget and provide a breakdown of costs during your consultation." },
    { question: "How do I know which cosmetic dental treatment is right for me?", answer: "At East Bentleigh Dental Group, we begin with a consultation to assess your unique dental needs and goals. Based on your concerns, our experienced cosmetic dentists will recommend the most appropriate treatments to achieve the results you’re looking for. We’ll make sure you fully understand your options and what each treatment involves." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
    <section style={{ fontFamily: "OptimaModoki, sans-serif" }} className="bg-[#85C4D1] py-16 px-6  flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side (Text) */}
        <div className="md:w-1/2">
          <h2 className="text-9xl font-bold text-[#1C2541]">FAQs</h2>
          <p className="text-2xl text-gray-700 mt-4">
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
            <div key={index} className="bg-white shadow-md rounded-lg p-4 transition-all duration-300">
              <button
                className="flex justify-between items-center w-full text-2xl font-medium text-[#1C2541]"
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
    {CustomComponent && <CustomComponent />}
    </div>
  );
};

export default FAQSection;
