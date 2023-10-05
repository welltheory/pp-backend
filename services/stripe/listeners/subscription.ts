import * as StripeTypes from '$services/stripe/types';
import prisma from '$prisma/client';

class Subscription {
  static async created(event: StripeTypes.CustomerSubscriptionEvent) {
    // TODO:
    // Change user's membership status to active 
  }

  static async updated(event: StripeTypes.CustomerSubscriptionEvent) {
    // TODO:
    // Change user's membership based on the event's data
  }

  static async deleted(event: StripeTypes.CustomerSubscriptionEvent) {
    // TODO:
    // Change user's membership status to inactive
  }
}

export default Subscription;