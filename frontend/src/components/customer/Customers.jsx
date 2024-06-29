import React from "react";
import Customer from "./Customer";

function Customers() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-7 items-center justify-center p-4 text-center bg-[#F8FAE5]">
      <Customer />
      <Customer />
    </div>
  );
}

export default Customers;
