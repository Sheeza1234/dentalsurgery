import Image from "next/image";
export default function Navbar(){
    return(
        <div>
              <header className=" fixed bg-[#1C4C57] text-white py-2  top-0 left-0 w-full z-50">
                      <div className="flex flex-wrap justify-center md:justify-between max-w-8xl mx-auto px-4">
                        {/* Address Section */}
                        <div className="flex items-center space-x-2">
                          <Image src="/lication.png" alt="Location Icon" width={20} height={20} />
                          <span className="text-sm md:text-lg">223 Main Street, Bacchus Marsh Vic 3340</span>
                        </div>
            
                        {/* Business Hours */}
                        <div className="hidden md:flex items-center space-x-2">
            
                        </div>
            
                        {/* Contact Section */}
                        <div className="flex items-center space-x-2">
                          <Image src="/clock.png" alt="Clock Icon" width={20} height={20} />
                          <span className="text-sm md:text-lg">Mon to Fri 9:00 am - 5:00 pm</span>
                          <Image src="/message.png" alt="Message Icon" width={20} height={20} />
                          <a href="#" className="text-sm md:text-lg hover:text-blue-400">admin@mainstreetdental.com.au</a>
                          <Image src="/appointment.png" alt="Appointment Icon" width={20} height={20} />
                          <a href="#" className="text-sm md:text-lg hover:bg-[#93D9E6] hover:text-[#1C4C57] px-2 py-1 rounded">
                            Request an Appointment
                          </a>
                        </div>
                      </div>
                    </header>
            
                    {/* Social Media Links */}
                    <div className="fixed top-[60px] right-4 flex flex-row space-x-2 z-50">
              {[
                { src: "/facebook.png", alt: "Facebook", link: "https://facebook.com" },
                { src: "/linkedin-removebg-preview.png", alt: "LinkedIn", link: "https://linkedin.com" },
                { src: "/youtube.png", alt: "YouTube", link: "https://youtube.com" },
                { src: "/twitter.png", alt: "Twitter", link: "https://twitter.com" },
              ].map((item, index) => (
                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.src} alt={item.alt} width="30" height="20" className="w-12 h-10 bg-white rounded-full shadow hover:bg-gray-100 transition" />
                </a>
              ))}
            </div>
            
            
            
                    {/* Navbar */}
                    <nav className="fixed top-[60px] mt-12 left-0 w-full flex items-center justify-between px-6 py-4  z-50">
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