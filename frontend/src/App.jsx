import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {Toaster} from "react-hot-toast"

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./page/home/Home";
import BlogPage from "./page/blog/BlogPage";
import About from "./page/about/About";
import Admin from "./page/admin/Admin";
import Contact from "./page/contact/Contact";
import Signup from "./components/singup/Singup";
import Login from "./components/login/Login";

function App() {
  const isAuthorized = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="bg-[#43766C]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blogs" element={<BlogPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/Signup"
          element={isAuthorized ? <Navigate to="/Admin" /> : <Signup />}
        />
        <Route
          path="/Login"
          element={isAuthorized ? <Navigate to="/Admin" /> : <Login />}
        />
        <Route
          path="/Admin"
          element={isAuthorized ? <Admin /> : <Navigate to="/Signup" />}
        />
      </Routes>
      <Footer />
      <Toaster/>
    </div>
  );
}

export default App;
