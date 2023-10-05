import { Request, Response, NextFunction } from 'express';
import { AuthReq } from '$api/types';
import prisma from '$prisma/client';

// Note: This is a mock(!) authentication middleware and should not be used in production.
export const authenticate = () => async (req: Request, res: Response, next: NextFunction) => {
  const user = await prisma.user.upsert({
    where: { auth_id: 'auth123' },
    update: {},
    create: {
      auth_id: 'auth123',
      email: 'marry@example.com',
    },
  });

  (req as AuthReq)['user'] = user!;
  return next();
};
