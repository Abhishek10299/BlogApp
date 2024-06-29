import React from "react";

function Signup() {
  return (
    <div className="flex flex-col items-center p-4 bg-[#F8FAE5] rounded-lg shadow-md w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto my-5">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1c1b1b] mt-4">
        Sign Up
      </h1>
      <form className="w-full mt-4">
        <div className="mb-4">
          <label
            className="block text-lg md:text-xl text-[#76453B] mb-2"
            htmlFor="fullname"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#43766C]"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-lg md:text-xl text-[#76453B] mb-2"
            htmlFor="username"
          >
            User Name
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#43766C]"
            placeholder="User Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-lg md:text-xl text-[#76453B] mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#43766C]"
            placeholder="Email"
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
            placeholder="Password"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-lg md:text-xl text-[#76453B] mb-2"
            htmlFor="profileImage"
          >
            Profile Image
          </label>
          <input
            type="file"
            id="profileImage"
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#43766C]"
          />
        </div>
        <button className="bg-[#43766C] text-white px-4 py-2 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-[#365c54]">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
