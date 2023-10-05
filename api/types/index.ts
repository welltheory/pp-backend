import * as Express from 'express';
import {
  User as PrismaUser,
} from '@prisma/client';

export type Next = Express.NextFunction;
export type Req <Params = any, Body = any, Query = any> = Express.Request<Params, any, Body, Query>;
export type Res <Body = any> = Express.Response<Body>;
export type AuthReq <Params = any, Body = any, Query = any> = Req<Params, Body, Query> & {
  user: PrismaUser;
};