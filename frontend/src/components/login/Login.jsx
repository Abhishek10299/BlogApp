import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="flex flex-col items-center p-4 bg-[#F8FAE5] rounded-lg shadow-md w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto my-5">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1c1b1b] mt-4">
        LOGIN
      </h1>
      <form className="w-full mt-4">
        <div className="mb-4">
          <label
            className="block text-lg md:text-xl text-[#76453B] mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#43766C]"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-lg md:text-xl text-[#76453B] mb-2"
            htmlFor="password"
          >
            UserName
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#43766C]"
            placeholder="Enter UserName"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-lg md:text-xl text-[#76453B] mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#43766C]"
            placeholder="Enter Password"
          />
        </div>
        <Link to="/Signup" className="text-[#43766C] hover:underline">
          Don't have an account?
        </Link>
        <div className="mt-4">
          <button className="bg-[#43766C] text-white px-4 py-2 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-[#365c54]">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
