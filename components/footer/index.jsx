// components/Footer.js
export default function Footer() {
    return (
      <footer style={{ fontFamily: 'OptimaModoki, sans-serif' }} className="bg-[#1C4C57] text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
          {/* Links */}
          <div>
            <h3 className="font-bold text-3xl text-[#93D9E6] mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#93D9E6] text-lg">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#93D9E6] text-lg">
                  Our Practice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#93D9E6] text-lg">
                  Patient
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#93D9E6] text-lg">
                  Sleep Dentistry
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#93D9E6] text-lg">
                  Senior’s Dental Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#93D9E6] text-lg">
                  Blog
                </a>
              </li>
            </ul>
          </div>
  
          {/* Services */}
          <div>
            <h3 className="font-bold text-3xl mb-4 text-[#93D9E6]">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#93D9E6] text-lg">
                  Cosmetic Dentistry
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#93D9E6] text-lg">
                  Bad Breath
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#93D9E6] text-lg">
                  Orthodontics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#93D9E6] text-lg">
                  Emergency Dental
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#93D9E6] text-lg">
                  Restorative Dentistry
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#93D9E6] text-lg">
                  Children’s Dental Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#93D9E6] text-lg">
                  Sleep Dentistry
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#93D9E6] text-lg">
                  More+
                </a>
              </li>
            </ul>
          </div>
  
          {/* About */}
          <div>
            <h3 className="font-bold text-3xl mb-4 text-[#93D9E6]">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#93D9E6] text-lg">
                  Employment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#93D9E6] text-lg">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#93D9E6] text-lg">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#93D9E6] text-lg">
                  ZipMoney
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#93D9E6] text-lg">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h3 className="font-bold text-3xl mb-4 text-[#93D9E6]">Contact</h3>
            <p className="mb-2 hover:text-[#93D9E6] text-lg">Talk with expert?</p>
            <p className="mb-4 hover:text-[#93D9E6] text-lg"> (03) 5367 5355</p>
            <p className="text-lg">Send email enquiry</p>
            <a href="mailto:admin@ebdg.com.au" className="hover:text-[#93D9E6] text-lg">
            admin@mainstreetdental.com.au 
            </a>
          </div>
  
          {/* Location */}
          <div>
            <h3 className="font-bold text-3xl mb-4 text-[#93D9E6]">Location</h3>
            <address className="not-italic mb-4 text-lg">
            223 Main Street,
              <br />
              Bacchus Marsh Vic 3340
            </address>
            <p className="text-lg">Monday – Friday 8am – 5pm</p>
            <p className="text-lg">Saturday – Sleep Dentistry by Appointment Only</p>
            <p className="text-lg">Sunday – Closed</p>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2025 East Bentleigh Dental Group. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 text-lg">
              <i className="fab fa-facebook"></i> {/* Replace with an icon library */}
            </a>
            <a href="#" className="hover:text-gray-300 text-lg">
              <i className="fab fa-youtube"></i> {/* Replace with an icon library */}
            </a>
          </div>
          <p className="text-sm mt-4 md:mt-0">
            Web Design by <a href="#" className="hover:underline text-lg">23 Digital</a>
          </p>
        </div>
      </footer>
    );
}
