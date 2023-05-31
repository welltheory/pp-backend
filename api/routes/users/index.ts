import express from 'express';
import { authenticate } from '$api/middlewares/auth';
import * as UsersController from '$api/controllers/users';
import payments from './payments';

const router = express.Router();
router.use(authenticate());

router.use('/me/payments', payments);

// @ts-ignore
router.route('/me').get(UsersController.me);



export default router;
