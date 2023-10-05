import Stripe from '$services/stripe';
import * as Errors from '$errors';
import { CheckoutReq } from './types';
import { Req, Res, Next } from '$api/types';

export const checkout = async (req: Req, res: Res, next: Next) => {
  try {
    const { body, user } = req as CheckoutReq;
    // TODO:
    // Assume body.price_id is either a Stripe's subscription price, or a falsy value
    // 1. Create a Stripe Checkout Session with the given price.
    // 2. Make sure to connect the subscription to the user making the request
    // 3. Provide its url as the response
    // Supported price id: "price_1NDUfILdqsazIEMPGW9Si8jI"

    return res.json({});
  } catch (error) {
    return next(error);
  }
};
