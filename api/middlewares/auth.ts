import { Request, Response, NextFunction } from 'express';
import { AuthReq } from '$api/types';
import prisma from '$prisma/client';

/*
  This is a mock(!) authentication middleware, that provides req.user object
  for any endpoint that uses it.
  This middleware was created only for the sake of this challenge and
  it should not be used in production.
*/
export const authenticate = () => async (req: Request, res: Response, next: NextFunction) => {
  // Create a user if it doesn't exist
  const user = await prisma.user.upsert({
    where: { auth_id: 'auth123' },
    update: {},
    create: {
      auth_id: 'auth123',
      email: 'marry@example.com',
    },
  });
  // Attach the user to the request
  (req as AuthReq)['user'] = user!;
  return next();
};
