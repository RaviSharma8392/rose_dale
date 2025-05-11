import React from "react";
import { MdCall, MdOutlineWhatsapp } from "react-icons/md";
import heroImage from "../assets/1.jpg";

const Header = () => {
  return (
    <div>
      <div className="relative">
        <div>
          {/* Image for desktop */}
          <img
            className="bg-cover transition-transform duration-500 hover:scale-110 w-full hidden md:flex md:h-[500px]"
            src={heroImage}
            alt="homepage"
          />

          {/* Image for mobile */}
          <img
            className="md:hidden transition-transform duration-500 hover:scale-110"
            src="https://rosedalebhimtal.com/assets/images/gallery/2.jpg"
            alt="homepage mobile"
          />
        </div>

        <div className="text-white top-1/6 mx-6 md:mx-100 absolute">
          <h4 className="flex text-[#FFD700] mx-4 my-2 uppercase text-sm md:text-4xl md:my-3 font-semibold md:font-bold font-[poppins]">
            Your Gateway to Serene Escapes
          </h4>
          <h1 className="uppercase text-xl mx-8 md:mx-55 font-[poppins] font-bold text-white m-3.5">
            Hotel Rose Dale
          </h1>
          <h3 className="font-semibold md:text-xl text-sm md:mx-40 md:text-white">
            Bhawali Kainchi Dham Rd, Bhimtal, Nainital
          </h3>
        </div>
      </div>

      <div className="md:flex items-center md:m-3.5 py-[15px] mx-[23px] md:gap-5 md:p-2 justify-center m-2.5">
        <button className="bg-[#B22222] mx-8 px-[50px] py-[10px] md:text-[16px] flex border rounded-full md:p-5 transition-all duration-300 text-[#FFFFFF] hover:text-[#B22222] hover:bg-[#FFD700]">
          <span className="m-1">
            <MdCall />
          </span>
          Call To Order
        </button>

        <button className="bg-[#B22222] my-3 mx-3.5 px-[50px] py-[10px] hover:text-[#B22222] transition-all duration-300 md:text-[16px] flex border rounded-full md:p-6 text-[#FFFFFF] hover:bg-[#FFD700]">
          <span className="m-1">
            <MdOutlineWhatsapp />
          </span>
          WhatsApp Inquiry
        </button>
      </div>
    </div>
  );
};

export default Header;
