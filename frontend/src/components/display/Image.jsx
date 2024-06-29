import React from "react";

function Image() {
  return (
    <div className="px-4 flex flex-col items-center">
      <img
        src="/foodimg1.jpg"
        alt="food"
        className="rounded-full w-24 md:w-32 lg:w-40"
      />
      <h1 className="mt-4 text-lg md:text-xl lg:text-2xl text-[#F8FAE5] font-serif">
        HEALTHY
      </h1>
    </div>
  );
}

export default Image;
