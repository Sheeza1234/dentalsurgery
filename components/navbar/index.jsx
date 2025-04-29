import Image from "next/image";
import { FaFacebookF,FaYoutube,FaInstagram,FaGoogle,FaClock, FaEnvelope, FaCalendarAlt,FaLocationArrow } from "react-icons/fa";
export default function Navbar(){

    const socialLinks = [
      { icon: <FaFacebookF color="blue" />, link: "https://facebook.com" },
      { icon: <FaYoutube color="red" />, link: "https://linkedin.com" },
      { icon: <FaInstagram color="pink" />, link: "https://youtube.com" },
      { icon: <FaGoogle className="text-[#D44638]" />, link: "https://twitter.com" },
    ];
   
    return(
        <div>
              <header className=" fixed bg-[#1C4C57] text-white py-2  top-0 left-0 w-full z-50">
                      <div className="flex flex-wrap justify-center max-w-8xl">
                        {/* Address Section */}
                        <div className="flex items-center space-x-2 ml-16 md:mr-[660px]">
                          <FaLocationArrow className="text-[#C7EFFF] text-lg"/>
                          <span className="text-sm md:text-lg">223 Main Street, Bacchus Marsh Vic 3340</span>
                        </div>
            
                        {/* Business Hours */}
                        {/* <div className="hidden md:flex items-center space-x-2">
            
                        </div> */}
            
                        {/* Contact Section */}
                        <div className="flex items-center space-x-11">
      <div className="flex  items-center space-x-2">
        <FaClock className="text-[#C7EFFF] text-lg" />
        <span className="text-sm md:text-lg">Mon to Fri 9:00 am - 5:00 pm</span>
      </div>
      
      <div className="md:mr-48 flex items-center space-x-2">
        <FaEnvelope className="text-[#C7EFFF] text-lg" />
        <a href="#" className="text-sm md:text-lg hover:text-blue-400">
          admin@mainstreetdental.com.au
        </a>
      </div>

      <div className="flex items-center space-x-2">
        <FaCalendarAlt className="text-[#C7EFFF] text-lg" />
        <a href="#" className="text-sm md:text-lg hover:bg-[#93D9E6] hover:text-[#1C4C57] px-2 py-1 rounded">
          Request an Appointment
        </a>
      </div>
    </div>
                      </div>
                    </header>
            
                    {/* Social Media Links */}
                    <div className="fixed top-[60px] right-8 justify-end w-full bg-[#C7EFFF] flex flex-row space-x-2">
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow hover:bg-gray-100 transition text-xl text-gray-700"
        >
          {item.icon}
        </a>
      ))}
    </div>
            
            
            
                    {/* Navbar */}
                    <nav className="fixed top-[60px] mt-12 left-0 w-full flex items-center justify-between px-6 py-4 z-50 bg-[#C7EFFF]">

                      {/* Logo */}
                      <Image src="/logo.png" alt="Logo" width={180} height={180} className="max-w-full" />
            <div className="md:flex-grow"></div>
                      {/* Navigation Links */}
                      <div className="hidden md:ml-96 md:flex space-x-10 items-center">
                        {["Dental Services", "Team", "Our Practice", "Patient", "Contact"].map((item, index) => (
                          <a key={index} href="#" className="hover:underline text-lg text-[#1C4C57]">{item}</a>
                        ))}
                      </div>
            
                      {/* Call Us Button */}
                      <button className="bg-[#1C4C57] md:ml-12 text-lg md:text-xl text-[#EC95A4] w-48 md:w-72  h-12 rounded hover:bg-[#93D9E6] hover:text-[#1C4C57]">
                        Call Us Now (03) 5367 5355
                      </button>
                    </nav>
            
            
        </div>
    )
}