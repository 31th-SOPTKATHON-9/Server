import { Router } from "express";
import habitRouter from "./habitRouter";

const router: Router = Router();

router.use("/habit", habitRouter);

export default router;
