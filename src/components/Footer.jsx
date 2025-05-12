import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#B22222] text-[#F0F0F0]">
      <div className="max-w-7xl mx-auto py-10 px-6 md:px-12">
        <h1 className="uppercase font-bold text-xl mb-5">Contact Info</h1>

        <div className="space-y-4 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <MdCall />
            <span>+91 8899990888</span>
          </div>

          <div className="flex items-center gap-2">
            <MdOutlineEmail />
            <span>rosedalebhimtal@gmail.com</span>
          </div>

          <div className="flex items-center gap-2">
            <FaLocationDot />
            <span>Bhawali Kainchi Dham Rd, Bhimtal, Nainital, Uttarakhand</span>
          </div>
        </div>

        <ul className="flex gap-4 mt-6 list-none">
          <li>
            <a
              href="https://www.facebook.com/61561481416349/videos/rose-dale-bhimtal/1039259520945861/"
              aria-label="Facebook"
            >
              <FaFacebookF className="hover:text-[#FFD700] transition-all duration-300" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_rosedale_bhimtal/"
              aria-label="Instagram"
            >
              <FaInstagram className="hover:text-[#FFD700] transition-all duration-300" />
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center text-xs pb-6">
        © 2025 ALIADO. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
