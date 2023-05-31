import { Request, Response, NextFunction } from '$api/types';
import { envs } from '$envs';
import Stripe from '$services/stripe';
import * as StripeTypes from '$services/stripe/types';
import Errors from '$errors';
import Subscription from './subscription';


export const post = async (req: Request, res: Response, next: NextFunction) => {
  try { 
    const signature = req.get('stripe-signature')!;
    const event = Stripe.webhooks.constructEvent(
      req.body,
      signature,
      envs.Stripe.webhookSecret as string,
    ) as StripeTypes.Event;
    switch (event.type) {
      case 'customer.subscription.created': {
        await Subscription.created(event);
        break;
      }
      case 'customer.subscription.updated': {
        await Subscription.updated(event);
        break;
      }
      default: {
        // Silent
      }
    }
    return res.json({ received: true });
  } catch (error) {
    return next(error);
  }
};
