import * as Express from 'express';
import {
  User as PrismaUser,
} from '@prisma/client';

export type Request = Express.Request;
export type Req = Express.Request;
export type Response = Express.Response;
export type Res = Express.Response;
export type NextFunction = Express.NextFunction;
export type Next = Express.NextFunction;

export type AuthenticatedRequest = Express.Request & {
  user: PrismaUser;
};

export type AuthReq = AuthenticatedRequest;
