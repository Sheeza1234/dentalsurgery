import Image from "next/image";
import Cosmetic2 from "./section2";
import Cosmetic3 from "./section3";

const Cosmetic1 = ({CustomComponent}) => {
  return (
    <div>
    <section className="bg-[#2F7584] text-white" style={{ fontFamily: "OptimaModoki, sans-serif" }}>
      <div className="w-full max-w-screen-6xl mx-auto h-[300px] overflow-hidden">
        <Image
          src="/section1.png"
          alt="section1"
          layout="intrinsic" // Better layout option
          width={5000} 
          height={800} // Maintains a low height while keeping width large
        />
      </div>

      {/* Title Section */}
      <h1   className="mt-12 text-7xl sm:text-5xl md:text-7xl font-semibold text-center">
        Cosmetic dentistry you’ll <br />
        <span className="text-[#F77F94]">Smile About!</span>
      </h1>

      {/* Divider */}
      <div className="w-20 border-t-2 border-white mx-auto my-6"></div>

      {/* Content Section */}
      <p className="text-2xl text-center max-w-7xl mx-auto leading-relaxed">
        Your smile, for better or worse, is one of your most prominent facial
        features. It’s often the first thing people notice about you when they’re
        introduced to you, so for most people, it’s natural to want a smile that is
        beautiful as well as healthy. With advances in dental techniques, there are
        now many cosmetic dental treatments available to help boost your confidence
        and give you a smile that can make you look and feel your best.
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
    <Cosmetic2 CustomComponent={Cosmetic3}/>
    </div>
  );
};

export default Cosmetic1;
