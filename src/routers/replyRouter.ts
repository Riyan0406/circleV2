import { Router } from "express";
import * as replyController from "../controllers/replyController"
import authentication from "../middlewares/authentication";
import uploads from "../middlewares/uploads";

const replyRouter = Router()

replyRouter.post("/:threadId", authentication, uploads(),replyController.createReplies)

export default replyRouter