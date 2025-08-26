import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Section4 from "./section4";
import Cosmetic4 from "./section4";
import Cosmetic5 from "./section5";

export default function Cosmetic3({ CustomComponent }) {
    return (
        <div>
            <div className="flex flex-col items-center justify-center overflow-hidden bg-[#2F7584] text-white"
                style={{ fontFamily: "OptimaModoki, sans-serif" }}>
  <h1 className="text-7xl sm:text-5xl md:text-7xl font-semibold text-center mt-6">
         Cosmetic Dentistry at MSDP
      </h1>

      {/* Divider */}
      <div className="w-20 border-t-2 border-white mx-auto my-6"></div>

      {/* Content Section */}
      <p className="text-2xl text-center max-w-7xl mx-auto leading-relaxed">
      At MSDP, our experienced dentists are dedicated to providing exceptional 
      cosmetic dentistry treatments in a calming environment. Our team takes the 
      time to understand your individual goals, working closely with you to 
      create a custom treatment plan that addresses your needs. Whether
       you’re seeking a subtle improvement or a complete smile makeover 
       with cosmetic laser dentistry, our state-of-the-art dental techniques
        and compassionate care can help you achieve your desired results.
      </p>

                {/* Title Section */}
                <h1 className="mt-12 text-7xl sm:text-5xl md:text-7xl font-semibold text-center mt-6">
                Cosmetic Dental Issues We Can Address
                </h1>

                {/* Divider */}
                <div className="w-20 border-t-2 border-white mx-auto my-6"></div>

                {/* Content Section */}
                <div className="text-3xl text-left max-w-7xl mx-auto">At MSDP, we offer treatments to address a wide range of
                    cosmetic dental issues. Some common concerns that cosmetic and laser
                    dentistry can target include:<br /><br /></div>
                <ul className="text-2xl text-left max-w-7xl mx-auto space-y-4">
                    <li className="flex items-start">
                        <CheckCircle className="text-[#EC95A4] w-8 h-8 mr-3" />
                        <span>
                            Gaps between teeth – If you have noticeable gaps between your teeth,
                             we offer solutions such as veneers and dental bonding to close the
                              spaces and create a more uniform smile.
                        </span>
                    </li>

                    <li className="flex items-start">
                        <CheckCircle className="text-[#EC95A4] w-8 h-8 mr-3" />
                        <span>
                        Stained or discoloured teeth – Whether your teeth are yellowed from 
                        ageing, coffee or smoking, we can provide professional teeth whitening
                         treatments to brighten your smile.
                        </span>
                    </li>

                    <li className="flex items-start">
                        <CheckCircle className="text-[#EC95A4] w-8 h-8 mr-3" />
                        <span>
                        Chipped or cracked teeth – Chips and cracks can affect both the look and 
                        function of your teeth. Our cosmetic dentist in MSDP can repair these 
                        imperfections with composite bonding or porcelain veneers, restoring the
                         natural appearance of your teeth.
                        </span>
                    </li>

                    <li className="flex items-start">
                        <CheckCircle className="text-[#EC95A4] w-8 h-8 mr-3" />
                        <span>
                        Misaligned or crooked teeth – For patients who are self-conscious about
                         crooked or misaligned teeth, we offer a range of orthodontic treatments,
                          including traditional braces, Invisalign® and other alignment solutions.
                        </span>
                    </li>

                    <li className="flex items-start">
                        <CheckCircle className="text-[#EC95A4] w-8 h-8 mr-3" />
                        <span>
                        Worn or uneven teeth – If your teeth are worn down due to grinding or 
                        other factors, we can reshape them with veneers or crowns for a more 
                        balanced smile.
                        </span>
                    </li>

                    <li className="flex items-start">
                        <CheckCircle className="text-[#EC95A4] w-8 h-8 mr-3" />
                        <span>
                        Worn or uneven teeth – If your teeth are worn down due to grinding or 
                        other factors, we can reshape them with veneers or crowns for a more 
                        balanced smile.


                        </span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="text-[#EC95A4] w-8 h-8 mr-3 mb-36" />
                        <span>
                        Missing teeth – Missing teeth can impact both the aesthetics and 
                        functionality of your mouth. We offer dental implants and bridges 
                        to restore the look and feel of a full set of teeth.
                        </span>
                    </li>
                </ul>
            </div>
            {CustomComponent && <CustomComponent />}
            <Cosmetic4 CustomComponent={Cosmetic5}/>

        </div>
    );
}
