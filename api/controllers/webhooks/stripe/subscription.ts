import * as StripeTypes from '$services/stripe/types';
import prisma from '$prisma/client';


class Subscriptions {
  static async created(event: StripeTypes.CustomerSubscriptionEvent) {
    // TODO:
  }

  static async updated(event: StripeTypes.CustomerSubscriptionEvent) {
    // TODO:
  }
}

export default Subscriptions;