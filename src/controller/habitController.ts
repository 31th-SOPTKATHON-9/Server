import { Request, Response } from "express";
import { habitService } from "../service";

// 위인 구독
const subscribeHabit = async (req: Request, res: Response) => {
  const { starId } = req.body;

  const data = await habitService.subscribeHabit(starId);

  if (!data) {
    return res.status(400).json({ status: 400, message: "구독 실패" });
  }
  return res.status(200).json({ status: 200, message: "구독 성공", data });
};

// 위인 검색한 결과 조회
const searchHabit = async (req: Request, res: Response) => {
  const { starName } = req.query;

  if (!starName) return res.status(400).json({ status: 400, message: "검색 결과 없음" });

  const searchedHabit = await habitService.searchHabit(starName);
  return res.status(200).json({ status: 200, message: "검색 성공", searchedHabit });
};

const habitController = {
  subscribeHabit,
  searchHabit,
};

export default habitController;
