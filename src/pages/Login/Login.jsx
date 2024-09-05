import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";

const Login = () => {
  const { storeTokenInLS ,API} = useAuth();
  const URL = `${API}/api/auth/login`;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

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
    

      if (response.ok) {
        //* STORE TOKEN
        storeTokenInLS(res_data.token);

        toast.success("Login Successful");

        setUser({
          email: "",
          password: "",
        });

        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );

        console.error("Invalid Credentials");
      }
    } catch (error) {
      console.log( error);
    }
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen flex items-center justify-center p-6">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <h2
          data-aos="zoom-in"
          data-aos-once="true"
          className="text-center text-primary text-4xl font-bold mb-6"
        >
          Login
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div data-aos="zoom-in" data-aos-once="true">
            <label
              className="block text-gray-500 text-sm font-semibold mb-2"
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
              className="w-full  border  rounded-lg py-3 px-4 text-gray-500 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div data-aos="zoom-in" data-aos-once="true">
            <label
              className="block text-gray-500 text-sm font-semibold mb-2"
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
              className="w-full  border  rounded-lg py-3 px-4 text-gray-500 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center gap-4 flex-col items-center">
            <button
              data-aos="zoom-in"
              data-aos-once="true"
              type="submit"
              className="bg-primary hover:hover-btn border-transparent ease-in-out transition-all border text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Login
            </button>
            <p
              data-aos="zoom-in"
              data-aos-once="true"
              className="text-sm text-gray-500"
            >
              Dont'f have an account ?{" "}
              <Link to={"/register"} className="text-primary">
                Sign up{" "}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
