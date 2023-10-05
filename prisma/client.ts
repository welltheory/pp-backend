import {
  PrismaClient,
} from '@prisma/client';

const prisma = new PrismaClient();

const xprisma = prisma
  .$extends({}); // Possible to add custom logic here

export default xprisma;