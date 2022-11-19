import { Router } from "express";
import userRouter from "./userRouter";
import homeRouter from "./homeRouter";

const router: Router = Router();

router.use("/user", userRouter);
router.use("/home", homeRouter);

export default router;
