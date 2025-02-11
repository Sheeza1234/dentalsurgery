import Image from "next/image";
import Welcome from '../components/welcome/index';
export default function Home() {
  return (
    <div>
      <div className="bg-[#C7EFFF] w-full">
        {/* Top Header */}
        <header className="bg-[#1C4C57] text-white py-2 fixed top-0 left-0 w-full z-50">

          <div className="flex max-w-9xl items-center ">
            <Image
              src="/lication.png"
              alt="Location Icon"
              width={20}
              height={20}
              className="mr-2 ml-24"
            />
            <a className="text-lg">223 Main Street, Bacchus Marsh Vic 3340</a>
            <div className="ml-72"></div>
            <Image
              src="/clock.png"
              alt="Clock Icon"
              width={20}
              height={20}
              className="ml-96 mr-2"
            />
            <a className="text-lg">Mon to Fri 9:00 am to 5:00 pm |</a>
            <Image
              src="/message.png"
              alt="Message Icon"
              width={20}
              height={20}
              className="mr-2 ml-4"
            />
            <a
              href="#"
              className="text-lg no-underline text-white-400 hover:text-blue-400"
            >
              admin@mainstreetdental.com.au |
            </a>
            <Image
              src="/appointment.png"
              alt="Appointment Icon"
              width={20}
              height={20}
              className="mr-2 ml-4"
            />
            <a
              href="#"
              className="text-lg no-underline text-white-400 hover:bg-[#93D9E6] hover:text-[#1C4C57]"
            >
              Request an Appointment
            </a>
          </div>
        </header>
        <div className="fixed top-[60px] mr-2  w-72 h-[60px] rounded right-4 flex items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white ml-4 rounded-full shadow hover:bg-gray-100 aspect-square flex items-center justify-center"
          >
            <Image src="/facebook.png" alt="facebook" width={55} height={40} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full shadow hover:bg-gray-100 aspect-square flex items-center justify-center"
          >
            <Image
              src="/linkedin-removebg-preview.png"
              alt="linkedin"
              width={55}
              height={40}
            />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full shadow hover:bg-gray-100 aspect-square flex items-center justify-center"
          >
            <Image src="/youtube.png" alt="youtube" width={55} height={40} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full shadow hover:bg-gray-100 aspect-square flex items-center justify-center"
          >
            <Image src="/twitter.png" alt="twitter" width={55} height={40} />
          </a>
        </div>

        {/* Navbar */}
        <nav className="text-white flex justify-between mt-[110px] items-center px-6 py-4 fixed">
          <Image src="/logo.png"  alt="Logo" width={300} height={300} />
          <div className="flex gap-12">
            <a href="#" className="ml-[780px] hover:underline text-[#1C4C57]">
              Dental Services
            </a>
            <a href="#" className="hover:underline text-lg text-[#1C4C57]">
              Team
            </a>
            <a href="#" className="hover:underline text-lg text-[#1C4C57]">
              Our Practice
            </a>
            <a href="#" className="hover:underline text-lg text-[#1C4C57]">
              Patient
            </a>
            <a href="#" className="hover:underline text-lg text-[#1C4C57] mr-2">
              Contact
            </a>
          </div>
          <button className="bg-[#1C4C57] text-xl text-[#EC95A4] ml-10 w-72 h-[40px] rounded hover:bg-[#93D9E6] hover:text-[#1C4C57]">
            Call Us Now (03) 5367 5355
          </button>
        </nav>

        {/* Main Content */}
        <main className="flex flex-col  px-6">
          <div className="flex flex-col mt-72 md:flex-row gap-8 md:gap-12">
            {/* Hugging Image with Animated Circle */}
            <div
              className="bg-[#1C4C57] ml-64 rounded-full w-1/3 h-full flex items-center justify-center animate-moving-circle"
            >
              <Image
                src="/hugging.png"
                alt="Team hugging"
                width={650}
                height={650}
                className="rounded-full"
              />
            </div>

            {/* Text Content */}
            <div className="text-left mt-48 ml-8">
              <Image
                src="/gentle.png"
                alt="Gentle Dental"
                width={900}
                height={900}
                className="rounded-full"
              />
              <h1 className="text-7xl text-[#1C4C57] mt-8">
                Anxiety and pain
                <span className="text-7xl text-[#EC95A4]"> free</span>
                <br />
                experience
              </h1>

              <div className="bg-[#C7EFFF] ml-4 h-[70px] p-2 w-[900px] mb-96 flex justify-center md:justify-start gap-8 mt-6 overflow-hidden">
                <div className="logo-container">
                  <div className="logo-wrapper">
                    <img src="medicare.png" alt="Medicare" className="w-36" />
                    <img src="/medi.png" alt="Medibank" className="w-36" />
                    <img src="/somno.png" alt="Somno" className="w-36" />
                    <img src="/aust.png" alt="Australian Gov" className="w-36" />
                    <img src="/irisipum.png" alt="Invisalign" className="w-36" />
                  </div>
                  <div className="logo-wrapper">
                    <img src="medicare.png" alt="Medicare" className="w-36" />
                    <img src="/medi.png" alt="Medibank" className="w-36" />
                    <img src="/somno.png" alt="Somno" className="w-36" />
                    <img src="/aust.png" alt="Australian Gov" className="w-36" />
                    <img src="/irisipum.png" alt="Invisalign" className="w-36" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <button style={{ fontFamily: 'OptimaModoki, sans-serif' }} className="mb-12 text-[#EC95A4] mt-12 ml-[900] w-[300px] h-24 text-3xl bg-[#1C4C57] justify-center py-2 px-4 rounded-md hover:bg-[#93D9E6] hover:text-[#1C4C57] transition">
          Book Now
        </button>
       

      </div>
      <Welcome />
    </div>
  );
}

// Tailwind Animation in tailwind.config.js
// Add the following configuration to your tailwind.config.js file:

/*
module.exports = {
  theme: {
    extend: {
      animation: {
        'moving-circle': 'move 3s infinite linear',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(50px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
*/
