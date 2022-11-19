import { Request, Response } from "express";
import { userService } from "../service";

const getUserProgress = async (req: Request, res: Response) => {
  const data = await userService.getUserProgress();
  const { count } = data;
  const percent = count / 21;
  const result = {
    count,
    progress: percent,
  };
  return res.status(200).json({ status: 200, message: "유저 프로그래스바 조회 성공", result });
};

const userController = {
  getUserProgress,
};

export default userController;
