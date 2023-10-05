import express from 'express';
import payments from './payments';
import webhooks from './webhooks';

const router = express.Router();

// TODO:
// Following the currently applied patterns, implement the following endpoints:
// 1. GET /healthcheck endpoint that returns a 200 OK
// 2. GET /users/me endpoint that returns the currently-logged-in user's id, email and membership status.
//    Hint: The currently-logged-in user is available under req.user (see api/middlewares/auth.ts)

router.use('/payments', payments);
router.use('/wh', webhooks);

export default router;
