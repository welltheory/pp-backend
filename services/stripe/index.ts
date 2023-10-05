import Stripe from 'stripe';
import Envs from '$envs';

const stripe = new Stripe(Envs.Stripe.secretKey!, {
  apiVersion: '2023-08-16',
});

export default stripe;
