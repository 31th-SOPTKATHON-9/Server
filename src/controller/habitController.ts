import { Request, Response } from "express";
import { habitService } from "../service";

const subscribeHabit = async (req: Request, res: Response) => {
  const { starId } = req.body;

  const data = await habitService.subscribeHabit(starId);

  if (!data) {
    return res.status(400).json({ status: 400, message: "구독 실패" });
  }
  return res.status(200).json({ status: 200, message: "구독 성공", data });
};

const habitController = {
  subscribeHabit,
};

export default habitController;
