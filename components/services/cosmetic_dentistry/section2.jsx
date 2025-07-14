import Image from "next/image";
import Cosmetic3 from '../../services/cosmetic_dentistry/section3'
import Cosmetic4 from "./section4";

export default function Cosmetic2({ CustomComponent }) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center overflow-hidden bg-[#2F7584] text-white"
        style={{ fontFamily: "OptimaModoki, sans-serif" }}>
        <h1 className="text-7xl sm:text-5xl md:text-7xl font-semibold text-center mt-6">
          What is Cosmetic Dentistry?
        </h1>

        {/* Divider */}
        <div className="w-20 border-t-2 border-white mx-auto my-6"></div>

        {/* Content Section */}
        <p className="text-2xl text-center max-w-7xl mx-auto leading-relaxed">
          Cosmetic dentistry focuses on enhancing the appearance of your teeth, gums,
          and overall smile. Unlike general dentistry, which maintains dental health,
          cosmetic and family dentistry is dedicated to achieving a beautiful, confident smile.
          From popular cosmetic dentistry procedures like teeth whitening, veneers, and reshaping to complete cosmetic dentistry services for restoring or replacing teeth, these treatments
          improve aesthetics and boost self-esteem. Many patients searching for cosmetic dentistry
          near me are looking for solutions to crooked, stained, or missing teeth. While cosmetic
          dentistry cost can vary based on the specific treatment, investing in your smile often pays lifelong dividends in confidence and quality of life. Whether you need family cosmetic dentistry or advanced cosmetics in dentistry, our practice offers personalized care to help you achieve the smile of your dreams.

        </p>

        {/* Title Section */}
        <Image src="/section2.png" alt="section" width={1100} height={300} />

      </div>
      {CustomComponent && <CustomComponent />}
    </div>
  );
}
