import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" bg-[#B22222]  text-[#F0F0F0]">
      <div className="items-center md:mx-150 py-7">
        <h1 className="uppercase mx-20 md:mx-25 font-bold md:m-3.5">
          COntact Info
        </h1>
        <h3 className=" flex  m-3.5">
          <span>
            <MdCall className="m-1" />
          </span>
          +91-8477860189, +91-9259003340
        </h3>
        <h3 className=" m-3.5 flex">
          <span>
            <MdOutlineEmail className="m-1" />
          </span>
          rosedalebhimtal@gmail.com
        </h3>
        <h3 className="flex   m-3.5  ">
          <span>
            <FaLocationDot className="m-1" />
          </span>
          Bhawali Kainchi Dham Rd, Bhimtal, Nainital Uttarakhand
        </h3>
        <div className="flex   list-none m-3.5  gap-3.5">
          <li>
            <FaFacebookF className=" hover:text-[#FFD700] transition-all duration-300" />
          </li>
          <li>
            <FaInstagram className=" hover:text-[#FFD700] transition-all duration-300" />
          </li>
          <li>
            <FaTwitter className=" hover:text-[#FFD700] transition-all duration-300" />
          </li>
        </div>
      </div>
      <div className=" flex  justify-center">
        <p className="pb-6"> © 2025 ALIADO. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
