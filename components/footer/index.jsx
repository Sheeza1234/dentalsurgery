import { FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{ fontFamily: "OptimaModoki, sans-serif" }}
      className="bg-[#1C4C57] text-white py-10 px-4 sm:px-6 lg:px-10"
    >
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Links */}
        <div>
          <h3 className="font-bold text-3xl sm:text-4xl text-[#93D9E6] mb-6">Links</h3>
          <ul className="space-y-3">
            {["Home", "Our Practice", "Patient", "Sleep Dentistry", "Senior’s Dental Care", "Blog"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[#93D9E6] text-base sm:text-lg md:text-lg">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-3xl sm:text-4xl mb-6 text-[#93D9E6]">Services</h3>
          <ul className="space-y-3">
            {[
              "Cosmetic Dentistry",
              "Bad Breath",
              "Orthodontics",
              "Emergency Dental",
              "Restorative Dentistry",
              "Children’s Dental Care",
              "Sleep Dentistry",
              "More+",
            ].map((service) => (
              <li key={service}>
                <a href="#" className="hover:text-[#93D9E6] text-base sm:text-lg md:text-xl">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-bold text-3xl sm:text-4xl mb-6 text-[#93D9E6]">About</h3>
          <ul className="space-y-3">
            {["Employment", "Team", "Contact", "ZipMoney", "Privacy Policy"].map((about) => (
              <li key={about}>
                <a href="#" className="hover:text-[#93D9E6] text-base sm:text-lg md:text-xl">
                  {about}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-3xl sm:text-4xl mb-6 text-[#93D9E6]">Contact</h3>
          <p className="mb-3 hover:text-[#93D9E6] text-base sm:text-lg md:text-xl">Talk with an expert?</p>
          <p className="mb-5 hover:text-[#93D9E6] text-base sm:text-lg md:text-xl">(03) 5367 5355</p>
          <p className="text-base sm:text-lg md:text-xl">Send email enquiry</p>
          <a href="mailto:admin@ebdg.com.au" className="hover:text-[#93D9E6] text-base sm:text-md md:text-xl break-words">
            admin@mainstreetdental.com.au
          </a>
        </div>

        {/* Location */}
        <div>
          <h3 className="font-bold text-3xl sm:text-4xl mb-6 text-[#93D9E6]">Location</h3>
          <address className="not-italic mb-5 text-base sm:text-lg md:text-xl leading-relaxed">
            223 Main Street,
            <br />
            Bacchus Marsh Vic 3340
          </address>
          <p className="text-base sm:text-lg md:text-xl">Monday – Friday 8am – 5pm</p>
          <p className="text-base sm:text-lg md:text-xl">Saturday – Sleep Dentistry by Appointment Only</p>
          <p className="text-base sm:text-lg md:text-xl">Sunday – Closed</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-screen-xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 px-2">
        <p className="text-sm sm:text-base md:text-md">
          © 2025 Main Street Dental Practice Bacchus Marsh All right Reserved.
        </p>

        <p className="text-sm sm:text-base md:text-md">
          Web Design by <a href="#" className="hover:underline">Sheeza Asghar</a>
        </p>
      </div>
    </footer>
  );
}
