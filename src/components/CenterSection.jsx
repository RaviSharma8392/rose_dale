import React from "react";

const CenterSection = () => {
  const images = [
    "https://res.cloudinary.com/djrjt69jl/image/upload/v1749055227/MenuCard-Mallitap-Curved_page-0001_methnb.jpg",
    "https://res.cloudinary.com/djrjt69jl/image/upload/v1749055266/MenuCard-Mallitap-Curved_page-0002_kce13y.jpg",
    "https://res.cloudinary.com/djrjt69jl/image/upload/v1749055298/MenuCard-Mallitap-Curved_page-0003_txen4z.jpg",
    "https://res.cloudinary.com/djrjt69jl/image/upload/v1749055333/MenuCard-Mallitap-Curved_page-0005_dmyd4q.jpg",
    "https://res.cloudinary.com/djrjt69jl/image/upload/v1749055394/MenuCard-Mallitap-Curved_page-0006_e49tdz.jpg",
    "https://res.cloudinary.com/djrjt69jl/image/upload/v1749055438/MenuCard-Mallitap-Curved_page-0008_wgmixk.jpg",
    "https://res.cloudinary.com/djrjt69jl/image/upload/v1749055495/MenuCard-Mallitap-Curved_page-0009_ketimy.jpg",
    "https://res.cloudinary.com/djrjt69jl/image/upload/v1749055600/MenuCard-Mallitap-Curved_page-0010_ddchhy.jpg",
    "https://res.cloudinary.com/djrjt69jl/image/upload/v1749055725/MenuCard-Mallitap-Curved_page-0011_sfrte4.jpg",
    "https://res.cloudinary.com/djrjt69jl/image/upload/v1749055934/MenuCard-Mallitap-Curved_page-0012_dyawbm.jpg",
    "https://res.cloudinary.com/djrjt69jl/image/upload/v1749055970/MenuCard-Mallitap-Curved_page-0004_cmwfru.jpg",
    "https://res.cloudinary.com/djrjt69jl/image/upload/v1749055999/MenuCard-Mallitap-Curved_page-0013_vdm96r.jpg",
    "https://res.cloudinary.com/djrjt69jl/image/upload/v1749056030/MenuCard-Mallitap-Curved_page-0014_aqprxy.jpg",
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