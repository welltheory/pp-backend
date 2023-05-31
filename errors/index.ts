import httpStatus from 'http-status';
import APIError from './APIError';

const Errors = {
  badRequest: (message: string, details?: any) => new APIError({
    message,
    status: httpStatus.BAD_REQUEST,
    stack: undefined,
    details,
  }),
  unauthorized: (message?: string, details?: any) => new APIError({
    message: message || 'You are not authorized to access this resource',
    status: httpStatus.UNAUTHORIZED,
    stack: undefined,
    details,
  }),
  forbidden: (message?: string, details?: any) => new APIError({
    message: message || 'You do not have permissions to access this resource',
    status: httpStatus.FORBIDDEN,
    stack: undefined,
    details,
  }),
  notFound: (message?: string, details?: any) => new APIError({
    message: message || 'Sorry, but we did not find what you are looking for.',
    status: httpStatus.NOT_FOUND,
    stack: undefined,
    details,
  }),
  paymentRequired: () => new APIError({
    message: 'You need to have an active plan to access this resource',
    status: httpStatus.PAYMENT_REQUIRED,
    stack: undefined,
  }),
  notImplemented: () => new APIError({
    message: 'TODO: This feature is not implemented yet!',
    status: httpStatus.NOT_IMPLEMENTED,
    stack: undefined,
  }),
};

// Define user model related errors
const Users = {
  notFound: () => Errors.notFound('User not found'),
  alreadyExists: () => Errors.badRequest('User already exists'),
};

const Organizations = {
  notFound: () => Errors.notFound('Organization not found'),
};

export default {
  ...Errors,
  Users,
  Organizations,
};
