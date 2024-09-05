import React, { useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";

const Contact = () => {
  const defaultContactForm = {
    username: "",
    email: "",
    message: "",
  };

  const [contact, setContact] = useState(defaultContactForm);

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactForm);
        toast.success("Message send successfull ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen flex flex-col items-center justify-center p-6">
      <div
        data-aos="zoom-in"
        data-aos-once="true"
        data-aos-delay="200"
        className="bg-white  p-8  shadow-lg rounded-lg w-full max-w-md"
      >
        <h2
          data-aos="fade-up"
          data-aos-once="true"
          className="text-center text-[#414040] playfair-display-cursive text-4xl font-bold mb-6"
        >
          Contact <span className="text-primary">Us</span>
        </h2>
        <form
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="300"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* contactname Field */}
          <div data-aos="fade-up" data-aos-once="true" data-aos-delay="300">
            <label
              className="block text-gray-500 text-sm font-semibold mb-2"
              htmlFor="username"
            >
              username
            </label>
            <input
              onChange={handleChange}
              value={contact.username}
              type="text"
              id="username"
              name="username"
              className="w-full bg-[#F2F1F] border rounded-lg py-3 px-4 text-gray-500 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Enter your username"
            />
          </div>

          {/* Email Field */}
          <div data-aos="fade-up" data-aos-once="true" data-aos-delay="300">
            <label
              className="block text-gray-500 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={handleChange}
              value={contact.email}
              type="email"
              id="email"
              name="email"
              className="w-full bg-[#F2F1F]  border border-gray-300 rounded-lg py-3 px-4 text-gray-500 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Field */}
          <div data-aos="fade-up" data-aos-once="true" data-aos-delay="300">
            <label
              className="block text-gray-500 text-sm font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              onChange={handleChange}
              value={contact.message}
              id="message"
              name="message"
              rows="4"
              className="w-full bg-[#F2FEF]  border border-gray-300 rounded-lg py-3 px-4 text-gray-500 placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Enter your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="400"
            className="flex justify-center"
          >
            <button
              type="submit"
              className="bg-primary hover:hover-btn border border-transparent transition-all ease-out text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
