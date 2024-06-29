import React from "react";



import SmallBlogs from "../../components/smallblog/SmallBlogs";
import BlogInput from "../../components/bloginput/BlogInput"
function Admin() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl pt-10 md:text-4xl font-bold text-[#1c1b1b] mt-4">
        YOUR BLOGS
      </h1>
      <SmallBlogs />
      <BlogInput/>
    </div>
  );
}

export default Admin;
