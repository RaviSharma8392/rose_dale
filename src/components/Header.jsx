import React from "react";
import { MdCall, MdOutlineWhatsapp } from "react-icons/md";
import heroImage from "../assets/1.jpg";

const Header = () => {
  return (
    <div className="font-[poppins]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="relative">
          {/* Image for desktop */}
          <img
            className="w-full h-[300px] md:h-[600px] object-cover transition-all duration-700 hover:scale-105"
            src={heroImage}
            alt="Hotel Rose Dale"
            loading="eager"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 text-white">
          <h4 className="text-gold-400 text-sm md:text-2xl uppercase tracking-wider mb-2 animate-fadeIn">
            Your Gateway to Serene Escapes
          </h4>
          <h1 className="text-3xl md:text-6xl font-bold uppercase mb-3 animate-fadeIn delay-100">
            Hotel <span className="text-gold-400">Rose Dale</span>
          </h1>
          <div className="w-16 h-1 bg-gold-400 my-4 animate-growWidth"></div>
          <h3 className="text-sm md:text-xl font-medium max-w-md animate-fadeIn delay-200">
            Bhawali Kainchi Dham Rd, Bhimtal, Nainital
          </h3>
        </div>
      </div>

      {/* Buttons Section */}
      <div
        className="flex flex-col md:flex-row items-center justify-center gap-4 py-6 px-4"
        style={{ backgroundColor: "#F5F5F0" }}>
        <a className="w-full md:w-auto flex flex-col md:flex-row gap-4">
          {/* Call +999 */}
          <button
            className="flex items-center justify-center gap-2 w-full font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{
              backgroundColor: "#6B4226",
              color: "#FFFFFF",
              border: "2px solid #8B5A2B",
            }}>
            <MdCall className="text-xl text-white" />
            <span className="whitespace-nowrap text-white">Call +111</span>
          </button>

          {/* Call +1 */}
          <button
            className="flex items-center justify-center gap-2 w-full font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{
              backgroundColor: "#6B4226",
              color: "#FFFFFF",
              border: "2px solid #8B5A2B",
            }}>
            <MdCall className="text-xl text-white" />
            <span className="whitespace-nowrap text-white">Call +9</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
