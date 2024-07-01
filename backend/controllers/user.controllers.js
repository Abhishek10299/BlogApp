import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const signup = asyncHandler(async (req, res) => {
  const { username, email, password, fullName } = req.body;
  if (
    [username, email, password, fullName].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }
  const existedUser = await User.findOne({ $or: [{ username }, { email }] });

  if (existedUser) {
    throw new ApiError(400, "User with email or username already exists");
  }

  const profilePicturePath = req.files?.profilePicture[0]?.path;

  if (!profilePicturePath) {
    throw new ApiError(400, "Profile picture is required");
  }

  const profile = await uploadOnCloudinary(profilePicturePath);

  if (!profile) {
    throw new ApiError(400, "Avatar upload failed");
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
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User Signup Successfully"));
});

export const login = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;

  if (!username && !email) {
    throw new ApiError(400, "Username or email is required");
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  const loggedInUser = await User.findById(user._id).select("-password");

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { user: loggedInUser},
        "User logged in successfully"
      )
    );
});

export const logout = asyncHandler(async(req,res)=>{
  return res.status(200).json(new ApiResponse(200, {}, "User logged Out"));
})