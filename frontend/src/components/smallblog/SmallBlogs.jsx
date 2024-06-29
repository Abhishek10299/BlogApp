import React from "react";
import SmallBlog from "./SmallBlog";

function SmallBlogs() {
  return (
    <div className="container mx-auto p-6 min-h-screen">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <SmallBlog />
        <SmallBlog />
        <SmallBlog />
        <SmallBlog />
        <SmallBlog />
        <SmallBlog />
        <SmallBlog />
        <SmallBlog />
        {/* Add more SmallBlog components as needed */}
      </div>
    </div>
  );
}

export default SmallBlogs;
