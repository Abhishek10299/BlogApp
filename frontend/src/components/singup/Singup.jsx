import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    profilePicture: null,
  });

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: e.target.files[0],
    }));
  };
  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-[#F8FAE5] rounded-lg shadow-md w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto my-5">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1c1b1b] mt-4">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className="w-full mt-4">
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
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
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
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
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
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
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
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-lg md:text-xl text-[#76453B] mb-2"
            htmlFor="profilePicture"
          >
            Profile Image
          </label>
          <input
            type="file"
            id="profilePicture"
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#43766C]"
            onChange={handleFileChange}
          />
        </div>
        <div className="mb-4">
          <Link to="/Login" className="text-[#43766C] hover:underline">
            I have an account?
          </Link>
        </div>
        <button
          type="submit"
          className="bg-[#43766C] text-white px-4 py-2 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-[#365c54]"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
