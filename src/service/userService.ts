import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUserProgress = async () => {
  const data = await prisma.badge.findMany();
  return data[0];
};

const userService = {
  getUserProgress,
};

export default userService;
