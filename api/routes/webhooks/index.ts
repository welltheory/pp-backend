import express from 'express';
import * as StripeController from '$api/controllers/webhooks/stripe';

const router = express.Router();

router.route('/stripe').post(StripeController.post);

export default router;
