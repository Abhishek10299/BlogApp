import React from "react";

function Blog() {
  return (
    <div className="max-w-md mx-auto bg-[#F8FAE5] rounded-lg shadow-lg overflow-hidden">
      <img src="/foodimg.jpg" alt="img" className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-[#76453B] font-serif text-xl">Category</h3>
        <h1 className="text-[#76453B] font-bold text-2xl my-2">Title</h1>
        <p className="text-[#76453B] font-serif text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam at
          facere recusandae minima exercitationem voluptatibus odio illo!
          Corrupti, excepturi inventore?
        </p>
        <button className="bg-[#43766C] text-white rounded-lg px-4 py-2 mt-4">
          Read More
        </button>
      </div>
    </div>
  );
}

export default Blog;
