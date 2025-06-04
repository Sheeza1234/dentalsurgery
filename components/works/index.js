"use client";
import Whyus from '../whyus/index';
import { useRouter } from 'next/navigation';
import dynamic from "next/dynamic";

const MovingBar = dynamic(() => import("@/components/movingbar"), { ssr: false });

export default function HowWeHelp() {
    const cards = [
        { title: 'Cosmetic Dentistry', image: '/cosmetic_densitry.jpg',slug:'cosmetic_dentistry' },
        { title: 'Dental Implants', image: '/dental_implant.jpg',slug:'dental-implants' },
        { title: 'Orthodontics', image: '/ortho.jpg',slug:'orthodontics' },
        {title:'Invisalign',image:'/insialign.jpg',slug:'insialign'},
        { title: 'Dentures', image: '/dentures.jpg',slug:'dentures' },
        { title: 'Brxism TMJ and Injectables', image: '/brixsim.jpg',slug:'brxism' },
        { title: 'Children Dental Care', image: '/childrendental.jpg',slug:'children-care' },
        { title: 'Teeth Grinding', image: '/restoric_densitry.jpg',slug:'teeth-grinding' },
        { title: 'Restorative Dentistry', image: '/teeth_grinding.jpg',slug:'restorative-dentisry' },
        { title: 'Sleep Apnoea', image: '/sleepapnea.jpg',slug:'sleep-apnoea' },
        { title: 'Sleep Dentistry', image: '/sleep_dentistry.jpg',slug:'sleep-dentisry' },
        { title: 'Senior Dental Care', image: '/senior_dentalcare.jpg',slug:'senior-dental' },
        { title: 'Wisdom Teeth Extraction', image: '/wisdom_teeth.jpg',slug:'wisdom-teeth' },
        { title: 'Emergency Dentistry', image: '/emergency_care.jpg',slug:'emergency-dentisry' },
        { title: 'Bad Breath', image: '/wisdom.jpg',slug:'bad-breath' },
        { title: 'General Dentistry', image: '/general_dentistry.jpg',slug:'general-dentisry' }
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
                    <h1 className="text-2xl sm:text-6xl lg:text-8xl text-[#1C4C57] font-semibold">
                        How We Can <span className="text-[#EC95A4]">Help?</span>
                    </h1>
                    <p className="mt-6 text-sm sm:text-xl max-w-7xl mx-auto text-[#1C4C57]">
                        Our MSDP provides comprehensive care to meet the needs of patients of all ages.
                        We offer a full range of services from routine check-ups to advanced treatments, ensuring
                        everyone leaves our clinic with a smile.
                    </p>
                </div>

                {/* Cards Section */}
                <div className="mt-12 max-w-[1500px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {cards.map((service, index) => (
            <div
              key={index}
              className="relative w-[350px] h-72  overflow-hidden shadow-lg  text-white"
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
                        className="text-white text-xl sm:text-4xl bg-[#1C4C57] py-3 px-6 rounded-md 
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
