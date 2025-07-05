import Image from "next/image";

import HeroSection from "@/components/IndexPageSections/HeroSection";
import BannerSlider from "@/components/BannerSlider";
import ServicesSection from "@/components/IndexPageSections/ServicesSection";
import AboutSection from "@/components/IndexPageSections/AboutSection";
import AOSInitializer from "@/components/AOSInitializer";
import Testimonial from "@/components/IndexPageSections/Testimonial";
import blog1 from "@/public/images/blogs/blog1.jpg";
import blog2 from "@/public/images/blogs/blog2.jpg";
import blog3 from "@/public/images/blogs/blog3.jpg";

const blogs = [
  {
    title: "Solution Driven",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.  A dolores fugiat maiores esse corporis natus nemo hic consequatur impedit molestias.",
    image: blog1,
    person: "John Doe",
  },
  {
    title: "Massively impact business in the positive direction",
    content:
      "consectetur adipisicing elit. Dicta, ex voluptatum delectus molestias, repellat perspiciatis esse ratione neque nihil quidem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolorem eius, consequuntur molestiae nobis eaque mollitia maxime harum!",

    image: blog2,
    person: "Kennedy Oke",
  },
  {
    title: "They are the best at what they do",
    content:
      "perspiciatis esse ratione neque nihil quidem pariatur corporis vel. Enim soluta pariatur unde doloremque dolorum quaerat. A dolores fugiat maiores esse corporis natus nemo hic consequatur impedit molestias.",
    image: blog3,
    person: "Adam baba",
  },
];

export default function Home() {
  return (
    <div className="text-white">
      {/* Main */}
      <main className="pt-20">
        <HeroSection />

        <AOSInitializer />
        <AboutSection />

        <ServicesSection />
        <BannerSlider />
        <Testimonial />

        {/* Blogs */}
        <AOSInitializer />
        <section className="p-8 bg-gray-100 text-blue-900" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-center mb-8">Blogs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="transition-transform duration-300 hover:scale-110"
              >
                <div className="bg-white rounded-xl p-4 shadow border border-blue-100 overflow-hidden relative aspect-[4/3] w-full sm:w-120 md:w-90">
                  <Image
                    src={blog.image}
                    alt="Blog"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h4 className="text-lg font-bold my-4">{blog.title}</h4>
                <p>{blog.content}</p>
                <p className="mt-4 font-semibold">- {blog.person}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Gallery section to be cut out soon and placed in the special page for gallery*/}
        {/* <section className="p-8 bg-gray-100 text-blue-900">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Client Image Gallery
          </h1>
          <CroppedImageGallery
            images={imageUrls}
            aspectRatio="aspect-[4/3]"
            widthClass="w-full sm:w-100 md:w-75"
          />
        </section> */}
      </main>
    </div>
  );
}
