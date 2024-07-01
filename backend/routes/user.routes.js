import { Router } from "express";
import { signup, login, logout } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";

const route = Router();

route.post(
  "/singup",
  upload.fields([{ name: "profilePicture", maxCount: 1 }]),
  signup
);

route.post("/login",login)
route.post("/logout",logout)

export default route;
