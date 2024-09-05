import React from "react";

const Subscription = () => {
  return (
    <div className=" text-white ">
      <div className=" bg-[hsl(0,0%,98%)] pb-5">
        <div className="py-9 gap-12 flex flex-col justify-center items-center">
          <h1 data-aos="fade-up" className="text-3xl p-1 sm:p-0 text-black text-center sm:text-4xl font-bold playfair-display-cursive">
            Get coffee <span className="text-secondary">subscription</span>
          </h1>

          <div  data-aos="fade-up" data-aos-delay="300" className=" relative sm:w-[68%] md:w-1/2 lg:w-5/12 ">
            <input
              type="text"
              className="bg-gray-100 border-transparent focus:outline-gray-200 focus:outline- rounded-full w-full relative text-black sm:text-base font-light placeholder:text-gray-400 py-2 px-5 sm:py-3 sm:px-6"
              placeholder="your email"
            />
            <button className="bg-primary rounded-full  absolute -right-9 text-white   sm:text-base font-light placeholder:text-gray-400 py-2 px-5 sm:py-3 sm:px-6">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
