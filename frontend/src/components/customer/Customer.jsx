import React from "react";

function Customer() {
  return (
    
      <div className="w-full md:w-[700px] p-5 bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
        <img
          src="/people.jpg"
          alt="customer"
          className="rounded-xl w-full object-cover h-64"
        />
        <h1 className="text-2xl md:text-3xl font-bold text-[#1c1b1b] mt-4">
          Hi, I'm Name
        </h1>
        <p className="text-lg md:text-xl text-[#76453B] mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est impedit
          eos quidem assumenda itaque molestiae. Libero eius fugit porro, dicta
          blanditiis saepe numquam expedita magni quis nulla optio. Ratione,
          laboriosam?
        </p>
        <button className="bg-[#43766C] px-4 py-2 rounded-lg mt-4 text-white shadow-md transform transition duration-300 hover:scale-105 hover:bg-[#365c54]">
          LEARN MORE
        </button>
      </div>
  );
}

export default Customer;
