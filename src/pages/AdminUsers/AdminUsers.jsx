import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AdminUsers = () => {
  const { authorizationToken,API } = useAuth();
  const [users, setUsers] = useState([]);

  const URL=`${API}/api/admin/users`

  //! GET ALL USER  DATA
  const getAllUsersData = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  //! DELETE USER
  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `${API}/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      if (response.ok) {
        getAllUsersData();
        toast.success("User deleted successfully");
      } else {
        toast.error("Failed to delete user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
      <div className="p-8 bg-white min-h-max flex items-center justify-center">
        <div className="w-full bg-white bg-opacity-30 backdrop-blur-md shadow-lg rounded-lg overflow-hidden">
          <h2 className="text-2xl md:text-3x font-bold mb-4 md:mb-6 text-center playfair-display-cursive text-gray-500">
            Admin <span className="text-primary">Users</span>
          </h2>
          <div className="overflow-x-auto hidden lg:block ">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-[#F2F1EF]">
                <tr>
                  <th className="py-3 px-4 text-left text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider border-b">
                    Name
                  </th>
                  <th className="py-3 px-4 text-left text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider border-b">
                    Email
                  </th>
                  <th className="py-3 px-4 text-left text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider border-b">
                    Phone
                  </th>
                  <th className="py-3 px-4 text-left text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider border-b">
                    Update
                  </th>
                  <th className="py-3 px-4 text-left text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider border-b">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users &&
                  users.map((curUser) => (
                    <tr key={curUser._id}>
                      <td className="py-4  px-4 text-sm md:text-base text-gray-500 whitespace-nowrap">
                        {curUser.username}
                      </td>
                      <td className="py-4  px-4 text-sm md:text-base text-gray-500 whitespace-nowrap">
                        {curUser.email}
                      </td>
                      <td className="py-4  px-4 text-sm md:text-base text-gray-500 whitespace-nowrap">
                        {curUser.phone}
                      </td>
                      <td className="py-4  px-4">
                        <Link to={`/admin/users/${curUser._id}/edit`}>
                          <button className="bg-primary text-white text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 border border-transparent rounded-lg hover:bg-primary-dark transition duration-200">
                            Update
                          </button>
                        </Link>
                      </td>
                      <td className="py-4  px-4">
                        <button
                          className="bg-red-500 text-white text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 border border-transparent rounded-lg hover:bg-red-600 transition duration-200"
                          onClick={() => deleteUser(curUser._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 lg:hidden gap-6">
            {users && users.map((curUser, index) => (
              <div
                data-aos="zoom-in"
                data-aos-once="true"
                data-aos-delay="400"
                key={index}
                className="bg-gray-70 p-6  md:space-y-5 bg-white rounded-lg shadow-md"
              >
                <h2 className=" text-xl md:text-2xl font-semibold text-gray-500 mb-4">
                 Name: <span className="text-gray-400"> {curUser.username}</span>
                </h2>
                <p className="text-gray-400 mb-2">Email: {curUser.email}</p>
                <p className="text-gray-400 mb-2">Phone: {" "}
                  <span className="font-bold text-gray-500"></span>
                  {curUser.phone}
                </p>
                <p className="text-gray-400">
                  <div className="flex justify-between items-center">
                    <Link to={`/admin/users/${curUser._id}/edit`}>
                      <button className="bg-primary text-white text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 border border-transparent rounded-lg hover:bg-primary-dark transition duration-200">
                        Update
                      </button>
                    </Link>
                    <button
                      className="bg-red-500 text-white text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 border border-transparent rounded-lg hover:bg-red-600 transition duration-200"
                      onClick={() => deleteUser(curUser._id)}
                    >
                      Delete
                    </button>
                  </div>
                </p>
              </div>
            ))}
          </div>


          
        </div>
      </div>
    </>
  );
};

export default AdminUsers;
