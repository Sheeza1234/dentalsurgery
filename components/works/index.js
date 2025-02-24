"use client";
import Whyus from '../whyus/index';
import { useRouter } from 'next/navigation';
import dynamic from "next/dynamic";

const MovingBar = dynamic(() => import("@/components/movingbar"), { ssr: false });

export default function HowWeHelp() {
    const cards = [
        { title: 'Cosmetic Dentistry', image: '/d1.jpg',slug:'cosmetic_dentistry' },
        { title: 'Dental Implants', image: '/d2.jpg',slug:'dental-implants' },
        { title: 'Orthodontics', image: '/d3.jpg',slug:'orthodontics' },
        { title: 'Dentures', image: '/d4.jpg',slug:'dentures' },
        { title: 'Brxism TMJ and Injectables', image: '/doc4.png',slug:'brxism' },
        { title: 'Children Dental Care', image: '/doc5.png',slug:'children-care' },
        { title: 'Teeth Grinding', image: '/doc6.png',slug:'teeth-grinding' },
        { title: 'Restorative Dentistry', image: '/doc7.png',slug:'restorative-dentisry' },
        { title: 'Sleep Apnoea', image: '/doc8.png',slug:'sleep-apnoea' },
        { title: 'Sleep Dentistry', image: '/doc9.png',slug:'sleep-dentisry' },
        { title: 'Senior Dental Care', image: '/doc10.png',slug:'senior-dental' },
        { title: 'Wisdom Teeth Extraction', image: '/doc11.png',slug:'wisdom-teeth' },
        { title: 'Emergency Dentistry', image: '/doc12.png',slug:'emergency-dentisry' },
        { title: 'Bad Breath', image: '/doc13.png',slug:'bad-breath' },
        { title: 'General Dentistry', image: '/doc15.png',slug:'general-dentisry' }
    ];
    const router=useRouter();

    return (
        <div>
            <MovingBar />
            <div
                style={{ fontFamily: 'Inter' }}
                className="bg-[#C7EFFF] min-h-screen flex flex-col items-center px-4 sm:px-8"
            >
                <div className="text-center mt-8">
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl text-[#1C4C57] font-semibold">
                        How We Can <span className="text-[#EC95A4]">Help?</span>
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl max-w-7xl mx-auto text-[#1C4C57]">
                        Our MSDP provides comprehensive care to meet the needs of patients of all ages.
                        We offer a full range of services from routine check-ups to advanced treatments, ensuring
                        everyone leaves our clinic with a smile.
                    </p>
                </div>

                {/* Cards Section */}
                <div className="mt-12 w-full max-w-[2000px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {cards.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-96  overflow-hidden shadow-lg  text-white"
              style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => router.push(`/services/${service.slug}`)}
            >
              {/* Dark Overlay for Image */}
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>

              {/* Colored Text Box at Bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#1C4C57] rounded-full mb-4  flex items-center justify-center text-white text-center p-3">
                <h2 className="font-semibold text-lg text-[#C7EFFF] sm:text-md">{service.title}</h2>
              </div>


            </div>
          ))}
                    </div>
                </div>

                {/* View All Services Button */}
                <div className="mt-12 flex justify-center w-full mb-12">
                    <button
                        className="text-white text-2xl sm:text-3xl bg-[#1C4C57] py-3 px-6 rounded-md 
                                   hover:bg-[#93D9E6] hover:text-[#1C4C57] transition duration-300"
                    >
                        View All Services
                    </button>
                </div>
            </div>
            <Whyus />
        </div>
    );
}
