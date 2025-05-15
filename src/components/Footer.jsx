import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsChevronUp } from "react-icons/bs";
import logo from "../../public/images/logo.png";

const Footer = () => {
  return (
    <footer className="text-white pt-12 pb-8">
      <div className="w-11/12 max-w-7xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="text-black rounded-full flex items-center justify-center text-2xl font-bold mb-2">
            <img src={logo} alt="" className="h-[112px] w-[165px] " />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-10 text-sm  text-white">
          <div className="flex items-center gap-2">
            <FiPhone className="text-[#CBA864]" />
            <span>977-9876543210</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMapPin className="text-[#CBA864]" />
            <span>New Baneshwor, Kathmandu</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMail className="text-[#CBA864]" />
            <span>example123@gmail.com</span>
          </div>
        </div>

        <div className="border-t border-[#CBA864] my-4"></div>

        <div className="flex flex-col md:flex-row items-center justify-between text-l text-gray-300">
          <p className="mb-4 md:mb-0">
            Copyrights ©2024 Hotels. All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <FaFacebookF className="hover:text-[#CBA864] text-xl transition" />
            <FaInstagram className="hover:text-[#CBA864]  text-xl  transition" />
            <FaWhatsapp className="hover:text-[#CBA864]  text-xl  transition" />
            <button className="bg-[#CBA864] p-2 rounded-full text-black">
              <BsChevronUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
