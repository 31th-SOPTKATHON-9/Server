import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getHabitByDay = async (filter: string) => {
  try {
    const data = await prisma.star_Habit.findMany({
      where: {
        day: filter,
      },
      orderBy: {
        id: "asc",
      },
    });

    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// eslint-disable-next-line consistent-return
const changeCheck = async (habitId: number) => {
  try {
    const user = await prisma.star_Habit.findUnique({
      where: {
        id: habitId,
      },
    });

    if (user.isCheck === true) {
      const result = await prisma.star_Habit.update({
        where: {
          id: user.id,
        },
        data: {
          isCheck: false,
        },
      });
      const data = {
        id: user.id,
        isCheck: result.isCheck,
      };
      return data;
    }

    const result = await prisma.star_Habit.update({
      where: {
        id: user.id,
      },
      data: {
        isCheck: true,
      },
    });
    const data = {
      id: user.id,
      isCheck: result.isCheck,
    };
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const homeService = {
  getHabitByDay,
  changeCheck,
};

export default homeService;
