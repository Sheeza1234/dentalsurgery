import Head from 'next/head';
import Achievements from '../achievements/index'

export default function DentalPage() {
  return (
    <div>
      <div className="bg-[#1C4C57] min-h-screen flex flex-col items-center">
        <Head>
          <title>MSDP - Amazing Smiles</title>
        </Head>

        {/* Header Section */}
        <header className="mt-16 text-center text-white">
          <h1 style={{ fontFamily: 'OptimaModoki, sans-serif' }} className="text-6xl font-semibold">
            Dedicated to Your Smile, Committed to Oral Health
          </h1>
          <p style={{ fontFamily: 'OptimaModoki, sans-serif' }} 
             className="mt-16 text-3xl text-center max-w-[80%] mx-auto">
            MSDP has proudly served the Bacchus Marsh community and the wider 
            Moorabool Shire since 1942. Under the leadership of Dr. Saba Farooq 
            since 2008, the practice has expanded its commitment to local residents.
            Dr. Farooq has been instrumental in bringing experienced dental specialists
            from Melbourne to Bacchus Marsh, ensuring that the community 
            has access to expert care close to home under one roof.
          </p>

        </header>

        {/* Grid Section */}
        <main className="mt-16 w-[90%]" style={{ fontFamily: 'OptimaModoki, sans-serif' }} >
          <div className="grid grid-cols-4 gap-8  mb-6">
            {/* Section 2 */}
            <div className="bg-white text-center py-2 w-36 h-12 shadow-lg rounded-md">
              <h2 className="font-bold text-2xl ">Section 2</h2>
            </div>

            {/* Section 3 */}
            <div className="bg-white text-center py-2 w-36 h-12 shadow-lg rounded-md">
              <h2 className="font-bold text-2xl">Section 3</h2>
            </div>

            {/* Section 4 */}
            <div className="bg-white text-center py-2 w-36 h-12 shadow-lg rounded-md">
              <h2 className="font-bold text-2xl">Section 4</h2>
            </div>

            {/* Section 5 */}
            <div className="bg-white text-center py-2 w-36 h-12 shadow-lg rounded-md">
              <h2 className="font-bold text-2xl">Section 5</h2>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {/* Smile MakeOver */}
            <div className="bg-white text-center w-96 py-8 h-96 shadow-lg flex flex-col justify-end">
              <h2 className="font-semibold text-2xl mb-4">Smile MakeOver</h2>
            </div>

            {/* All in 4 */}
            <div className="bg-white text-center w-96 py-8 h-96 shadow-lg flex flex-col justify-end">
              <h2 className="font-semibold text-2xl mb-4">All in 4</h2>
            </div>

            {/* Dental Veneers */}
            <div className="bg-white text-center w-96 py-8 h-96 shadow-lg flex flex-col justify-end">
              <h2 className="font-semibold text-2xl mb-4">Dental Veneers</h2>
            </div>

            {/* Implants */}
            <div className="bg-white text-center w-96 py-8 h-96 shadow-lg flex flex-col justify-end">
              <h2 className="font-semibold text-2xl mb-4">Implants</h2>
            </div>
          </div>
        </main>
      </div>
      <Achievements />
    </div>
  );
}
