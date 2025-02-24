import Head from 'next/head';
import Achievements from '../achievements/index';

export default function DentalPage() {
  const services = [
    { title: 'Get a Smile Makeover', image: '/A.png' },
    { title: 'All on 4', image: '/B.png' },
    { title: 'Fill the Gap in My Smile', image: '/C.png' },
    { title: 'Treat My Toothache', image: '/D.png' },
    { title: 'Family Dentistry', image: '/E.png' },
    { title: 'Early Orthodontic Treatment', image: '/F.png' },
    { title: 'Treat My Tooth Discoloration', image: '/G.png' },
    { title: 'Dental Checkup and Clean', image: '/H.png' }
  ];

  return (
    <div style={{ fontFamily: 'OptimaModoki, sans-serif' }}  className="bg-[#1C4C57] min-h-screen flex flex-col items-center">
      <Head>
        <title>MSDP - Amazing Smiles</title>
      </Head>

      {/* Header Section */}
      <header className="mt-12 text-center text-white px-4 sm:px-8 md:px-16">
        <h1
          style={{ fontFamily: 'OptimaModoki, sans-serif' }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold"
        >
          Dedicated to Your Smile, Committed to Oral Health
        </h1>
        <p
          style={{ fontFamily: 'OptimaModoki, sans-serif' }}
          className="mt-8 text-xl sm:text-2xl md:text-3xl max-w-[90%] mx-auto"
        >
          MSDP has proudly served the Bacchus Marsh community and the wider
          Moorabool Shire since 1942. Under the leadership of Dr. Saba Farooq
          since 2008, the practice has expanded its commitment to local residents.
          Dr. Farooq has been instrumental in bringing experienced dental specialists
          from Melbourne to Bacchus Marsh, ensuring that the community has access to
          expert care close to home under one roof.
        </p>
      </header>

      {/* Services Grid */}
      <main className="mt-12 w-full sm:w-[100%] px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg border-2 border-[#1C4C57] text-white"
              style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              {/* Dark Overlay for Image */}
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>

              {/* Colored Text Box at Bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-4 w-1/2 flex items-center justify-center bg-[#C7EFFF] bg-opacity-90 text-white text-center p-3">
                <h2 className="font-semibold text-xl text-[#1C4C57] sm:text-lg">{service.title}</h2>
              </div>


            </div>
          ))}
        </div>
      </main>

      <Achievements />
    </div>
  );
}
