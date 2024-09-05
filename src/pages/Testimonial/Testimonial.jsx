import React from "react";
import Slider from "react-slick";


const Testimonial = () => {
  const TestimonialData = [
    {
      id: 1,
      name: "Jhon",
      text: "The best coffee I've ever had! The atmosphere is cozy and the staff are incredibly friendly.",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 2,
      name: "Kevin",
      text: "A perfect spot for coffee lovers. The espresso is rich and the pastries are delicious.",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 3,
      name: "Lilly",
      text: "Great ambiance and excellent coffee. It's my go-to place for a relaxing break.",
      img: "https://picsum.photos/103/104",
    },
    {
      id: 4,
      name: "Emma",
      text: "The lattes here are to die for! Plus, the service is always top-notch.",
      img: "https://picsum.photos/104/105",
    },
    {
      id: 5,
      name: "Olivia",
      text: "I love this cafe! The cold brew is amazing and the staff are so welcoming.",
      img: "https://picsum.photos/105/106",
    },
    {
      id: 6,
      name: "Noah",
      text: "Excellent coffee and a great selection of snacks. Perfect place to unwind.",
      img: "https://picsum.photos/106/107",
    },
    {
      id: 7,
      name: "Ava",
      text: "The best place in town for a coffee break. The cappuccinos are superb!",
      img: "https://picsum.photos/107/108",
    },
    {
      id: 8,
      name: "Liam",
      text: "A hidden gem! The mocha is heavenly and the environment is so peaceful.",
      img: "https://picsum.photos/108/109",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-14 mb-10">
      <div className="container">
        {/* Header Section  */}
        <div data-aos="fade-up" className="text-center mb-10">
          <h1 className="text-4xl font-bold playfair-display-cursive text-secondary">
            Testimonials
          </h1>
        </div>

        {/* Testimonials Card Section  */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-[#F2F1EF] relative">
                  {/* Image section  */}
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt="Testimonial Icons"
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* Content Section  */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-primary playfair-display-cursive">
                        {data.name}
                      </h1>
                    </div>
                  </div>

                  <p className="text-primary/40 text-8xl font-serif absolute top-0 right-1">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
