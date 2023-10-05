import express from 'express';
import * as PaymentsController from '$api/controllers/payments';
import { authenticate } from '$api/middlewares/auth';

const router = express.Router({ mergeParams: true });

router.route('/checkout').post(authenticate(), PaymentsController.checkout);

export default router;
