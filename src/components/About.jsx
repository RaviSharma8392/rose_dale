import React from "react";

const About = () => {
  return (
    <div className="px-6 py-12 md:py-20 md:px-28">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <img
          className="w-full md:w-[50%] h-auto rounded-lg object-cover"
          src="https://rosedalebhimtal.com/assets/images/about/3.jpg"
          alt="Hotel Rose Dale"
        />

        {/* Text section */}
        <div className="md:w-[50%] space-y-5">
          <h3 className="text-[#cf9930] font-semibold text-sm tracking-wide uppercase">
            About Us
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Hotel Rose Dale
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            Hotel Rose Dale, located on Bhawali Kainchi Dham Road in Bhimtal,
            Nainital, Uttarakhand, offers a perfect blend of comfort and luxury
            in a picturesque setting. Nestled amidst the serene beauty of the
            Kumaon hills, this hotel provides an ideal retreat for travelers
            seeking a tranquil escape. Guests can enjoy the convenience of ample
            parking and free Wi-Fi, ensuring a hassle-free stay. <br />
            <br />
            The multi-cuisine restaurant caters to diverse culinary preferences,
            serving delectable dishes that range from local delicacies to
            international favorites. The rooftop lounge, with its panoramic
            views, provides a stunning backdrop for relaxation and socializing,
            making it a highlight of the hotel's amenities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
