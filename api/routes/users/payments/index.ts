import express from 'express';
import * as PaymentsController from '$api/controllers/users/payments';

const router = express.Router({ mergeParams: true });

// @ts-ignore
router.route('/checkout').post(PaymentsController.checkout);
// @ts-ignore
router.route('/portal').post(PaymentsController.portal);

export default router;
