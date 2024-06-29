import React from "react";

function Footer() {
  return (
    <>
      <hr className="h-px border-0 dark:bg-[#e9dfda]" />
      <div className="bg-[#F8FAE5] text-[#76453B]">
        <div className="flex flex-col p-6 md:p-10">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-[450px] mb-6 md:mb-0">
              <h3 className="text-lg text-[#1f3b28] font-bold mb-2">ABOUT</h3>
              <p className="text-sm">
                Welcome to MyRecipe, your ultimate destination for culinary
                inspiration and delicious recipes! Whether you're a seasoned
                chef or a kitchen newbie, our blog is designed to help you
                explore the wonderful world of cooking.
              </p>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg text-[#1f3b28] font-bold mb-2">
                CATEGORIES
              </h3>
              <ul className="text-sm space-y-1">
                <li className="hover:text-[#43766C]">Appetizers</li>
                <li className="hover:text-[#43766C]">Main Courses</li>
                <li className="hover:text-[#43766C]">Snacks</li>
                <li className="hover:text-[#43766C]">Desserts</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-[#1f3b28] font-bold mb-2">
                QUICK LINKS
              </h3>
              <ul className="text-sm space-y-1">
                <li className="hover:text-[#43766C]">About Us</li>
                <li className="hover:text-[#43766C]">Contact Us</li>
                <li className="hover:text-[#43766C]">Contribute</li>
                <li className="hover:text-[#43766C]">Privacy Policy</li>
              </ul>
            </div>
          </div>

          <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              Copyright © 2024 All Rights Reserved by Scanfcode.
            </p>
            <a href="#" className="flex items-center space-x-2">
              <img className="h-9 w-9" src="/logo.png" alt="logo" />
              <label className="text-lg font-bold">MyRecipe</label>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
