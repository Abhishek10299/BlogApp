import React from "react";
import { Link } from "react-router-dom";
function Search({button}) {
  return (
    <div className="flex flex-col items-center p-4 bg-[#F8FAE5] rounded-lg shadow-md w-full md:w-1/2 mx-auto my-5">
      <div className="flex items-center w-full mb-4">
        <input
          type="text"
          placeholder="Search.."
          className="w-full p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#43766C]"
        />
        <button className="p-2 bg-[#43766C] text-white rounded-r-lg">
          <i className="fa fa-magnifying-glass"></i>
        </button>
      </div>
      {button?<h1 className="text-lg md:text-xl lg:text-2xl text-[#76453B] font-serif mb-4">
        or
      </h1>:""}
      {button?<Link to="/Blogs">
        <button className="bg-[#43766C] text-white px-4 py-2 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-[#365c54]">
          View All Blogs
        </button>
      </Link>:""}
      
    </div>
  );
}

export default Search;
