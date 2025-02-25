import Image from "next/image";
import FAQSection from "./FAQsection";
import AppointmentForm from './AppointmentForm'
export default function Cosmetic5({ CustomComponent }) {
    const treatments = [
      {
        title: "Gum Contouring",
        description:
          "Do you feel self-conscious about a gummy smile? At MSDP, we offer gum contouring to remove excess gum tissue and help you realize your dream smile. This cosmetic dentistry service is ideal for patients who are concerned about showing too much gum when they smile.",
      },
      {
        title: "Gum Enhancement & Gum Grafting",
        description:
          "We offer a number of cosmetic dental treatments for enhancing the gums, including gum enhancement using LANAP laser dentistry. We can also assist with gum grafting to correct gum recession and result in a more even gum line.",
      },
      {
        title: "White Fillings",
        description:
          "At East Bentleigh Dental Clinic, we’re proud to offer aesthetically pleasing white composite fillings. Providing a natural looking alternative to silver amalgam fillings, our composite fillings can be safely used in both front and back teeth.",
      },
      {
        title: "Teeth Whitening – In-Chair & Take Home Kit",
        description:
          "Are you worried your teeth aren’t looking as white as they used to? When it comes to cosmetic dentistry in Melbourne for whitening teeth, you can trust our dentists to help you achieve the shade you desire. We offer both in-chair teeth whitening as well as convenient take home kits, allowing you to choose the whitening cosmetic dental treatment that best meets your needs.",
      },
      {
        title: "Snap on Smile",
        description:
          "Snap on Smile is a quick and easy cosmetic treatment that can be used to mask the appearance of crooked teeth, gaps, stains, and missing teeth. It’s an excellent alternative to more costly cosmetic dentistry treatments such as porcelain veneers and dental implants.",
      },
      {
        title: "Porcelain Veneers",
        description:
          "One of the most highly sought-after types of cosmetic dentistry in Melbourne, porcelain veneers can be used to improve the appearance of your smile and restore your natural bite. At East Bentleigh Dental Group, our cosmetic dentist in MSDP can provide you with long-lasting veneers that are bonded to your teeth in order to enhance your smile.",
      },
      {
        title: "Braces",
        description:
          "In addition to our cosmetic dental treatments, many members of our onsite team boast special training in applying traditional braces as well as Invisalign® and invisible braces to ensure the proper positioning of your teeth and alignment of your jaw. We also offer the non-braces solution and many early intervention methods to minimize the need for braces.",
      },
    ];
  
    return (
        <div>
      <div style={{ fontFamily: "OptimaModoki, sans-serif" }} className="bg-[#1C4C57] w-full text-white h-[2750px]">
        {/* Heading Section */}
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-7xl font-semibold">Unique Treatments for Unique Patients</h2>
          <p className="mt-4 text-2xl leading-relaxed">
            Cosmetic dental treatment can take many different forms, ranging from simple teeth whitening procedures
            through to more complex dental implants using state-of-the-art cosmetic laser dentistry techniques.
            In order to determine the most suitable procedure for your needs, our cosmetic dentist in MSDP
            will carefully assess your unique situation and ensure you understand all of the options available to you.
          </p>
        </div>
  
        {/* Subtitle */}
        <h3 className="text-center text-4xl mt-10">Some of our cosmetic dentistry treatments include:</h3>
  
        {/* Treatments Section */}
        <div className="bg-[#1C4C57] max-w-6xl h-[300px] mx-auto  mt-8 space-y-6">
          {treatments.map((treatment, index) => (
            <TreatmentCard key={index} title={treatment.title} description={treatment.description} />
          ))}
        </div>
      </div>
      {CustomComponent && <CustomComponent />}
      <FAQSection CustomComponent={AppointmentForm}/>
      </div>
    );
  }
  
  // Single Reusable Component for Treatments
  function TreatmentCard({ title, description }) {
    return (
      <div className="bg-[#B6E5FD] text-[#1C4C57] p-8 rounded-[40px] flex items-center shadow-lg min-h-[300px]">
        {/* Consistent Circle Design */}
        <div className="bg-[#1C4C57] w-28 h-28 rounded-full flex-shrink-0 flex justify-center items-center"><Image
        src="/teeth.png" alt="teeth" width={80} height={80}/></div>
        
        {/* Content */}
        <div className="ml-6 flex-1">
          <h4 className="text-3xl text-[#2F7584] font-semibold">{title}</h4>
          <p className="mt-2 text-xl">{description}</p>
        </div>
      </div>
    );
  }
  