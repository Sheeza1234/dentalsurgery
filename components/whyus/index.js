import DentalPage from '../dental/index';

export default function Whyus() {
  return (
    <div>
      <div
        style={{ fontFamily: 'OptimaModoki, sans-serif' }}
        className="w-full bg-[#93D9E6] min-h-screen flex flex-col items-center px-4"
      >
        {/* Main Header */}
        <section className="text-center py-16 w-full max-w-screen-xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#1C4C57] break-words leading-tight">
            Why Choose Us?
          </h1>
        </section>

        {/* Description Section */}
        <section className="px-4 sm:px-6 text-center max-w-screen">
          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl leading-relaxed text-[#1C4C57] break-words">
            At Main Street Dental Practice (MSDP), we prioritise more than just healthy
            <span className="text-[#EC95A4] font-semibold"> smiles</span>; we focus on personalised care tailored to each patient’s needs. Our team is committed to creating a comfortable, welcoming environment while using the latest technology and techniques to ensure the highest quality
            <span className="text-[#EC95A4] font-semibold"> dental care</span>. We believe in education and empowerment, striving to inform our patients about their
            <span className="text-[#EC95A4] font-semibold"> oral health</span> and empower them to make informed decisions. With a dedication to excellence and a
            <span className="text-[#EC95A4] font-semibold"> compassionate</span> approach, we aim to make every visit to Main Street Dental Practice (MSDP) dentist an exceptional
            <span className="text-[#EC95A4] font-semibold"> experience.</span>
          </p>
          <div className="my-8">
            <button className="bg-[#1C4C57] text-white text-xl sm:text-2xl font-semibold py-2 px-6 rounded hover:bg-[#C7EFFF] hover:text-[#1C4C57]">
              KNOW MORE ABOUT US
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="text-center w-full max-w-screen px-4">
          {[
            {
              title: 'A comfortable and pain-free experience',
              text: 'Our team ensures seamless communication and personalised care that transcends linguistic barriers for a truly inclusive dental experience.',
            },
            {
              title: 'Flexible payment options to suit your needs',
              text: 'Embark on a dental care journey like no other at our East Bentleigh dental clinic, with an expert team dedicated to ensuring your visit is comfortable and pain-free.',
            },
            {
              title: 'A full range of professional dentistry services',
              text: 'Unlock the smile of your dreams with our flexible payment options, tailored to suit your needs.',
            },
            {
              title: 'A team of highly experienced dentists',
              text: 'From routine check-ups to advanced treatments, our dentists in Bentleigh East will ensure your dental needs are met with expertise and personalised attention.',
            },
          ].map((feature, index) => (
            <div key={index} className="px-2 sm:px-4 py-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 break-words">
                {feature.title}
              </h3>
              <p className="text-gray-700 mt-2 text-sm sm:text-xl md:text-2xl break-words">
                {feature.text}
              </p>
            </div>
          ))}
        </section>

        {/* Emergency Section */}
        <section className="bg-[#1C4C57] rounded-3xl w-[600px] lg:max-w-screen-xl text-center py-10 mt-16 text-[#93D9E6] px-4">
          <h2
            style={{ fontFamily: 'Abnes, sans-serif' }}
            className="text-lg sm:text-2xl md:text-6xl font-bold break-words"
          >
            EMERG<span className="ml-2">ENCY</span> C
            <span className="ml-2">
              A<span className="ml-2">RE</span>
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-xl md:text-2xl leading-relaxed">
            Do You Have A Dental Emergency? Call Us Immediately On{' '}
            <span className="font-semibold">(03) 5367 5355</span>
          </p>
        </section>

        {/* Footer */}
        <footer className="bg-[#1C4C57] text-white py-4 w-full max-w-md mb-12 rounded-lg text-center mt-10 hover:bg-[#C7EFFF] hover:text-[#1C4C57] px-4">
          <p className="text-lg sm:text-xl md:text-2xl">Call Us Now (03) 5367 5355</p>
        </footer>
      </div>

      {/* Dental Section */}
      <DentalPage />
    </div>
  );
}
