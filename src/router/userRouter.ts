import { Router } from "express";
import { userController } from "../controller";

const userRouter: Router = Router();

userRouter.get("/", userController.getUserProgress);

export default userRouter;
