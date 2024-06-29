import React from "react";

function SmallBlog() {
  return (
    <div className="max-w-sm mx-auto bg-[#F8FAE5] rounded-lg shadow-lg overflow-hidden">
      <img src="/foodimg.jpg" alt="img" className="w-full h-32 object-cover" />
      <div className="p-4">
        <h3 className="text-[#76453B] font-serif text-lg">Category</h3>
        <h1 className="text-[#76453B] font-bold text-xl my-1">Title</h1>
        <p className="text-[#76453B] font-serif text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam at
          facere recusandae minima exercitationem voluptatibus odio illo!
          Corrupti, excepturi inventore?
        </p>
        <button className="bg-[#43766C] text-white rounded-lg px-3 py-1 mt-3 text-sm">
          Read More
        </button>
      </div>
    </div>
  );
}

export default SmallBlog;
