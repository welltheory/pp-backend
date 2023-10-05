import _ from 'lodash';
import httpStatus from 'http-status';
import Envs from '$envs';
import APIError from '$errors/APIError';
import express from 'express';

const printer = (err, req, res, next) => {
  console.group('Error:');
  console.dir(err);
  console.groupEnd();
  return next(err);
};

const converter = (err, req, res, next) => {
  const isAPIError = err instanceof APIError;
  if (!isAPIError) {
    const error = new APIError({
      message: err.message,
      status: err.status,
      stack: err.stack,
      details: {},
    });
    return next(error);
  }
  return next(err);
};

// NOTE: It needs to be the last middelware, and it needs 4 params!
const handler = (err, req, res, next) => {
  const code = err.status || httpStatus.INTERNAL_SERVER_ERROR;
  return res
    .status(code)
    .json({
      code,
      message: err.message || httpStatus[err.status],
      details: err.details,
      errors: err.errors,
      stack: Envs.isDevelopment() ? err.stack : undefined,
    });
};

export default {
  setup: (app: express.Application) => {
    app.use(printer);
    app.use(converter);
    app.use(handler);
  },
};

