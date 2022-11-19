import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const subscribeHabit = async (starId: number) => {
  const data = await prisma.badge.create({
    data: {
      starId,
    },
  });

  return data;
};

const habitService = {
  subscribeHabit,
};

export default habitService;
