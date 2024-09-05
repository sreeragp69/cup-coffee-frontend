import React from "react";
import { useAuth } from "../../store/auth";

const About = () => {
  const { user } = useAuth();

  return (
    <div className="bg-[#F5F5F5] min-h-screen flex flex-col items-center p-6">
      <div
        data-aos="fade-up"
        data-aos-once="true"
        className="bg-white  p-8 rounded-lg shadow-lg w-full max-w-4xl"
      >
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="300"
          className="text-white text-xl font-bold tracking-widest"
        >
          <p className=" text-primary my-2">
            Hi,
            <span className="capitalize">
              {user.username ? user.username : "User"}
            </span>
          </p>
        </div>
        <h1 data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="400" className="text-4xl font-bold  mb-4 playfair-display-cursives text-[#414040]">
          About Us
        </h1>
        <p data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="400" className="text-gray-400 mb-6">
          Welcome to Coffee-Cup, where every great day begins with a perfect cup
          of coffee. Located in Kozhikode, we are more than just a café — we are
          a community gathering place for coffee enthusiasts. Our warm and
          inviting atmosphere, paired with our carefully crafted menu, offers
          something for everyone.
        </p>
        <h2 data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="500" className="text-2xl font-semibold text-gray-500 mb-4">
          Our Mission
        </h2>
        <p data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="500" className="text-gray-400 mb-6">
          Our mission is to deliver the finest coffee experience. We are
          committed to sourcing high-quality beans and brewing each cup with
          precision and care. Whether you're here for a quick coffee or a
          relaxing break, we aim to create memorable moments with every visit.
        </p>
        <h2 data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="500" className="text-2xl font-semibold text-gray-500 mb-4">
          Contact Us
        </h2>
        <p data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="500" className="text-gray-400">
          We’d love to hear from you! Whether you have a question,comment, or
          just want to say hello, feel free to reach out.
          <p data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="500">
            Email:{" "}
            <a
              href="mailto:info@coffeecup.com"
              className="text-primary hover:underline"
            >
              info@coffeecup.com
            </a>
          </p>
        </p>
        <p data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="500" className="text-gray-400 mt-3">We look forward to welcoming you!</p>
      </div>
    </div>
  );
};

export default About;
