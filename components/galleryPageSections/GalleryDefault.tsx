import CroppedImageGallery from "../CroppedImageGallery";

const galleryInfo = [
  {
    image: "/images/gallery/gallery1.jpg",
    desc: "Dcommandos Security at Yard158, Oregun Ikeja, Lagos."
  },
  {
    image: "/images/gallery/gallery2.jpg",
    desc: "On a crowd control mission: Dcommandos Security at the NLP Conference, Lagos, organized by Harvesters International Christian Centre(HICC)."
  },
  {
    image: "/images/gallery/gallery3.jpg",
    desc: "Dcommandos Security at 10 Degrees Ikeja, Lagos."
  },
  {
    image: "/images/gallery/gallery4.jpg",
    desc: "There we were, at Villa D Groove, Lekki Phase One, Lagos."
  },
  {
    image: "/images/gallery/gallery5.jpg",
    desc: "We were at Villa Park Hotel, mounting guard at the multi-purpose hall, Alakoson, Avenue, Amuwo Odofin, Lagos."
  },
  {
    image: "/images/gallery/gallery6.jpg",
    desc: "Dcommandos Security at the Civic centre, Lekki, Lagos."
  },
  {
    image: "/images/gallery/gallery7.jpg",
    desc: "We were on ground at Grace Garden Centre, Lekki, Phase One, Lagos."
  },
  {
    image: "/images/gallery/gallery8.jpg",
    desc: "Dcommando Security at Havillah Event Centre."
  },
  {
    image: "/images/gallery/gallery9.jpg",
    desc: "We were around at a birthday party, organized in Ogun state."
  },
  {
    image: "/images/gallery/gallery10.jpg",
    desc: "Dcommandos Security with the CSO of a billionaire in Banana Island, Ikoyi Lagos at a wedding reception" 
  },
  {
    image: "/images/gallery/gallery10.jpg",
    desc: "Dcommandos Security with the CSO of a billionaire in Banana Island, Ikoyi Lagos at a wedding reception" 
  },
  {
    image: "/images/gallery/gallery10.jpg",
    desc: "Dcommandos Security with the CSO of a billionaire in Banana Island, Ikoyi Lagos at a wedding reception" 
  },
  {
    image: "/images/gallery/gallery10.jpg",
    desc: "Dcommandos Security with the CSO of a billionaire in Banana Island, Ikoyi Lagos at a wedding reception" 
  },
  {
    image: "/images/gallery/gallery10.jpg",
    desc: "Dcommandos Security with the CSO of a billionaire in Banana Island, Ikoyi Lagos at a wedding reception" 
  },
  {
    image: "/images/gallery/gallery11.jpg",
    desc: "We stood gallantly alert at Naira Marley's Concert at Balmoral Hall, Ikeja Lagos." 
  },
  {
    image: "/images/gallery/gallery12.jpg",
    desc: "We stood gallantly alert at Naira Marley's Concert at Balmoral Hall, Ikeja Lagos." 
  },
  {
    image: "/images/gallery/gallery13.jpg",
    desc: "We were on ground mounting guard vigilantly at the U-19 Men's World Cup at Unilag." 
  },
  {
    image: "/images/gallery/gallery14.jpg",
    desc: "When duty called at Brava Event Centre, we responded quickly to ensure the safely of the guests on ground for a Celebration of Life." 
  },
  {
    image: "/images/gallery/gallery15.jpg",
    desc: "Crowd Control Experts. Yes, that's who we are. We were on ground at NLP Conference, Lagos,orgainized by Harvesters International Christian Centre(HICC)." 
  },
  {
    image: "/images/gallery/gallery16.jpg",
    desc: "When duty called ay Harvesters International Christian Centre(HICC), we responded quickly to ensure every one and every thing was under control." 
  },
  
];

const galleryImgs =[
    
]
const GalleryDefault = () => {
 

    return(
{/* Gallery section to be cut out soon and placed in the special page for gallery*/}
         <section className="p-8 bg-gray-100 text-blue-900">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Client Image Gallery
          </h1>
          <CroppedImageGallery
            images={galleryInfo.image}
            aspectRatio="aspect-[4/3]"
            widthClass="w-full sm:w-100 md:w-75"
          />
        </section> 
    )
}
export default GalleryDefault