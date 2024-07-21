import { post } from "../controllers/post.controller.js";
import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const route = Router();

route.post(
  "/post",
  verifyJWT,
  upload.fields([{ name: "thumbnail", maxCount: 1 }]),
  post
);

export default route;
