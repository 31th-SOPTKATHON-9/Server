import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 위인 구독
const subscribeHabit = async (starId: number) => {
  const data = await prisma.badge.create({
    data: {
      starId,
    },
  });

  return data;
};

// 위인 검색한 결과 조회
const searchHabit = async (starName: string) => {
  const data = await prisma.star_Habit.findMany({
    where: {
      starName: {
        startsWith: starName,
      },
    },
  });
  return data;
};

const habitService = {
  subscribeHabit,
  searchHabit,
};

export default habitService;
