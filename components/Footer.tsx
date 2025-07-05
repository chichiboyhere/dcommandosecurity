import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-8 relative">
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/blogs/blog1.jpg')" }}
      ></div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {["Company", "Services", "Support", "Contact"].map((section) => (
          <div key={section}>
            <h4 className="font-bold mb-2">{section}</h4>
            <ul className="space-y-1 text-sm">
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestiae, ducimus, a nesciunt sint obcaecati minima possimus
                alias laboriosam ea odio voluptatum earum non eos iure iste
                consectetur eaque hic! Consequuntur?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore autem rem tenetur laborum qui harum itaque, corrupti
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                accusantium dignissimos, eligendi quam amet aspernatur
              </li>
            </ul>
          </div>
        ))}
      </div>
      <hr className="my-5 mx-auto" />
      <div className="grid grid-cols-1 md:flex align-center justify-between gap-2">
        <p className="text-center text-[15px] flex-2">
          Copyright &copy; 2015 - {new Date().getFullYear()} Dcommando Security
          | All rights reserved.
        </p>

        <div className="flex justify-center gap-5 flex-1">
          <p className="text-sm">Terms of use</p>
          <p className="text-sm">Privacy policy</p>
        </div>
        {/* socials */}
        <div className="flex justify-between gap-5 flex-1">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400  text-blue-900 transition-transform duration-300 hover:scale-110 hover:bg-yellow-500">
            <FaFacebookF />
          </div>
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400  text-blue-900 transition-transform duration-300 hover:scale-110 hover:bg-yellow-500">
            <FaInstagram />
          </div>
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400  text-blue-900 transition-transform duration-300 hover:scale-110 hover:bg-yellow-500">
            <FaXTwitter />
          </div>
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400  text-blue-900 transition-transform duration-300 hover:scale-110 hover:bg-yellow-500">
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
