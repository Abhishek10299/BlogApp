import React from "react";
import Blog from "./Blog";

function Blogs() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
}

export default Blogs;
