import { Router } from "express";
import { singup } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";
const route = Router();

route.post(
  "/singup",
  upload.fields([{ name: "profilePicture", maxCount: 1 },]),
  singup
);

export default route;
