import { AuthenticatedRequest, Response, NextFunction } from '$api/types';
import Envs from '$envs';
import Stripe from '$services/stripe';
import Errors from '$errors';
import prisma from '$prisma/client';

export const checkout = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    // TODO: Accept body.price_id, create checkout session and return its url
    return res.json({ url: '' });
  } catch (error) {
    return next(error);
  }
};

export const portal = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    // TODO: Create Stripe's portal session and return its url
    return res.json({ url: '' });
  } catch (error) {
    return next(error);
  }
};
