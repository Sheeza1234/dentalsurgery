import Image from "next/image";
import Cosmetic4 from "./section4";
import Cosmetic3 from "./section3";

const Cosmetic1 = ({CustomComponent}) => {
  return (
    <div>
    <section className="bg-[#2F7584] text-white" style={{ fontFamily: "OptimaModoki, sans-serif" }}>
      <div className="w-full max-w-screen-6xl mx-auto h-[300px] overflow-hidden">
        <Image
          src="/section1.jpg"
          alt="section1"
          layout="intrinsic" // Better layout option
          width={5000} 
          height={800} // Maintains a low height while keeping width large
        />
      </div>

      {/* Title Section */}
      <h1   className="mt-12 text-8xl sm:text-5xl md:text-8xl font-semibold text-center">
        All On  <span className="relative inline-block">
    4
    <span className="flex items-center justify-center w-6 h-6 rounded-full text-white text-4xl absolute -top-1 -right-8">
      ®
    </span>
  </span><br />
        <h1 className="text-7xl">Say Yes to a Life<span className="ml-4 text-[#F77F94]">Free</span>  from Dentures<br/> and Dental Troubles Today</h1>
      </h1>

      {/* Divider */}
      <div className="w-20 border-t-2 border-white mx-auto my-6"></div>

      {/* Content Section */}
      <p className="text-2xl text-center max-w-7xl mx-auto leading-relaxed">
Being a long-lasting and reliable solution, All-on-4® dental implants can help you stop worrying about loose dentures slipping or the fear of breaking or decaying teeth when eating or smiling in public.
The All-on-4® treatment is an advanced dental restoration that provides a fixed, natural-looking alternative to removable dentures. With this technique, all teeth are replaced using just four strategically placed implants, giving you a stable foundation for a confident smile.
Thanks to innovative technology and high-quality materials, All-on-4® overcomes common challenges such as bone deficiencies, often reducing or eliminating the need for invasive bone grafting.
Compared to traditional methods, All-on-4® dental implants not only require fewer implants but also deliver a proven success rate of 98%*. They make ongoing care simpler, with easier cleaning and maintenance than conventional dentures.
Like traditional dental implants, All-on-4® uses small titanium fixtures inserted into the jawbone. Instead of requiring an implant for every tooth, only four implants—two at the front and two at the back—secure a full arch of prosthetic teeth, restoring both function and appearance.
      </p>

      {/* Additional Information */}
      <p className="text-2xl text-center max-w-7xl mx-auto leading-relaxed mt-6">
        Whether you require dental implants to give you back the full function of your
        mouth or porcelain veneers to provide a completely new look, our acclaimed
        dentists at MSDP can help you improve your smile and increase your confidence.
        We provide cosmetic dentistry in Bacchus Marsh for residents in suburbs such
        as Gisborne, Maddingley, Darley, Pentland Hills, 
        Ballan, Ingliston, Morning, Coimadai, Melton West, Melton South, Toolern Vale,
        Marwan, Rowsley, Glenmore, Balliang, Balliang East, Quandong, Eynesbury, Weir 
        Views, Mount Cottrell, Dales Creek, Fiskville, Myrniong, Greendale, Mount Egerton, 
        Gordon, Bunding, Colbrook, Newbury, Spargo Creek, Ballengarook, Korobeit, Blackwood, 
        Barrys Reef, Newbury, Blakeville, Aintree, Rockbank, Plumpton, among other surrounding areas.
      </p>
      <div className="flex justify-center mt-12">
          <button className="text-xl md:text-2xl mb-12 text-[#1C4C57] w-48 md:w-64 h-16 bg-[#C7EFFF] rounded-md hover:bg-[#93D9E6] hover:text-[#EC95A4] transition">
            Contact us
          </button>
        </div>
    </section>
    {CustomComponent && <CustomComponent />}
    <Cosmetic3 CustomComponent={Cosmetic4}/>
    </div>
  );
};

export default Cosmetic1;
