import { AuthenticatedRequest, Response, NextFunction } from '$api/types';
import UserSerializer from '$api/serializers/user';
import prisma from '$prisma/client';

// NOTE: This endpoint can be used frequently on the client-side
export const me = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const { user } = req;
    // TODO: Add information about the user's subscription
    return res.json(UserSerializer.serialize(user));
  } catch (err) {
    return next(err);
  }
};
