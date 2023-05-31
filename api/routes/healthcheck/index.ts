import express from 'express';
import * as HealthcheckController from '$api/controllers/healthcheck';

const router = express.Router();

router.route('/').get(HealthcheckController.get);

export default router;
