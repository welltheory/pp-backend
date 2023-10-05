import { AuthReq } from '$api/types';

export type CheckoutReq = AuthReq<
  object, // Params
  { price_id: string }, // Body
  object  // Query
>;
