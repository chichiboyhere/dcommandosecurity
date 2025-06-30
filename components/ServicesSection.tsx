// Import React & Lucide icons
import { ShieldCheck, Users, Video, Search, Car, Laptop } from "lucide-react";

// Icon lookup object
const iconMap = {
  cyber: Laptop,
  bodyguard: ShieldCheck,
  bouncer: Users,
  surveillance: Video,
  investigation: Search,
  escort: Car,
};

// Service data
const services = [
  {
    title: "Cyber Security Solutions",
    icon: "cyber",
    desc: "Protect your digital assets with our end-to-end cybersecurity infrastructure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, repudiandae rerum quod ",
    bg: "bg-yellow-400",
  },
  {
    title: "Bodyguards",
    icon: "bodyguard",
    desc: "Highly trained professionals dedicated to ensuring your safety. repellendus omnis assumenda iure accusamus voluptates dolorum praesentium. Cumque hic voluptates quam similique fuga beatae sequi maiores ipsum!",
    bg: "bg-blue-900",
  },
  {
    title: "Event Bouncers",
    icon: "bouncer",
    desc: "Reliable crowd control and entry management for events. repellendus omnis assumenda iure accusamus voluptates dolorum praesentium. Cumque hic voluptates quam similique fuga beatae sequi maiores ipsum!",
    bg: "bg-blue-900",
  },
  {
    title: "Surveillance & Monitoring",
    icon: "surveillance",
    desc: "Real-time monitoring and advanced surveillance systems. repellendus omnis assumenda iure accusamus voluptates dolorum praesentium. Cumque hic voluptates quam similique fuga beatae sequi maiores ipsum!",
    bg: "bg-yellow-400",
  },
  {
    title: "Private Investigations",
    icon: "investigation",
    desc: "Discreet and thorough private investigation services. repellendus omnis assumenda iure accusamus voluptates dolorum praesentium. Cumque hic voluptates quam similique fuga beatae sequi maiores ipsum!",
    bg: "bg-yellow-400",
  },
  {
    title: "Escort & Convoy Services",
    icon: "escort",
    desc: "Secure transport for VIPs, executives, and sensitive cargo. repellendus omnis assumenda iure accusamus voluptates dolorum praesentium. Cumque hic voluptates quam similique fuga beatae sequi maiores ipsum!",
    bg: "bg-blue-900",
  },
];

// Main JSX
export default function ServicesSection() {
  return (
    <section className="bg-gray-100 py-12 px-4" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 ">
          HOW WE HELP YOU ACHIEVE SAFETY
        </h2>
        <h5 className="text-lg font-medium text-center text-gray-800 mb-8">
          Explore our wide array of security risk & personal safety solutions
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(({ title, icon, desc, bg }, index) => {
            const Icon = iconMap[icon];
            return (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full ${bg} text-white`}
                  >
                    {Icon && <Icon size={26} color="white" />}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900">
                    {title}
                  </h3>
                </div>
                <p className="text-gray-800 pl-14">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
