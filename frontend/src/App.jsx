import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./page/home/Home";
import BlogPage from "./page/blog/BlogPage";
import About from "./page/about/About";
import Admin from "./page/admin/Admin";
import Contact from "./page/contact/Contact";
 
function App() {
  return (
    <div className="bg-[#43766C]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blogs" element={<BlogPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
