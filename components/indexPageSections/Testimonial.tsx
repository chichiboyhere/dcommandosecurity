import Image from "next/image";
import { Star } from "lucide-react";
import c1 from "@/public/images/satisfied-client.jpg";
import c2 from "@/public/images/satisfied-client2.jpg";
import c3 from "@/public/images/satisfied-client4.jpg";

const testimonials = [
  {
    title: "They came through",
    img: c2,
    desc: "Protect your digital assets with our end-to-end cybersecurity infrastructure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, repudiandae rerum quod ",
    client: "John Kute",
    location: "New York, USA",
  },
  {
    title: "They always deliver!",
    img: c1,
    desc: "Highly trained professionals dedicated to ensuring your safety. repellendus omnis assumenda iure accusamus voluptates dolorum praesentium. Cumque hic voluptates quam similique fuga beatae sequi maiores ipsum!",
    client: "Maryann Edochie",
    location: "Lagos, Nigeria",
  },
  {
    title: "They are the best at what they do",
    img: c3,
    desc: "Reliable crowd control and entry management for events. repellendus omnis assumenda iure accusamus voluptates dolorum praesentium. Cumque hic voluptates quam similique fuga beatae sequi maiores ipsum!",
    client: "Mr & Mrs Odunmola",
    location: "Radison, Lagos",
  },
];

// Main JSX
export default function Testimonial() {
  return (
    <section className="bg-blue-50 py-12 px-4" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 ">
          What our esteemed customers say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col gap-2 px-4">
              <h4 className="text-xl font-bold my-4 text-blue-900 ">
                &quot;{testimonial.title}&quot;
              </h4>
              <h3 className="text-xl text-blue-900 mb-4">
                &quot;{testimonial.desc}&quot;
              </h3>

              <div className="flex flex-row  justify-start gap-3">
                <div className="h-10 w-10  rounded-full relative overflow-hidden">
                  <Image
                    src={testimonial.img}
                    alt="Blog"
                    // width={500}
                    // height={500}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base font-semibold text-blue-900">
                    {testimonial.client}
                  </h3>

                  <p className="text-gray-800">{testimonial.location}</p>
                  <div className="flex flex-row gap-3">
                    <Star size={14} fill="gold" color="gold" />
                    <Star size={14} fill="gold" color="gold" />
                    <Star size={14} fill="gold" color="gold" />
                    <Star size={14} fill="gold" color="gold" />
                    <Star size={14} fill="gold" color="gold" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
