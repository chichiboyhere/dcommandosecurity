"use client";

import { useState, useRef, useEffect } from "react";
import {
  ShieldCheck,
  Users,
  Car,
  Laptop,
  Handshake,
  ShieldAlert,
  CircleUserRound,
  DoorOpen,
} from "lucide-react";
import Link from "next/link";
const iconMap = {
  cyber: Laptop,
  bodyguard: ShieldCheck,
  bouncers: Users,
  crowdControl: CircleUserRound,
  ushers: DoorOpen,
  escort: Car,
  securityGuard: ShieldAlert,
  vendorSourcing: Handshake,
};
type IconKeys = keyof typeof iconMap;
import Image from "next/image";

import { Modal } from "@/components/ui/ModalWithRef";

import { services } from "@/data/servicesData";

import CarRentalFields from "../CarRentalFields";
const Services = () => {
  const [selectedService, setSelectedService] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState("");

  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      modalRef.current.focus(); // Focus on the modal when it opens
    }
  }, [isModalOpen]);

  const modalRef = useRef<HTMLDivElement>(null);
  const openForm = (id: string, serviceName: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
    setSelectedServiceId(id);
    console.log(id);
    document.body.style.overflow = "hidden";
    // Scroll to the modal
    //modalRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const closeForm = () => {
    setSelectedService("");
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };
  return (
    <section className="p-8 space-y-12 " data-aos="fade-up ">
      <div className="max-w-6xl ">
        <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-white">
          IN A WORLD RIDDEN WITH UNCERTAINTIES
        </h2>
        <h5 className="text-lg font-medium text-center text-gray-800 mb-8">
          Our range of protective services help you stay out of harm&apos;s way
        </h5>
        <div className="grid grid-cols-1  gap-8">
          {services.map(({ id, title, icon, image, desc, bg }) => {
            const Icon = iconMap[icon as IconKeys];

            return (
              <section
                key={id}
                className="grid md:grid-cols-2 gap-10 hover:scale-[1.01] transition-transform duration-300 text-2xl"
                id={id}
              >
                <div
                  className="bg-white rounded-xl p-4 shadow border border-blue-100 overflow-hidden relative aspect-[4/3] w-full sm:w-160 md:w-120"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="500">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-full ${bg} text-white`}
                    >
                      {Icon && <Icon size={26} color="white" />}
                    </div>
                    <h1 className="text-3xl font-semibold text-blue-900 dark:text-white">
                      {title}
                    </h1>
                  </div>

                  <p className="text-gray-800 py-5 dark:text-[#ffffffcf]">
                    {desc}
                  </p>
                  {id === "vendorSourcing" ? (
                    <>
                      <p>
                        From{" "}
                        <span className="font-semibold italic">Caterers</span>,
                        to <span className="font-semibold italic">Djs</span>,{" "}
                        <span className="font-semibold italic">
                          Event Hall Decorators
                        </span>
                        , <span className="font-semibold italic">Mcs</span>, to{" "}
                        <span className="font-semibold italic">
                          Photographers
                        </span>{" "}
                        and{" "}
                        <span className="font-semibold italic">
                          Videographers
                        </span>
                        ,...we have you covered.
                      </p>
                      <p className="underline underline-offset-3 decoration-blue-600 text-blue-600 italic dark:text-blue-400 dark:decoration-blue-400">
                        <Link href="/gallery#galleryOutSourced">
                          Check out what one of our vendors did on Mr
                          Phenomenal&apos;s wedding
                        </Link>
                      </p>
                    </>
                  ) : (
                    ""
                  )}
                  <button
                    onClick={() => openForm(id, title)} // Sets selected service and opens modal
                    className="items-center justify-center mt-2 text-base text-white bg-blue-900 px-4 py-2 rounded hover:bg-blue-800  transition dark:bg-blue-400 "
                  >
                    Book Now
                  </button>
                </div>
                <hr className="my-5 mx-auto bg-gray-600" />
              </section>
            );
          })}
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={closeForm} ref={modalRef}>
          <div className="max-w-lg max-h-[90vh] p-6 rounded-xl shadow-lg  overflow-y-auto ">
            <h2 className="text-xl font-bold my-5 text-blue-900">
              Book {selectedService}
            </h2>
            <form
              action="https://formspree.io/f/xyzjvjgy"
              method="POST"
              className="space-y-4 mb-2"
            >
              <input type="hidden" name="service" value={selectedService} />

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  name="name"
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  name="phone"
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              {selectedServiceId === "carRentalAndAirportPickUp" ? (
                <CarRentalFields />
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Number of Personnel
                    </label>
                    <input
                      name="quantity"
                      type="number"
                      min="1"
                      required
                      className="w-full border px-3 py-2 rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date Needed
                    </label>
                    <input
                      name="date"
                      type="date"
                      required
                      className="w-full border px-3 py-2 rounded"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Additional Info
                </label>
                <textarea
                  name="message"
                  className="w-full border px-3 py-2 rounded"
                  rows={3}
                />
              </div>

              <button
                type="submit"
                className="bg-blue-900 text-white px-4 py-2 mb-2 rounded hover:bg-blue-800"
              >
                Submit Booking
              </button>
            </form>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Services;
