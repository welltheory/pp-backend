import { Request, Response, NextFunction } from 'express';

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
};