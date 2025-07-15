import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { services } from "@/data/servicesData";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-8 relative">
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/blogs/blog1.jpg')" }}
      ></div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Company Info */}
        <div>
          <h4 className="font-bold mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <strong>Damion Security Ltd.</strong>
            </li>
            <li>123 Security Blvd, Victoria Island, Lagos</li>
            <li>RC: 1234567</li>
            <li>Phone: +234 801 234 5678</li>
            <li>Email: info@damionsecurity.com</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold mb-2">Services</h4>
          <ul className="space-y-1 text-sm">
            {services.map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-bold mb-2">Support</h4>
          <ul className="space-y-1 text-sm">
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Report a Problem</li>
            <li>Security Tips</li>
            <li>Feedback</li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h4 className="font-bold mb-2">Contact</h4>
          <p className="text-sm mb-2">Subscribe to our newsletter</p>
          <form
            action="https://formspree.io/f/xyzjvjgy"
            method="POST"
            className="flex items-center mb-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="flex-1 p-2 rounded-l bg-white text-gray-700 text-sm"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-blue-900 px-4 py-2 text-sm font-semibold rounded-r hover:bg-yellow-500"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm">Phone: +234 809 876 5432</p>
          <p className="text-sm">Email: contact@damionsecurity.com</p>
        </div>
      </div>

      <hr className="my-5 mx-auto border-gray-400" />

      <div className="grid grid-cols-1 md:flex align-center justify-between gap-4">
        <p className="text-center text-[15px] flex-2">
          &copy; 2015 - {new Date().getFullYear()} Damion Security | All rights
          reserved.
        </p>

        <div className="flex justify-center gap-5 flex-1">
          <a href="/terms" className="text-sm underline hover:text-yellow-300">
            Terms of use
          </a>
          <a
            href="/privacy"
            className="text-sm underline hover:text-yellow-300"
          >
            Privacy policy
          </a>
        </div>

        {/* Socials */}
        <div className="flex flex-1 gap-5 md:gap-4 cursor-pointer ">
          <a
            href="https://facebook.com/#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400 text-blue-900 transition-transform duration-300 hover:scale-110 hover:bg-yellow-500"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com/dcommandoeventsecurity_backup"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400 text-blue-900 transition-transform duration-300 hover:scale-110 hover:bg-yellow-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400 text-blue-900 transition-transform duration-300 hover:scale-110 hover:bg-yellow-500"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://whatsapp.com/#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400 text-blue-900 transition-transform duration-300 hover:scale-110 hover:bg-yellow-500"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
