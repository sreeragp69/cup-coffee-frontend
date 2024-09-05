import React from "react";

import service_coffee1 from "../../assets/service_coffee1.png";
import service_coffee2 from "../../assets/service_coffee2.png";
import service_coffee3 from "../../assets/service_coffee3.png";

const Coffes = () => {
  const ServicesData = [
    {
      id: 1,
      img: service_coffee1,
      name: "Espreso",
      description:
        "Bold espresso with a rich and intense flavor profile.",
      aosDelay: "100",
    },
    {
      id: 2,
      img: service_coffee2,
      name: "Americano",
      description:
        "Smooth blend with robust flavor and satisfying aromatic undertones.",
      aosDelay: "200",
    },
    {
      id: 3,
      img: service_coffee3,
      name: "Cappuccino",
      description:
        "Espresso with creamy milk foam and cocoa sprinkles.",
      aosDelay: "500",
    },
  ];

  return (
    <>
      <span id="services"></span>
      <div className="py-10 bg-[#F5F5F5]">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl playfair-display-cursive " data-aos="fade-up">
              Best Coffee For You
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
              key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white cursor-pointer duration-300  relative shadow-lg duration-high group max-w-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center space-y-2">
                  <div className="w-full "></div>
                  <h1 className="text-xl playfair-display-cursive text-secondary">{service.name}</h1>
                  <p className="text-gray-400 font-thin group-hover:text-black duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Coffes;
