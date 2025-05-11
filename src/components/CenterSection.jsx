import React from "react";

const CenterSection = () => {
  const images = [
    "https://hilarious-klepon-3f94ec.netlify.app/WhatsApp%20Image%202025-04-26%20at%2012.36.50%20(1).jpeg",
    "https://hilarious-klepon-3f94ec.netlify.app/WhatsApp%20Image%202025-04-26%20at%2012.37.00.jpeg",
    "https://hilarious-klepon-3f94ec.netlify.app/WhatsApp%20Image%202025-04-26%20at%2012.37.09.jpeg",
    "https://hilarious-klepon-3f94ec.netlify.app/WhatsApp%20Image%202025-04-26%20at%2012.37.32.jpeg",
  ];

  const diningData = [
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
      details: [
        "Multi-cuisine buffet with themed nights",
        "Live grill and tandoor counter",
        "Wide variety of Indian and continental mains",
        "Dessert station with sweets, pastries, and ice cream",
      ],
    },
  ];

  return (
    <div className="mx-4 md:mx-20 my-10">
      <section className="mb-12">
        <h1 className="text-2xl font-bold mb-2">Our Menus</h1>
        <div className="h-1 bg-amber-200 w-20 mb-6"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

      <section>
        <h1 className="text-2xl font-bold mb-2">Dining Experience</h1>
        <div className="h-1 bg-amber-200 w-20 mb-6"></div>
        <div className="space-y-6">
          {diningData.map((meal, index) => (
            <div
              key={index}
              className="bg-[#c1a717] text-red-900 rounded-2xl p-5 shadow"
            >
              <h2 className="text-xl font-semibold text-green-950 mb-1">
                {meal.meal}
              </h2>
              <p className="mb-2">{meal.time}</p>
              <ul className="list-disc list-inside space-y-1">
                {meal.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CenterSection;
