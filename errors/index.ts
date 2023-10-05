import httpStatus from 'http-status';
import APIError from './APIError';

export const badRequest = (message: string, details?: any) => new APIError({
  message,
  status: httpStatus.BAD_REQUEST,
  stack: undefined,
  details,
});

export const unauthorized = (message?: string, details?: any) => new APIError({
  message: message || 'You are not authorized to access this resource',
  status: httpStatus.UNAUTHORIZED,
  stack: undefined,
  details,
});

export const forbidden = (message?: string, details?: any) => new APIError({
  message: message || 'You do not have permissions to access this resource',
  status: httpStatus.FORBIDDEN,
  stack: undefined,
  details,
});

export const notFound = (message?: string, details?: any) => new APIError({
  message: message || 'Sorry, but we did not find what you are looking for.',
  status: httpStatus.NOT_FOUND,
  stack: undefined,
  details,
});

export const paymentRequired = () => new APIError({
  message: 'You need to have an active plan to access this resource',
  status: httpStatus.PAYMENT_REQUIRED,
  stack: undefined,
});
