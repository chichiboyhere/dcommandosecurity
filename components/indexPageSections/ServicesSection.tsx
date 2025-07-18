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

// Icon lookup object
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

// Define a type for the keys of iconMap
type IconKeys = keyof typeof iconMap;

// Service data
import { services } from "@/data/servicesData";

// Main JSX
export default function ServicesSection() {
  return (
    <section className="py-12 px-4" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-white">
          HOW WE HELP YOU ACHIEVE SAFETY
        </h2>
        <h5 className="text-lg font-medium text-center text-gray-800 mb-8">
          Explore our wide array of security risk & personal safety solutions
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(({ title, icon, desc, bg }, index) => {
            const Icon = iconMap[icon as IconKeys]; // Cast icon to IconKeys
            return (
              <div
                key={index}
                className="flex flex-col gap-2 hover:scale-[1.01] transition-transform duration-300"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full ${bg} text-white`}
                  >
                    {Icon && <Icon size={26} color="white" />}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-white">
                    {title}
                  </h3>
                </div>
                {/* Display the first 100 characters of the description */}
                <p className="text-gray-800 pl-14 dark:text-[#ffffffcf] ">
                  <Link href="/services">
                    {desc.slice(0, 200)}
                    <span className="cursor-pointer text-blue-600 italic">
                      ...more
                    </span>
                  </Link>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
