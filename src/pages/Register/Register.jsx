import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";

const Register = () => {
  
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  
  const navigate = useNavigate();
  
  const { storeTokenInLS ,API} = useAuth();
  const URL = `${API}/api/auth/register`;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log(res_data);

      if (response.ok) {
        //* STORE TOKEN
        storeTokenInLS(res_data.token);

        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        toast.success("Registration Successfull");

        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }

      console.log(response);
    } catch (error) {
      console.error("Register", error);
    }
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen flex items-center justify-center p-6">
      <div className="bg-gary-500 p-8  shadow-lg rounded-lg w-full max-w-md">
        <h2
          data-aos="zoom-in"
          data-aos-once="true"
          className="text-center text-primary text-4xl font-bold mb-6"
        >
          Register
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Username Field */}
          <div data-aos="zoom-in" data-aos-once="true">
            <label
              className="block text-gary-500 text-sm font-semibold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              onChange={handleChange}
              value={user.username}
              type="text"
              id="username"
              name="username"
              className="w-full bg-[#F2F1F] border rounded-lg py-3 px-4 text-gray-500 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Enter your username"
            />
          </div>

          {/* Email Field */}
          <div data-aos="zoom-in" data-aos-once="true">
            <label
              className="block text-gary-500 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={handleChange}
              value={user.email}
              type="email"
              id="email"
              name="email"
              className="w-full bg-[#F2F1F] border rounded-lg py-3 px-4 text-gray-500  placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone Field */}
          <div data-aos="zoom-in" data-aos-once="true">
            <label
              className="block text-gary-500 text-sm font-semibold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              onChange={handleChange}
              value={user.phone}
              type="tel"
              id="phone"
              name="phone"
              className="w-full bg-[#F2F1F] border rounded-lg py-3 px-4 text-gray-500 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Password Field */}
          <div data-aos="zoom-in" data-aos-once="true">
            <label
              className="block text-gary-500 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={handleChange}
              value={user.password}
              type="password"
              id="password"
              name="password"
              className="w-full bg-[#F2F1F] border rounded-lg py-3 px-4 text-gray-500 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center gap-4 flex-col items-center">
            <button
              data-aos="zoom-in"
              data-aos-once="true"
              type="submit"
              className="bg-primary hover:hover-btn border border-transparent transition-all ease-out text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Join Now
            </button>
            <p
              data-aos="zoom-in"
              data-aos-once="true"
              className="text-sm text-gray-500"
            >
              Have an Account ?{" "}
              <Link to={"/login"} className="text-primary">
                Login Here{" "}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
