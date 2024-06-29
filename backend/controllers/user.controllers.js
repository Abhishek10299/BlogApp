import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const singup = asyncHandler(async (req, res) => {
  const { username, email, password, fullName } = req.body;
  if (
    [username, email, password, fullName].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All field are require");
  }
  const existedUser = await User.findOne({ $or: [{ username }, { email }] });

  if (existedUser) {
    throw new ApiError(400, "user with email or username already exists");
  }

  const profilePicturePath = req.files?.profilePicture[0]?.path;

  if (!profilePicturePath) {
    throw new ApiError(400, "profile Picture is required");
  }
  
  const profile = await uploadOnCloudinary(profilePicturePath);
  
  
  if (!profile) {
    throw new ApiError(400, "Avatar file is required");
  }

  const newUser = await User.create({
    username: username.toLowerCase(),
    email,
    password,
    fullName,
    profilePicture: profile.url,
  });
  const createdUser = await User.findById(newUser._id).select("-password");
  if (!createdUser) {
    throw new ApiError("500", "Something went wrong while regestring the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User Singup Succesfully"));
});
