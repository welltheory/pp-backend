import Stripe from '$services/stripe';
import * as Errors from '$errors';
import { CheckoutReq } from './types';
import { Req, Res, Next } from '$api/types';

/*
  POST /payments/checkout endpoint will by user by the client (e.g. a React app)
  to initiate a Stripe Checkout Session. Its return value will be a Stripe Checkout
  Session URL that, once returned to the client, will be used to redirect them to the
  Stripe Checkout page.

  Once the user completes the checkout, we should act on a received webhook from Stripe.
  See /api/controllers/webhooks/stripe/index.ts for more details.
*/
export const checkout = async (req: Req, res: Res, next: Next) => {
  try {
    const { body, user } = req as CheckoutReq;
    // TODO:
    // Assume body.price_id is either a Stripe's subscription price, or a falsy value
    // 1. Use Stripe's API to areate a checkout session. Take advantage of the provided price id.
    // 2. Make sure to connect the subscription to the user making the request. This might come in handy
    //    when completing the webhook-related tasks later.
    // 3. Provide the session's url as the response
    // There is a test price "price_1NDUfILdqsazIEMPGW9Si8jI" (the only valid one) associated with the provided Stripe's
    // credentials (.env file). You can use it to test the endpoint.
    return res.json({});
  } catch (error) {
    return next(error);
  }
};
