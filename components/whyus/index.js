import DentalPage from '../dental/index'
export default function Whyus() {
    return (<div>
      <div style={{ fontFamily: 'OptimaModoki, sans-serif' }} className="bg-[#93D9E6] min-h-screen flex flex-col items-center">
        {/* Main Header */}
        <section className="text-center py-16" >
          <h1 className="text-8xl font-bold text-[#1C4C57]">Why Choose Us?</h1>
        </section>
  
        {/* Description Section */}
        <section className="px-6 text-center max-w-[1800px]">
          <p className="text-3xl leading-relaxed text-[#1C4C57]" >
            At Main Street Dental Practice (MSDP), we prioritise more than just healthy{' '}
            <span className="text-[#EC95A4] font-semibold">smiles</span>; we focus on personalised care tailored to each
            patient’s needs. Our team is committed to creating a comfortable, welcoming environment while using the latest
            technology and techniques to ensure the highest quality{' '}
            <span className="text-[#EC95A4] font-semibold">dental care</span>. We believe in education and empowerment,
            striving to inform our patients about their <span className="text-[#EC95A4] font-semibold">oral health</span>{' '}
            and empower them to make informed decisions. With a dedication to excellence and a{' '}
            <span className="text-[#EC95A4] font-semibold">compassionate</span> approach, we aim to make every visit to Main
            Street Dental Practice (MSDP) dentist an exceptional{' '}
            <span className="text-[#EC95A4] font-semibold">experience</span>.
          </p>
  
          {/* Know More Button */}
          <div className="my-8">
            <button style={{ fontFamily: 'OptimaModoki, sans-serif' }} className="bg-[#1C4C57] text-white text-3xl font-semibold py-2 px-6 rounded hover:bg-[#C7EFFF] hover:text-[#1C4C57]">
              KNOW MORE ABOUT US
            </button>
          </div>
        </section>
  
        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center px-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800">A comfortable and pain-free experience</h3>
            <p className="text-gray-600 mt-2">
              Embark on a dental care journey like no other at our East Bentleigh dental clinic, with an expert team
              dedicated to ensuring your visit is comfortable and pain-free.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Flexible payment options to suit your needs</h3>
            <p className="text-gray-600 mt-2">
              Unlock the smile of your dreams with our flexible payment options, tailored to suit your needs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">A full range of professional dentistry services</h3>
            <p className="text-gray-600 mt-2">
              From routine check-ups to advanced treatments, our dentists in Bentleigh East will ensure your dental needs
              are met with expertise and personalised attention.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">A team of highly experienced dentists</h3>
            <p className="text-gray-600 mt-2">
              Our team ensures seamless communication and personalised care that transcends linguistic barriers for a truly
              inclusive dental experience.
            </p>
          </div>
        </section>
  
        {/* Emergency Section */}
        <section className="bg-[#1C4C57] rounded-3xl w-[1400px] h-[170px] text-center py-10 mb-8 mt-16  text-[#93D9E6]">
        <h2 className="text-6xl font-bold" style={{ fontFamily: 'Abnes, sans-serif' }}>
  EMERG<span className="ml-2">ENCY</span> CA<span className="ml-2">RE</span>
</h2>

          <p className="ml-24 mt-4 text-4xl w-[1200px]  ">
            Do You Have A Dental Emergency? Call Us Immediately On (03) 5367 5355<br />
            {/* <span className="font-semibold">(03) 5367 5355</span> */}
          </p>
        </section>
  
        {/* Footer */}
        <footer className="bg-[#1C4C57] text-white py-4 w-[400px] rounded-lg text-center mb-10 hover:bg-[#C7EFFF] hover:text-[#1C4C57]">
          <p className="text-2xl ">Call Us Now (03) 5367 5355</p>
        </footer>
       
      </div>
      <DentalPage/>
      </div>
    );
  }
  