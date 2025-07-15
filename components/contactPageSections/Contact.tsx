"use client";

import React, { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  message: string;
  services: string[];
};

export default function ContactPage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [feedbackMsg, setFeedbackMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    message: "",
    services: [],
  });

  const allServices = [
    "cyber",
    "bodyguard",
    "bouncers",
    "crowd control",
    "ushers",
    "escort",
    "security guard",
    "vendor sourcing",
  ];
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isFormComplete =
    formData.name &&
    formData.email &&
    formData.phone &&
    formData.message &&
    formData.services.length > 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="space-y-10 px-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-900">
              Contact Us
            </h2>
            <div className="space-y-7 text-gray-600">
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 " />
                <span className="font-500">123 Allen Avenue, Ikeja, Lagos</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5" />
                <span className="font-500">info@damionsecurity.com</span>
              </div>
              <div className="flex items-center gap-4 ">
                <Phone className="w-5 h-5 text-gray-500" />
                <span className="font-500">+234 703 822 3500</span>
              </div>
              <div className="flex gap-4 items-center">
                <FaFacebookF className="w-8 h-8 bg-black text-white px-2 rounded-full" />
                <FaInstagram className="w-8 h-8 bg-black text-white px-2 rounded-xl" />
                <FaXTwitter className="w-8 h-8 bg-black text-white px-2 rounded-xl" />
                <FaWhatsapp className="w-8 h-8 bg-black text-white px-2 rounded-xl" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-900">
              Office Location
            </h2>
            <div className="relative h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.671665946957!2d3.342!3d6.6018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ef6b0c1b7a1%3A0x26b1e0d62d743169!2sAllen%20Ave%2C%20Ikeja!5e0!3m2!1sen!2sng!4v1721047082691!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute bottom-2 left-2 bg-white p-2 text-sm shadow">
                <p>123 Allen Avenue, Ikeja, Lagos</p>
                <a
                  href="https://maps.google.com?q=Allen+Ave,+Ikeja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  View larger map
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="px-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">
            Send us a message
          </h2>
          <form
            onSubmit={(e) => {
              if (!isFormComplete) {
                e.preventDefault();
                setFeedbackMsg(
                  "❌ Please complete all fields before submitting."
                );
                setSubmitted(false);
              } else {
                setFeedbackMsg("✅ Message sent successfully!");
                setSubmitted(true);
                // Optional: clear form after a short delay
                setTimeout(() => {
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                    services: [],
                  });
                  setDropdownOpen(false);
                }, 3000);
              }
            }}
            className="space-y-4"
            action="https://formspree.io/f/xyzjvjgy"
            method="POST"
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm  text-gray-500 font-semibold"
              >
                Name
              </label>
              <input
                name="name"
                type="text"
                className="md:w-[35vw] w-full border p-3 rounded-xl text-gray-400"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm  text-gray-500 font-semibold"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                className="md:w-[35vw] w-full border p-3 rounded-xl text-gray-400"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm  text-gray-500 font-semibold"
              >
                Phone Number
              </label>
              <input
                name="phone"
                type="text"
                className="md:w-[35vw] w-full border p-3 rounded-xl text-gray-400"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="relative" ref={dropdownRef}>
              <label
                htmlFor="service"
                className="block mb-2 text-sm  text-gray-500 font-semibold"
              >
                Services
              </label>
              <button
                type="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="md:w-[35vw] w-full border p-3 rounded-xl text-gray-400 flex justify-between items-center"
              >
                <span>
                  {formData.services.length > 0
                    ? `${formData.services.length} service(s) selected`
                    : "Select Services"}
                </span>
                {dropdownOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {dropdownOpen && (
                <div className="absolute z-10 mt-2 w-full border rounded bg-white p-2 shadow-md max-h-60 overflow-y-auto">
                  <div className="grid grid-cols-2 gap-2">
                    {allServices.map((service) => (
                      <label key={service} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="service"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                        />
                        <span className="capitalize">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              {/* Hidden inputs to include selected services in form submission */}
              {formData.services.map((service, index) => (
                <input
                  key={index}
                  type="hidden"
                  name="services[]"
                  value={service}
                />
              ))}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm  text-gray-500 font-semibold"
              >
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className="md:w-[35vw] w-full border p-3 rounded-xl text-gray-400"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            {feedbackMsg && (
              <div
                className={`p-3 rounded-md text-sm font-medium ${
                  submitted
                    ? "text-green-700 bg-green-100"
                    : "text-red-700 bg-red-100"
                }`}
              >
                {feedbackMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={!isFormComplete}
              className={`md:w-[35vw] w-full p-5 rounded-2xl bg-gray-600 text-white transition hover:bg-gray-400
                ${isFormComplete ? "cursor-pointer" : "cursor-not-allowed "}`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
