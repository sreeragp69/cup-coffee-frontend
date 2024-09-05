import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth";
import Logo from "../../assets/Cup_Coffe.png";

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const { isLoggedIn } = useAuth();
  const [nav, setNav] = useState(false);

  

  const Menus = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Contact",
      link: "/contact",
    },
    {
      id: 4,
      name: "Services",
      link: "/service",
    },
  ];

  //  Sidebar function

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="text-gray-500 bg-[#F2F1EF]">
      <div className="container py-2">
        <div className="flex  items-center gap-4 md:justify-between">
          {/* Hamburger menu  */}
          <div
            className="cursor-pointer block md:hidden z-50  fixed right-5 top-5"
            aria-label="Toggle Navigation"
          >
            {!nav ? (
              <div className="flex items-center justify-between gap-3">
                {isLoggedIn ? (
                  <NavLink to={"/logout"}>
                    <button className="rounded-full text-gray-500  text-sm hover:scale-105 duration-200 flex  items-center">
                      Logout
                    </button>
                  </NavLink>
                ) : (
                  <div className="flex flex-col justify-center gap-1 items-center ">
                    <NavLink
                      data-aos="fade-down"
                      data-aos-delay="300"
                      data-aos-once="true"
                      to="/register"
                      className={({ isActive }) =>
                        `text-xs  transition-colors duration-300 ${
                          isActive
                            ? "text-primary"
                            : "text-gray-500 hover:text-white"
                        }`
                      }
                    >
                      Signup
                    </NavLink>
                  </div>
                )}

                <RxHamburgerMenu onClick={handleNav} className="text-2xl p-1" />
              </div>
            ) : (
              <RxCross2 onClick={handleNav} className="text-2xl p-1" />
            )}
          </div>

          {/* Hidden Sidebar  */}
          <div
            className={
              nav
                ? "bg-white z-50  py-10 px-5 fixed left-0 top-0 h-full w-[50%]  md:hidden ease-in-out duration-700  lg:left-[-100%]"
                : "lg:left-[-100%] fixed left-[-100%] ease-in-out duration-1000 h-full w-[60%] top-0 "
            }
          >
            <div className="flex flex-col items-center">
              <div>
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-28 md:w-32  hover:scale-105 duration-500 ease-in-out cursor-pointer"
                />
              </div>
              <ul className="flex flex-col items-center  gap-2">
                {Menus.map((data, index) => (
                  <li
                    key={index}
                    className=" border-b border-b-coral-red last:border-0 w-full"
                  >
                    <NavLink
                      to={data.link}
                      className={({ isActive }) =>
                        `inline-block text-base  py-4 px-14 text-gray-500 hover:text-primary duration-200 ${
                          isActive ? "text-primary " : ""
                        } `
                      }
                    >
                      {data.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Links section     */}
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="sm:flex justify-between items-center gap-4 hidden "
          >
            <ul className="hidden  md:flex items-center gap-2">
              {Menus.map((data, index) => (
                <li key={index}>
                  <NavLink
                    to={data.link}
                    className={({ isActive }) => `inline-block text-lg py-4 px-4
                     text-gray-500 hover:text-primary duration-200  ${
                       isActive ? "text-primary" : "text-gray-500"
                     }`}
                  >
                    {data.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo section  */}
          <div data-aos="fade-down" data-aos-once="true">
            <img
              src={Logo}
              alt="Logo"
              className="w-20 md:w-28 lg:mr-48 hover:scale-105 duration-500 ease-in-out cursor-pointer"
            />
          </div>

          {/* user section */}
          <div
            data-aos="fade-down"
            data-aos-once="true"
            className="md:flex hidden justify-between
           gap-6"
          >
            {isLoggedIn ? (
              <NavLink to={"/logout"}>
                <button className="rounded-full text-gray-500  hover:scale-105 duration-200 flex  items-center">
                  Logout
                </button>
              </NavLink>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `text-lg  transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-gray-500 "
                    }`
                  }
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `text-lg  transition-colors duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-gray-500 hover:text-white"
                    }`
                  }
                >
                  Signup
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
