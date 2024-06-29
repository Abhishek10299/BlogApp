import React, { useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"],
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block",
];

function BlogInput() {
  const { quill, quillRef } = useQuill({ modules, formats });
  const [content, setContent] = useState("");

  React.useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML("Enter Blog Content");
    }
    if (quill) {
      quill.on("text-change", () => {
        setContent(quill.root.innerHTML);
      });
    }
  }, [quill]);

  

  return (
    <div className="flex flex-col items-center p-6 bg-[#F8FAE5] shadow-lg rounded-lg w-full mx-auto my-8 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1c1b1b] mt-4 mb-6">
        New Blog Post
      </h1>
      <form className="w-full px-4 md:px-8 lg:px-16">
        <div className="w-full mb-5">
          <label
            className="block text-lg md:text-xl text-[#76453B] mb-2"
            htmlFor="title"
          >
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#43766C] shadow-sm"
            placeholder="Enter Blog Title"
          />
        </div>

        <div className="w-full mb-5">
          <label
            className="block text-lg md:text-xl text-[#76453B] mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <select
            id="category"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#43766C] shadow-sm"
          >
            <option value="">Select Category</option>
            <option value="appetizers">Appetizers</option>
            <option value="main-courses">Main Courses</option>
            <option value="desserts">Desserts</option>
            <option value="beverages">Beverages</option>
            <option value="vegan">Vegan</option>
            <option value="gluten-free">Gluten-Free</option>
          </select>
        </div>

        <div className="w-full mb-5">
          <label
            className="block text-lg md:text-xl text-[#76453B] mb-2"
            htmlFor="image"
          >
            Blog Image
          </label>
          <input
            type="file"
            id="image"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#43766C] shadow-sm"
            accept="image/*"
          />
        </div>

        <div className="w-full mb-5">
          <label
            className="block text-lg md:text-xl text-[#76453B] mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <div
            className="h-[500px] border bg-white border-gray-300 shadow-sm"
            ref={quillRef}
          />
        </div>

        <div className="w-full text-center">
          <button className="bg-[#43766C] text-white px-6 py-3 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-[#365c54] focus:outline-none focus:ring-2 focus:ring-[#365c54]">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}

export default BlogInput;
