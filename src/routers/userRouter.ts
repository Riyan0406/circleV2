import { Router } from "express";
import * as userController from "../controllers/userController";
import authentication from "../middlewares/authentication";

const userRouter = Router();

userRouter.get("/:userId", userController.getUser);
userRouter.post("/", userController.createUser);
userRouter.delete("/:userId", userController.deleteUser);
userRouter.put("/:userId", userController.updateUser);
userRouter.get("/", userController.getall )

export default userRouter;