import React from "react";

const CenterSection = () => {
  const images = [
    "/menu images/Menu Card-Mallitap-Curved_page-0001.jpg",
    "/menu images/Menu Card-Mallitap-Curved_page-0002.jpg",
    "/menu images/Menu Card-Mallitap-Curved_page-0003.jpg",
    "/menu images/Menu Card-Mallitap-Curved_page-0002.jpg",
    "/menu images/Menu Card-Mallitap-Curved_page-0004.jpg",
    "/menu images/Menu Card-Mallitap-Curved_page-0005.jpg",
    "/menu images/Menu Card-Mallitap-Curved_page-0006.jpg",
    "/menu images/Menu Card-Mallitap-Curved_page-0007.jpg",
    "/menu images/Menu Card-Mallitap-Curved_page-0008.jpg",
    "/menu images/Menu Card-Mallitap-Curved_page-0009.jpg",
    "/menu images/Menu Card-Mallitap-Curved_page-0010.jpg",
    "/menu images/Menu Card-Mallitap-Curved_page-0011.jpg",
    "/menu images/Menu Card-Mallitap-Curved_page-0012.jpg",
    "/menu images/Menu Card-Mallitap-Curved_page-0013.jpg",
    "/menu images/Menu Card-Mallitap-Curved_page-0014.jpg",
  ];

  return (
    <div className="mx-4 md:mx-20 my-10">
      <section className="mb-12">
        <h1 className=" flex text-2xl font-bold justify-center">Our Menus</h1>
        <div className="h-1 bg-amber-200 w-20 flex justify-center mx-30 md:mx-160 mb-3.5  "></div>
        <div className="grid  md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`menu-image-${index}`}
              className="rounded-2xl transform transition-transform duration-300 hover:-translate-y-2 shadow"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CenterSection;
