import { Router } from "express";
import homeController from "../controller/HomeController";

const router: Router = Router();

router.get("/day", homeController.getHabitByDay);
router.patch("/:habitId", homeController.changeCheck);

export default router;
