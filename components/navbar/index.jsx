import Image from "next/image";
import { useState } from "react";
import { FaFacebookF, FaYoutube, FaInstagram, FaGoogle, FaClock, FaEnvelope, FaCalendarAlt, FaLocationArrow,FaBars,FaTimes,FaPlus,FaPhone } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const socialLinks = [
    { icon: <FaFacebookF color="blue" />, link: "https://facebook.com" },
    { icon: <FaYoutube color="red" />, link: "https://linkedin.com" },
    { icon: <FaInstagram color="pink" />, link: "https://youtube.com" },
    { icon: <FaGoogle className="text-[#D44638]" />, link: "https://twitter.com" },
  ];
 const navLinks = [
    { label: "Dental Services", hasDropdown: true },
    { label: "Team", hasDropdown: false },
    { label: "Our Practice", hasDropdown: false },
    { label: "Patient", hasDropdown: true },
    { label: "Contact", hasDropdown: false },
  ];
  return (
    <div>
      <div className="w-full overflow-hidden">
      {/* Top Info Bar */}
      <header className="fixed bg-[#1C4C57] text-white py-2 w-screen z-50 top-0 left-0 ">
        <div className="flex flex-wrap items-center justify-center md:gap-12 md:justify-between lg:justify-center px-4">

          {/* Address */}
          <div className="flex items-center space-x-1 text-center md:text-left">
            <FaLocationArrow className="text-[#C7EFFF] text-lg" />
            <span className="text-sm md:text-lg">223 Main Street, Bacchus Marsh Vic 3340</span>
          </div>

          {/* Hours */}
          <div className="flex items-center space-x-1 text-center">
            <FaClock className="text-[#C7EFFF] text-lg" />
            <span className="text-sm md:text-lg">Mon-Fri 9:00 am - 5:00 pm   Sat 9:00 am-1:00 pm</span>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-1 text-center">
            <FaEnvelope className="text-[#C7EFFF] text-lg" />
            <a href="mailto:admin@mainstreetdental.com.au" className="text-sm md:text-lg hover:text-blue-400">
              admin@mainstreetdental.com.au
            </a>
          </div>

          {/* Request */}
          <div className="flex items-center space-x-1 text-center">
            <FaCalendarAlt className="text-[#C7EFFF] text-lg" />
            <a href="#" className="text-sm md:text-lg hover:bg-[#93D9E6] hover:text-[#1C4C57] px-2 py-1 rounded">
              Request an Appointment
            </a>
          </div>
        </div>
      </header>

      {/* Social Icons ABOVE the button on right side */}
      <div className="hidden md:flex fixed top-[60px] right-4 flex-col items-end space-y-2 z-50">
        <div className="bg-[#C7EFFF] flex space-x-2 p-2 rounded-md shadow">
          {socialLinks.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-gray-100 transition text-xl">
              {item.icon}
            </a>
          ))}
        </div>
        {/* Call Us button directly below icons */}
        <button className="bg-[#1C4C57] text-lg md:text-xl text-[#EC95A4] w-48 md:w-72 h-12 rounded hover:bg-[#93D9E6] hover:text-[#1C4C57] transition">
          Call Us Now (03) 5367 5355
        </button>
      </div>

      {/* Main Navbar */}
      <nav className="fixed top-[120px] left-0 w-screen bg-[#C7EFFF] z-50 py-3 px-4 flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src="/logo.png" alt="Logo" width={160} height={160} className="max-w-full" />
        </div>

        {/* Links */}
        <div className="hidden md:flex md:space-x-10 items-center mx-auto">
          {["Dental Services", "Team", "Our Practice", "Patient", "Contact"].map((item, index) => (
            <a key={index} href="#" className="hover:underline text-lg text-[#1C4C57]">{item}</a>
          ))}
        </div>
        <button onClick={() => setMenuOpen(true)} className="md:hidden text-3xl text-[#1C4C57]">
            <FaBars />
          </button>
         {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="bg-white w-4/5 max-w-sm h-full p-6 overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <Image src="/logo.png" alt="Logo" width={120} height={60} />
              <button onClick={() => setMenuOpen(false)} className="text-2xl text-[#1C4C57]">
                <FaTimes />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col space-y-6">
              {navLinks.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <a href="#" className="text-[#1C4C57] text-lg">
                    {item.label}
                  </a>
                  {item.hasDropdown && <FaPlus className="text-[#1C4C57]" />}
                </div>
              ))}
            </nav>

            {/* Footer Info */}
            <div className="mt-12 border-t pt-4 text-[#1C4C57] space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <FaPhone /> (03) 5367 5355
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope /> admin@mainstreetdental.com.au
              </div>
              <div className="flex items-start gap-2">
                <FaLocationArrow className="mt-1" />
                223 Main Street, Bacchus Marsh VIC 3340
              </div>
            </div>
          </div>
        </div>
      )}
      </nav>
    </div>
    </div>
  );
}
