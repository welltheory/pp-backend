import {
  PrismaClient,
  User as PrismaUser,
} from '@prisma/client';
import WrappedUser from '$prisma/models/user';

const prisma = new PrismaClient();

const xprisma = prisma
  .$extends({
    result: {
      user: {
        wrap: {
          needs: { id: true },
          compute({ id }) {
            return async () => {
              const data = await xprisma.user.findUnique({ where: { id } });
              return new WrappedUser(data as PrismaUser);
            };
          },
        },
      },
    },
  });


export const listModelsKeys = () => {
  return Object.keys(prisma)
    .filter((key) => !key.startsWith('$'))
    .filter((key) => !key.startsWith('_'));
};

export default xprisma;