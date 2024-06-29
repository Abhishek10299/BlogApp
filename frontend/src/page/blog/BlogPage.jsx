import React from "react";
import Search from "../../components/search/Search";
import Blogs from "../../components/blog/Blogs"
import SmallBlogs from '../../components/smallblog/SmallBlogs'
function BlogPage() {
  return (
    <div className="bg-[#43766C] flex flex-col gap-5">
      <Blogs/>
      <Search />
      <SmallBlogs/>
    </div>
  );
}

export default BlogPage;
