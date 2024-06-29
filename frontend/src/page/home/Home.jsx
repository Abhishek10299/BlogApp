import React from "react";
import Blogs from "../../components/blog/Blogs";
import Display from "../../components/display/Display";
import Customers from "../../components/customer/Customers";

import Search from "../../components/search/Search";
function Home() {
  return (
    <>
      <div className="bg-[#43766C] flex flex-col gap-5">
        <div className="flex flex-col-reverse md:flex-row h-screen items-center  p-6 md:p-12 justify-between">
          <div className="md:w-1/2">
            <h1 className="font-bold text-2xl md:text-[40px] text-[#1c1b1b]">
              Your Guide to Culinary Delights
            </h1>
            <p className="font-serif text-lg md:text-xl text-[#F8FAE5] mt-4 md:mt-6">
              Welcome to MyRecipe, your ultimate destination for culinary
              inspiration and delicious recipes! Whether you're a seasoned chef
              or a kitchen newbie, our blog is designed to help you explore the
              wonderful world of cooking.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              className="w-full h-auto rounded-xl mt-6 md:mt-0"
              src="/foodimg.jpg"
              alt="Culinary Delights"
            />
          </div>
        </div>
        <Blogs />
        <Customers />
        <Display />
        <Search button={true} />
      </div>
    </>
  );
}

export default Home;
