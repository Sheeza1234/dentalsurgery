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
      Cosmetic dentistry focuses on improving the appearance of the teeth, gums and overall
       smile. While general dentistry is concerned with the health and function of the teeth,
        cosmetic dental treatment is designed to enhance aesthetics. Whether it’s through
         whitening, reshaping or replacing teeth, cosmetic dentistry aims to create a more 
         attractive smile. Unlike general dentistry, which is necessary for maintaining oral 
         health, cosmetic dentistry is typically elective, helping to address concerns about 
         the look of your teeth rather than their health
      </p>

      {/* Title Section */}
      <Image src="/section2.png" alt="section" width={1100} height={300}/>
      
    </div>
    {CustomComponent && <CustomComponent />}
    </div>
  );
}
