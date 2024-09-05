import React from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { FaUser } from "react-icons/fa6";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaCoffee } from "react-icons/fa";
import NavBar from "../NavBar/NavBar";

const AdminLayout = () => {
  const { user,isLoading ,API} = useAuth();
  


  if (isLoading) {
    return ( <div className="flex items-center justify-center h-full">
      <div className="loader">Loading...</div>
      {/* You can replace the above with a spinner or animation */}
    </div>)
  }

  if (!user.isAdmin) {
    return <Navigate to={"/"}/>
  }

  return (
    <>
 
    <div className="flex h-full ">
      {/* Sidebar */}
      <div className="w-auto playfair-display-cursive  bg-[#F3F4F6] text-gray-500  p-3 md:p-6">

        <h2 className="text-2xl hidden md:inline font-bold mb-6">Admin Panel</h2>
        <h2 className="text-xs  w-8 md:w-12 md:hidden  font-bold mb-6">Admin Panel</h2>

        {/* Sidebar Navigation Links */}
        <nav className="space-y-4 hidden  md:flex flex-col items-start justify-between ">
          <NavLink
            to="/admin/users"
            className={`block p-2 hover:text-primary rounded `}
          >
            <div className="sidebar-item">Users</div>
          </NavLink>
          <NavLink
            to="/admin/contacts"
            className={`block p-2 hover:text-primary rounded `}
          >
            <div className="sidebar-item">Contacts</div>
          </NavLink>
          <NavLink
            to="/service"
            className={`block p-2 hover:text-primary rounded `}
          >
            <div className="sidebar-item">Services</div>
          </NavLink>
         
        </nav>


        <nav className="space-y-4  text-sm md:hidden flex-col items-start justify-between ">
          <NavLink
            to="/admin/users"
            className={`block p-2 hover:text-primary rounded `}
          >
            <div className="sidebar-item"><FaUser /></div>
          </NavLink>
          <NavLink
            to="/admin/contacts"
            className={`block p-2 hover:text-primary rounded `}
          >
            <div className="sidebar-item"><RiContactsBook2Fill /></div>
          </NavLink>
          <NavLink
            to="/service"
            className={`block p-2 hover:text-primary rounded `}
          >
            <div className="sidebar-item"><FaCoffee /></div>
          </NavLink>
         
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:p-6 bg-white">
        <Outlet />
       
      </div>
    </div>
    </>
  );
};

export default AdminLayout;
