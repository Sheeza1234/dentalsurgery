import Head from 'next/head';
import Achievements from '../achievements/index';
import MeetTheTeam from '../team';

export default function DentalPage() {
  const services = [
    { title: 'Get a Smile Makeover', image: '/smile_make.jpg' },
    { title: 'All on 4', image: '/allon4.jpg' },
    { title: 'Fill the Gap in My Smile', image: '/gap_in_smile.jpg' },
    { title: 'Treat My Toothache', image: '/treat_my_tooth.jpg' },
    { title: 'Family Dentistry', image: '/family_dentistry.jpg' },
    { title: 'Early Orthodontic Treatment', image: '/early_ortho.jpg' },
    { title: 'Treat My Tooth Discoloration', image: '/tooth_discolration.jpg' },
    { title: 'Dental Checkup and Clean', image: '/dentures.jpg' }
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
          className="text-2xl sm-text-5xl md:text-6xl font-semibold "
        >
          Dedicated to Your<span className='text-[#EC95A4]'> Smile</span>, Committed to Oral Health
        </h1>
        <p
          style={{ fontFamily: 'OptimaModoki, sans-serif' }}
          className=" left-0 right-0 px-4  justify-center mt-8 text-sm sm:text-2xl md:text-3xl max-w-[90%] mx-auto"
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
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-96 rounded-lg overflow-hidden shadow-lg border-2 border-[#1C4C57] text-white"
              style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              {/* Dark Overlay for Image */}
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>

              {/* Colored Text Box at Bottom */}
              <div className="absolute w-1/2 bottom-0 left-1/2 -translate-x-1/2 rounded-lg mb-4 w-2/3 flex items-center justify-center bg-[#C7EFFF] bg-opacity-90 text-white text-center p-3">
                <h2 className="font-semibold text-xl text-[#1C4C57] sm:text-lg">{service.title}</h2>
              </div>


            </div>
          ))}
        </div>
      </main>

      <MeetTheTeam />
    </div>
  );
}
