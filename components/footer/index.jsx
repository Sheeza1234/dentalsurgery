import Link from "next/link";
import { FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{ fontFamily: "OptimaModoki, sans-serif" }}
      className="bg-[#1C4C57] text-white sm:text-red py-10"
    >
      <div className="container w-full mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left sm:grid sm:grid-cols-3  lg:grid-cols-5 gap-8 px-6">
        {/* Links */}
        <div>
          <h3 className="font-bold text-xl lg:text-4xl text-[#93D9E6] mb-6">Links</h3>
          <ul className="space-y-3">
            {["Home", "Our Practice", "Patient", "Sleep Dentistry", "Senior’s Dental Care", "Blog"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[#93D9E6] text-md sm:text-lg md:text-lg">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-xl lg:text-4xl mb-6 text-[#93D9E6]">Services</h3>
          <ul className="space-y-3">
            {[
              "Cosmetic Dentistry",
              "Orthodontics",
              "Emergency Dental",
              "Restorative Dentistry",
              "Children’s Dental Care",
              "Sleep Dentistry"
            ].map((service) => (
              <li key={service}>
                <a href="#" className="hover:text-[#93D9E6] text-md sm:text-lg md:text-xl">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-bold text-xl lg:text-4xl sm:text-lg md:text-xl mb-6 text-[#93D9E6]">About</h3>
          <ul className="space-y-3">
            {["Employment", "Team", "Contact", "ZipMoney","Emergency", "Privacy Policy"].map((about) => (
              <li key={about}>
                <a href="#" className="hover:text-[#93D9E6] text-md sm:text-md md:text-lg">
                  {about}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-4xl mb-6 text-[#93D9E6]">Contact</h3>
          <p className="mb-3 hover:text-[#93D9E6] text-lg sm:text-lg md:text-xl">Talk with an expert?</p>
          <a href="tel:0353675355">
          <p className="mb-5 hover:text-[#93D9E6] text-lg sm:text-lg md:text-xl">(03) 5367 5355</p></a>
          <p className="text-lg sm:text-lg md:text-xl">Send email enquiry</p>
          <a href="mailto:admin@ebdg.com.au" className="hover:text-[#93D9E6] text-md sm:text-md md:text-md">
            admin@mainstreetdental.com.au
          </a>
          <Link href='/appointment'>
          <p className="mt-6 hover:text-[#93D9E6] text-lg sm:text-lg md:text-xl">Book an Appointment</p>
          </Link>
        </div>

        {/* Location */}
        <div>
          <h3 className="font-bold text-4xl sm:text-4xl mb-6 text-[#93D9E6]">Location</h3>
          <address className="not-italic mb-5 text-md sm:text-xl">
            223 Main Street,
            <br />
            Bacchus Marsh Vic 3340
          </address>
          <p className="text-lg sm:text-xl">Monday to Friday – 9 am to 5 pm</p>
          <p className="text-lg sm:text-xl">Saturday – 9 am to 1 pm</p>
          <p className="text-lg sm:text-xl">Sunday – Closed</p>
          <p className="text-lg sm:text-xl">Home of Sleep Dentistry BACCHUS MARSH</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-base sm:text-sm">
          © 2025 Main Street Dental Practice Bacchus Marsh All right Reserved.
        </p>

        <p className="text-base sm:text-md mt-4 md:mt-0">
          Web Design by <a href="#" className="hover:underline">Sheeza Asghar</a>
        </p>
      </div>
    </footer>
  );
}
