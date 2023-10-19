import { Req, Res, Next } from '$api/types';
import { envs } from '$envs';
import Stripe from '$services/stripe';
import * as StripeTypes from '$services/stripe/types';
import * as EventListeners from '$services/stripe/listeners';

export const post = async (req: Req, res: Res, next: Next) => {
  try { 
    const signature = req.get('stripe-signature')!;
    const event = Stripe.webhooks.constructEvent(
      req.body,
      signature,
      envs.Stripe.webhookSecret!,
    ) as StripeTypes.Event;
    switch (event.type) {
      case 'customer.subscription.created': {
        await EventListeners.Subscription.created(event);
        break;
      }
      case 'customer.subscription.updated': {
        await EventListeners.Subscription.updated(event);
        break;
      }
      case 'customer.subscription.deleted': {
        await EventListeners.Subscription.deleted(event);
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
