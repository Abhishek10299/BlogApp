import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
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
    content: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export const Comment = mongoose.model("Comment", commentSchema);
