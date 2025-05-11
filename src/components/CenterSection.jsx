import React from "react";

const CenterSection = () => {
  const data = [
    "https://hilarious-klepon-3f94ec.netlify.app/WhatsApp%20Image%202025-04-26%20at%2012.36.50%20(1).jpeg",
    "https://hilarious-klepon-3f94ec.netlify.app/WhatsApp%20Image%202025-04-26%20at%2012.37.00.jpeg",
    "https://hilarious-klepon-3f94ec.netlify.app/WhatsApp%20Image%202025-04-26%20at%2012.37.09.jpeg",
    "https://hilarious-klepon-3f94ec.netlify.app/WhatsApp%20Image%202025-04-26%20at%2012.37.09.jpeg",
    "https://hilarious-klepon-3f94ec.netlify.app/WhatsApp%20Image%202025-04-26%20at%2012.37.32.jpeg",
    "https://hilarious-klepon-3f94ec.netlify.app/WhatsApp%20Image%202025-04-26%20at%2012.37.32.jpeg",
    "https://hilarious-klepon-3f94ec.netlify.app/WhatsApp%20Image%202025-04-26%20at%2012.37.32.jpeg",
  ];

  const dinningData = [
    {
      meal: "Breakfast",
      time: "7:30 AM – 10:30 AM",
      details: [
        "Buffet with Indian and international cuisines",
        "Live egg and dosa station",
        "Fresh bakery section with croissants, muffins, and breads",
        "Juices, cereals, and seasonal fruits",
      ],
    },
    {
      meal: "Lunch",
      time: "12:30 PM – 3:30 PM",
      details: [
        "Buffet with Indian and international cuisines",
        "Daily changing menu featuring local Kumaoni dishes",
        "Fresh salad bar and soup of the day",
        "Selection of desserts and fresh fruits",
      ],
    },
    {
      meal: "Dinner",
      time: "7:00 PM – 10:30 PM",
      icon: "MdOutlineNightlightRound",
      details: [
        "Multi-cuisine buffet with themed nights",
        "Live grill and tandoor counter",
        "Wide variety of Indian and continental mains",
        "Dessert station with sweets, pastries, and ice cream",
      ],
    },
  ];
  return (
    <div className=" mx-3.5 md:mx-20">
      <div>
        <h1 className="text-2xl  font-bold mb-4">Our Menus</h1>
        {/* this empty div for adding border */}
        <div className="h-1 bg-amber-200 mx-5 w-15"></div>
        <div className="grid md:grid-cols-4 gap-6  ">
          {data.map((image, index) => (
            <img
              key={index}
              src={image}
              className="rounded-2xl transform-transform   hover:-translate-y-2 shadow-b-black shadow  "
            />
          ))}
        </div>
      </div>
      <div className="">
        <h1 className="text-2xl  font-bold mb-4">Dining Experience</h1>
        <div className="h-1 bg-amber-200 mx-5 w-15"></div>
        <div className="">
          {dinningData.map((index, id) => (
            <div
              key={id}
              className="border, bg-[#c1a717] rounded-2xl  text-red-900 p-5.5 shadow my-10"
            >
              <h1 className="font-semibold m-2.5 text-green-950 text-xl ">
                {" "}
                {index.meal}{" "}
              </h1>
              <h1 className="m-2.5">{index.time}</h1>
              <div>
                {index.details.map((list) => (
                  <li key={list}>{list}</li>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
    </div>
  );
};

export default CenterSection;
