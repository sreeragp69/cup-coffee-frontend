import { BrowserRouter, Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Service from "./pages/Service/Service";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Error from "./pages/Error/Error";
import Logout from "./pages/Logout/Logout";
import AdminLayout from "./components/Layouts/AdminLayout";
import AdminUsers from "./pages/AdminUsers/AdminUsers";
import AdminContacts from "./pages/AdminContacts/AdminContacts";
import AdminUpdate from "./pages/AdminUpdate/AdminUpdate";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/*" element={<Error />} />

            <Route path="/admin" element={<AdminLayout />}>
              <Route path="users" element={<AdminUsers />} />
              <Route path="contacts" element={<AdminContacts />} />
              <Route path="/admin/users/:id/edit" element={<AdminUpdate />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
