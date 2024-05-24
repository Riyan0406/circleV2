import { Router } from "express";
import userRouter from "./userRouter";
import authRouter from "./authRouter";
import threadRouter from "./threadRouter";
import followRouter from "./followRouter";
import replyRouter from "./replyRouter"
import authentication from "../middlewares/authentication";
import likeRouter from "./likeRouter";

const indexRouter = Router();

indexRouter.use("/user", userRouter);
indexRouter.use(authRouter);
indexRouter.use("/threads", threadRouter)
indexRouter.use("/follow", followRouter)
indexRouter.use("/reply", replyRouter)
indexRouter.use("/like", likeRouter)

export default indexRouter;