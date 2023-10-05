import request from 'supertest';
import Express from '$api/express';

export * as db from './db';

export const createExpressApp = () => {
  const app = Express.setup();
  return request(app);
};