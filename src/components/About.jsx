import React from "react";

const About = () => {
  return (
    <div>
      <div className="md:m-20 justify-between  flex">
        <div className=" md:flex gap-5">
          <img
            className="md:h-100"
            src="https://rosedalebhimtal.com/assets/images/about/3.jpg"
          />
          <div className=" p-3.5">
            <h3 className="text-bold my-3 text-[#cf9930]">ABOUT US</h3>
            <h1 className=" text-4xl my-3 ">Hotel Rose Dale</h1>
            <p className="md:text-lx text-sm">
              Hotel Rose Dale, located on Bhawali Kainchi Dham Road in Bhimtal,
              Nainital, Uttarakhand, offers a perfect blend of comfort and
              luxury in a picturesque setting. Nestled amidst the serene beauty
              of the Kumaon hills, this hotel provides an ideal retreat for
              travelers seeking a tranquil escape. Guests can enjoy the
              convenience of ample parking and free Wi-Fi, ensuring a
              hassle-free stay. <br />
              <br />
              The multi-cuisine restaurant caters to diverse culinary
              preferences, serving delectable dishes that range from local
              delicacies to international favorites. The rooftop lounge, with
              its panoramic views, provides a stunning backdrop for relaxation
              and socializing, making it a highlight of the hotel's amenities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
