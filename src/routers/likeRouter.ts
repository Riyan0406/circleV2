import { Router } from "express";
import * as likeController from "../controllers/likeController"
import authentication from "../middlewares/authentication";

const likeRouter = Router()

likeRouter.post("/:idThread", authentication, likeController.createLike)

export default likeRouter 