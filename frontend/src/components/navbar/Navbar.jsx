import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="bg-[#F8FAE5] text-[#76453B] font-mono flex items-center justify-between px-6 md:px-12 h-16">
        <a href="#" className="text-2xl font-bold flex gap-2">
          <img className="h-9 w-9" src="/logo.png" alt="logo" />
          <label className="text-2xl font-bold text-[#1f3b28]">MyRecipe</label>
        </a>
        <div className="hidden md:flex gap-6 items-center">
          <ul className="flex gap-6">
            <Link to="/">
              <li className="hover:text-[#43766C]">HOME</li>
            </Link>
            <Link to="/Blogs">
              <li className="hover:text-[#43766C]">BLOG</li>
            </Link>
            <Link to="/About">
              <li className="hover:text-[#43766C]">ABOUT</li>
            </Link>
            <Link to="/Contact">
              <li className="hover:text-[#43766C]">CONTACT</li>
            </Link>
          </ul>
          <Link to="/Admin">
            <button className="bg-[#43766C] text-white rounded-lg px-4 py-2">
              ADMIN
            </button>
          </Link>
        </div>
        <div className="md:hidden">
          <i className="fa-solid fa-bars fa-lg" onClick={toggleMenu}></i>
        </div>
        {isMenuOpen && (
          <div className="absolute top-[64px] left-0 bg-[#F8FAE5] w-full flex flex-col gap-6 items-center py-2 text-lg font-serif md:hidden">
            <ul className="flex flex-col items-center gap-2">
              <Link to="/">
                <li className="hover:text-[#43766C]">HOME</li>
              </Link>
              <Link to="/Blogs">
                <li className="hover:text-[#43766C]">BLOG</li>
              </Link>
              <Link to="/About">
                <li className="hover:text-[#43766C]">ABOUT</li>
              </Link>
              <Link to="/Contact">
                <li className="hover:text-[#43766C]">CONTACT</li>
              </Link>
            </ul>
            <div>
              <Link to="/Admin">
                <button className="bg-[#43766C] text-white rounded-lg px-4 py-2">
                  ADMIN
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
      <hr className="h-px border-0 dark:bg-[#e9dfda]" />
    </>
  );
}

export default Navbar;
