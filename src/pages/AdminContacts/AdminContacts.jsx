import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";


const AdminContacts = () => {
  const { authorizationToken ,API} = useAuth();
  const [data, setData] = useState([]);

  

  const getAllContacts = async () => {
    try {
      const response = await fetch(`${API}/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setData(data.contacts);

    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await fetch(
        `${API}/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const result = await response.json();
      if (response.ok) {
        setData(data.filter(contact => contact._id !== id)); 
      } else {
        console.log(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <div className="p-8 bg-white min-h-max flex items-center justify-center">
      <div className="w-full max-w-4xl  bg-opacity-30 backdrop-blur-md shadow-lg rounded-lg overflow-hidden animate-fadeIn">

        <h1 className="text-3xl playfair-display-cursive  font-semibold text-gray-500 mb-6 p-6 text-center">
          Admin <span  className="text-primary">Contacts</span>
        </h1>

        <div className="overflow-x-auto  hidden lg:block">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#F2F1EF]">
              <tr>
                <th className="py-3 px-6 text-left text-gray-500 font-medium uppercase tracking-wider">
                  Username
                </th>
                <th className="py-3 px-6 text-left text-gray-500 font-medium uppercase tracking-wider">
                  Email
                </th>
                <th className="py-3 px-6 text-left text-gray-500 font-medium uppercase tracking-wider">
                  Message
                </th>
                <th className="py-3 px-6 text-left text-gray-500 font-medium uppercase tracking-wider">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
               { data && data.map((contact) => (
                <tr key={contact._id}>
                  <td className="py-4 px-6 text-gray-800">
                    {contact.username}
                  </td>
                  <td className="py-4 px-6 text-gray-500">{contact.email}</td>
                  <td className="py-4 px-6 text-gray-500">{contact.message}</td>
                  <td className="py-4 px-6 text-center">
                    <button
                     onClick={() => deleteContact(contact._id)}
                      className="bg-primary text-white px-4 py-2 rounded-lg hover:hover-btn border border-primary transition duration-200"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )) }
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 lg:hidden gap-6">
            { data && data.map((contact,index) => (
              <div
                data-aos="zoom-in"
                data-aos-once="true"
                data-aos-delay="400"
                key={index}
                className="bg-gray-70 p-6   md:space-y-3 bg-white rounded-lg shadow-md"
              >
                <h2 className=" text-xl md:text-2xl font-semibold text-center text-gray-500 mb-4">
                <span className="text-gray-400"> {contact.username}</span>
                </h2>
                <p className="text-gray-400 text-center mb-2"> {contact.email}</p>
                <p className="text-gray-400 text-center mb-2">
                  {contact.message}
                </p>
                <p className="text-gray-400">
                  
                    <button
                      className="bg-red-500 float-right text-white text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 border border-transparent rounded-lg hover:bg-red-600 transition duration-200"
                      onClick={() => deleteContact(contact._id)}
                    >
                      Delete
                    </button>
                </p>
              </div>
            ))}
          </div>

      </div>
    </div>
  );
};

export default AdminContacts;
