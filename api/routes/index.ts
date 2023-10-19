import express from 'express';
import payments from './payments';
import webhooks from './webhooks';

const router = express.Router();

// TODO:
// Implement the following endpoints according to the given requirements and hints.
//
// 1. GET /healthcheck: 
//    - Returns a 200 OK status. 
//    - Example response: { message: 'OK' }
//
// 2. GET /users/me:
//    - Requires authentication middleware (see api/middlewares/auth.ts).
//    - Returns the currently-logged-in user's id, email, and membership status in JSON format.
//    - Example response: { id: 1, email: 'user@example.com', membershipStatus: 'active' }
//    - Hint: The currently-logged-in user can be accessed using req.user.
router.use('/payments', payments);
router.use('/wh', webhooks);

export default router;
