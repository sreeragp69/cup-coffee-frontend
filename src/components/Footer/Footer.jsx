import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 2,
    title: "service",
    link: "/service",
  },
  {
    id: 3,
    title: "About",
    link: "/about",
  },
];

const bgImage = {
  backgroundColor: "#F2F1EF",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "300px",
  width: "100%",
};
const Footer = () => {
  return (
    <div style={bgImage} className=" text-white">
      <span id="about"></span>
      <div className=" min-h-[300px] ">
        <div className="container relative grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div data-aos="zoom-in"  className="py-8 px-4">
            <Link
              to="/"
              className="font-semibold tracking-widest text-2xl sm:text-3xl playfair-display-cursive text-black
"
            >
              Cup <span className="text-secondary">Coffe</span>
            </Link>
            <p className=" text-gray-500 pt-4">
              Perfect Brews, Inviting Atmosphere, Memorable Experiences -{" "}
              <span>Cup Coffe</span>
            </p>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div data-aos="zoom-in" className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3 text-black">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <Link
                      to={data.link}
                      className="inline-block hover:scale-105   duration-200  text-gray-500"
                    >
                      {data.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div data-aos="zoom-in" className="py-8 px-4 text-gray-500">
              <h1 className="text-xl font-semibold sm:text-left mb-3 text-black">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <Link
                      to={data.link}
                      className="inline-block hover:scale-105   duration-200 "
                    >
                      {data.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div data-aos="zoom-in" className="py-8 px-4 col-span-2 sm:col-auto text-gray-500">
              <h1 className="text-xl font-semibold sm:text-left mb-3 text-black">
                Address
              </h1>
              <div>
                <p className="mb-3 ">
                  Upper Ground Floor, Hilite Mall, Thondayad Bypass, Kozhikode,
                  Kerala 673014
                </p>
                <p>+91 1234567890</p>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
