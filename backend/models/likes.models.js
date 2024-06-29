import mongoose, { Schema } from "mongoose";

const likeSchem = new Schema(
  {
    blogid: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
    userid: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Like = mongoose.model("Like", likeSchem);
