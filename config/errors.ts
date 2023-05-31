import _ from 'lodash';
import httpStatus from 'http-status';
import Sequelize from 'sequelize';
import Envs, { envs } from '$envs';
import Sentry from '$services/sentry';
import APIError from '$errors/APIError';
import express from 'express';

const printer = (err, req, res, next) => {
  const isAxiosError = err.response;
  console.group('Error:');
  if (isAxiosError) {
    // Is Axios
    console.dir({
      request: {
        method: err.config.method,
        url: err.config.baseURL,
        body: err.config.data,
        headers: err.config.headers,
      },
      response: {
        message: err.message,
        status: err.response.status,
        data: err.response.data,
      },
    });
  } else {
    console.dir(err);
  }
  console.groupEnd();
  return next(err);
};

const converter = (err, req, res, next) => {
  const isJoi = err.error && err.error.isJoi;
  const isSequelizeError = err instanceof Sequelize.UniqueConstraintError;
  const isAPIError = err instanceof APIError;
  const isAxiosError = err.response;
  if (isJoi) {
    const error = new APIError({
      message: 'Validation error',
      status: err.status || httpStatus.BAD_REQUEST,
      stack: err.stack,
      details: err.error.details,
    });
    return next(error);
  }
  if (isSequelizeError) {
    const error = new APIError({
      message: 'Validation error',
      status: httpStatus.BAD_REQUEST,
      stack: err.stack,
      details: err.errors,
    });
    return next(error);
  }
  if (isAxiosError) {
    const error = new APIError({
      message: _.get(err, 'response.data.message', 'Axios error'),
      status: httpStatus.BAD_REQUEST, // Static code
      stack: err.stack,
      details: {
        request: {
          method: err.config.method,
          url: err.config.baseURL,
          body: err.config.data,
          headers: err.config.headers,
        },
        response: {
          message: err.message,
          status: err.response.status,
          data: err.response.data,
        },
      },
    });
    return next(error);
  }
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

const logger = (err, req, res, next) => {
  const isSilent = _.get(err, 'details.silent', false);
  try {
    if (!isSilent) {
      Sentry.withScope((scope) => {
        scope.setTag('url', req.originalUrl);
        scope.setTag('method', req.method);
        scope.setTag('env', process.env.NODE_ENV);
        scope.setTag('pipeline', envs.pipelinePhase);
        scope.setTag('status', err.status);
        scope.setExtra('headers', req.headers);
        scope.setExtra('params', req.params);
        scope.setExtra('query', req.query);
        scope.setExtra('body', req.body);
        scope.setExtra('details', err.details);
        if (req.user) {
          scope.setUser({
            id: req.user.id,
            email: req.user.email,
          });
        }
        Sentry.captureException(err);
      });
    }
  } catch (error) {
    console.log('[Errors] Error while logging:', error);
  } finally {
    next(err);
  }
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
    app.use(logger);
    app.use(handler);
  },
};

