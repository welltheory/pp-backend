import Stripe from 'stripe';
import Envs from '$envs';

const stripe = new Stripe(Envs.get('Stripe.secretKey'), {
  apiVersion: '2022-11-15',
});

export default stripe;
