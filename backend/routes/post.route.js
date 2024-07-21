import { post } from "../controllers/post.controller.js";
import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const route = Router();

route.post("/post",verifyJWT,post)

export default route