import { Router } from "express";
import habitRouter from "./habitRouter";
import userRouter from "./userRouter";
import homeRouter from "./homeRouter";

const router: Router = Router();

router.use("/habit", habitRouter);
router.use("/user", userRouter);
router.use("/home", homeRouter);

export default router;
