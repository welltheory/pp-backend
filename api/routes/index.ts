import express from 'express';
import webhooks from './webhooks';
import users from './users';
import healthcheck from './healthcheck';

const router = express.Router();

router.use('/users', users);
router.use('/healthcheck', healthcheck);

router.use('/wh', webhooks);


export default router;
