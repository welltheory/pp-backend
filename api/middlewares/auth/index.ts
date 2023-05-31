import { Request, Response, NextFunction } from '$api/types';
import prisma from '$prisma/client';

// NOTE: This middleware is used only for development purposes
export const authenticate = () => async (req: Request, res: Response, next: NextFunction) => {
  const auth = {
    user_id: '123',
    email: 'john@example.com',
  };

  let user = await prisma.user.findFirst({ where: { auth_id: auth.user_id } });
  if (!user) {
    user = await prisma.user.create({
      data: {
        auth_id: auth.user_id,
        email: auth.email,
      },
    });
  }
  req['user'] = user;
  return next();
};
