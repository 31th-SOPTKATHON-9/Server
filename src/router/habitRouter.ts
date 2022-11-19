import { Router } from "express";
import { habitController } from "../controller";

const router: Router = Router();

// 위인 구독
router.post("/", habitController.subscribeHabit);

// 위인 검색한 결과 조회
router.get("/search", habitController.searchHabit);

export default router;
