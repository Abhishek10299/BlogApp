import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import { Blog } from "../models/blog.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const post = asyncHandler(async (req, res) => {
  const { blogTitle, category, content } = req.body;
  const userId = req.user._id;

  if (!blogTitle || !category || !content) {
    throw new ApiError(400, "All fields are required");
  }

  const thumbnailLocalPath = req.files?.thumbnail[0]?.path;
  if (!thumbnailLocalPath) {
    throw new ApiError(400, "thumbnail is require");
  }
  const thumbnail = await uploadOnCloudinary(thumbnailLocalPath);
  if (!thumbnail) {
    throw new ApiError(400, "faild at uploding at cloudinary");
  }
  const newPost = await Blog.create({
    userId,
    blogTitle,
    category,
    content,
    thumbnail: thumbnail.url,
  });

  const createdPost = await Blog.findById(newPost._id);
  if (!createdPost) {
    throw new ApiError(500, "Something went wrong while posting");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, createdPost, "Blog posted successfully"));
});
