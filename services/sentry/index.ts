import { envs } from '$envs';
import express from 'express';
import * as Sentry from '@sentry/node';
import '@sentry/tracing';

import Envs from '$envs';

const dsn = Envs.get('Sentry.DSN');

export default {
  setup: () => {
    if (!dsn) return;
    console.log('Sentry initialized!');
    Sentry.init({
      dsn,
      integrations: [],
      tracesSampleRate: 1.0,
      environment: envs.nodeEnv,
      release: envs.release,
    });
  },
  captureException: (error: any, extra?: any) => {
    if (!dsn) return;
    Sentry.captureException(error, {
      extra,
    });
  },
  withScope: (cb: (scope: Sentry.Scope) => void) => {
    if (!dsn) return;
    return Sentry.withScope(cb);
  },
};
