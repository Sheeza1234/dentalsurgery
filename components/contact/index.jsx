"use client";

import Footer from '../footer/index'

export default function ContactSection() {
    return (
        <div>
            <div className="bg-[#93D9E6] flex flex-col items-center py-12 px-4">
                {/* Google Map Embed */}
                <div className="lg:w-[1400px] md:w-[1000px] flex justify-center mb-6">
                    <iframe
                        className="w-full max-w-[1400px] h-[200px] sm:h-[300px] md:h-[300px] lg:h-[600px] rounded-lg shadow-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9630577153161!3d-37.8136279797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577a5c88f4efb0b!2sMain%20Street%20Dental!5e0!3m2!1sen!2sus!4v1633066747222!5m2!1sen!2sus"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Header and Address */}
                <div className="flex flex-col items-center text-center px-4">
                    <h2 style={{ fontFamily: 'Abnes, sans-serif' }} className="text-[#1C4C57] text-lg sm:text-2xl md:text-5xl font-semibold">
                        MS<span className='ml-2'>DP</span> <span style={{ fontFamily: 'OptimaModoki, sans-serif' }} className="font-light text-lg sm:text-2xl md:text-4xl">
                            BACCHUS MARSH LOCALLY TRUSTED FAMILY OWNED DENTISTRY
                        </span>
                    </h2>
                    <p style={{ fontFamily: 'OptimaModoki, sans-serif' }} className=" text-[#1C4C57] text-lg sm:text-2xl md:text-4xl font-bold mt-2 lg:ml-36">
                        223 MAIN STREET BACCHUS MARSH VICTORIA 3340
                    </p>

                    {/* Get Directions Button */}
                    <button 
                        style={{ fontFamily: 'OptimaModoki, sans-serif' }} 
                        className="bg-[#1C4C57] lg:w-full text-md sm:text-xl md:text-3xl  max-w-[400px] text-[#93D9E6] px-6 py-2 mt-4 shadow-md hover:bg-[#C7EFFF] hover:text-[#1C4C57] transition-all duration-300"
                    >
                        GET DIRECTION
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
