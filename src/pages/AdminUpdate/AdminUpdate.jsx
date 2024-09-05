import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const AdminUpdate = () => {
  const { authorizationToken ,API} = useAuth();

  // State to manage form input values
  const [data, setdata] = useState({
    username: "",
    email: "",
    phone: "",
  });

  
  const params = useParams();
  

  const URL =`${API}`

  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `${API}/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const data = await response.json();
      setdata(data);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  // Handler for input changes
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value });
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${API}/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers:{
            "Content-Type":"application/json",
            Authorization: authorizationToken,
          },
          body:JSON.stringify(data)
        }

      );

       if (response.ok) {
         toast.success("Updated")
        }else{
        toast.error("Not Updated")

       }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full mx-aut0 p-2 bg-white bg-opacity-30 backdrop-blur-md shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center playfair-display-cursive text-gray-500">Update <span className="text-primary">User Data</span></h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username Input */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-500"
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={data.username}
            onChange={handleInput}
            required
            className="w-full  border  rounded-lg py-3 px-3 text-gray-500 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleInput}
            required
            className="w-full  border  rounded-lg py-3 px-3 text-gray-500 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Phone Input */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone:
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            autoComplete="off"
            value={data.phone}
            onChange={handleInput}
            required
            className="w-full  border  rounded-lg py-3 px-3 text-gray-500 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Update Button */}
        <div className="flex justify-center gap-3 flex-col items-center">

        <button
          type="submit"
          className="bg-primary hover:hover-btn border-transparent ease-in-out transition-all border text-white font-bold py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
          Update
        </button>
          </div>
      </form>
    </div>
  );
};

export default AdminUpdate;
