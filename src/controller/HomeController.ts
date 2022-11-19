import { Request, Response } from "express";
import message from "../module/responseMessage";
import homeService from "../service/HomeService";

/**
 * @route GET /home/day?filter=
 * @desc Read day habit
 * @access Public
 */
const getHabitByDay = async (req: Request, res: Response) => {
  const { filter } = req.query;
  // const starId = req.header("starId");

  try {
    const data = await homeService.getHabitByDay(filter as string);

    if (!data) {
      return res.status(400).json({ status: 400, message: message.READ_HABIT_FAIL });
    }

    return res.status(201).json({ status: 201, message: message.READ_HABIT_SUCCESS, data });
  } catch (err) {
    return res.status(500).json({ status: 500, message: message.INTERNAL_SERVER_ERROR });
  }
};

/**
 * @route PATCH /home/:habitId
 * @desc Change habit check
 * @access Public
 */
const changeCheck = async (req: Request, res: Response) => {
  const { habitId } = req.params;

  try {
    const data = await homeService.changeCheck(+habitId);

    if (!data) {
      return res.status(400).json({ status: 400, message: message.HABIT_CHECK_FAIL });
    }

    return res.status(200).json({ status: 201, message: message.HABIT_CHECK_SUCCESS, data });
  } catch (err) {
    return res.status(500).json({ status: 500, message: message.INTERNAL_SERVER_ERROR });
  }
};

const homeController = {
  getHabitByDay,
  changeCheck,
};

export default homeController;
