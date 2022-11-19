import { Router } from "express";
import { habitController } from "../controller";

const router: Router = Router();

router.post("/", habitController.subscribeHabit);

export default router;
