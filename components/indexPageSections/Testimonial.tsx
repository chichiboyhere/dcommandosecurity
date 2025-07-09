import Image from "next/image";
import { Star } from "lucide-react";
import c1 from "@/public/images/testimonial/satisfied-client.jpg";
import c2 from "@/public/images/testimonial/satisfied-client2.jpg";
import c3 from "@/public/images/testimonial/satisfied-client3.jpg";

const testimonials = [
  {
    title: "They came through",
    img: c2,
    desc: "We were organizing a surprise birthday party for my uncle in Nigeria. The event planner cancelled on us at the last minute, citing weak arrangements and all whatnot. Thankfully, I got in touch with Dcommmando Security through a friend in Lagos. Through their vendor-sourcing outreach, they arranged an event planner for my uncle. It turned out to be a great party...",
    client: "John Kute",
    location: "New York, USA",
  },
  {
    title: "They always deliver!",
    img: c1,
    desc: "As an event planner, I've been partners with Dcommandos for over five years. When it comes to supplying event bouncers, I only turn to one sure plug - Your guess is as good as right. They have never let me down! All my clients heap praise and compliments on the competence and professionalism of the gallant men from Dcommando Security. I can't recommend them enough. ",
    client: "Maryann Osaenwe",
    location: "Lagos, Nigeria",
  },
  {
    title: "They are the best at what they do",
    img: c3,
    desc: "Last June 10th marks our sixth year wedding anniversary. It was a beautiful and memorable experience. The men from Dcommando Security were really professional. They stood guard at all entry/exit points all through the reception... To date my wife sings the praise of the four hefty men who bore her carriage as she made a royal entry to the hall. I've recommended them...ever since and THEY HAVEN'T FALLEN SHORT of expectations; not even once!",
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
              <h3 className="text-base italic text-blue-900 mb-4">
                &quot;{testimonial.desc}&quot;
              </h3>

              <div className="flex flex-row  justify-start gap-3">
                <div className="h-10 w-10  rounded-full relative overflow-hidden">
                  <Image
                    src={testimonial.img}
                    alt="Blog"
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
