import _ from 'lodash';
import Utils from './utils';
import { nodeEnv } from './setup';

export const envs = {
  nodeEnv,
  logLevel: process.env.LOG_LEVEL || 'default',
  port: process.env.PORT || 3030,
  pipelinePhase: process.env.PIPELINE_PHASE || 'dev',
  release: process.env.K_REVISION || 'local',
  logs: nodeEnv === 'production' ? 'combined' : 'dev',
  maintenanceMode: Utils.getBoolean(process.env.MAINTENANCE_MODE, false),
  Stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY,
    publicKey: process.env.STRIPE_PUBLIC_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
  },
  Sentry: {
    DSN: process.env.SENTRY_DSN,
  },
};

Utils.checkEnvs(envs, {
  notRequired: [
    'Sentry.DSN',
  ],
});

const controller = {
  get: (key: string, defaultValue?: any) => _.get(envs, key, defaultValue),
  isProduction: () => envs.nodeEnv === 'production',
  isDevelopment: () => envs.nodeEnv === 'development',
  isTest: () => envs.nodeEnv === 'test',
  isCloud: () => envs.nodeEnv !== 'development' && (!!process.env.GCLOUD_PROJECT || !!process.env.GOOGLE_PROJECT_ID),
  getClientURL: (URLPath: string) => {
    const root = process.env.REACT_APP_CLIENT_URL || 'http://localhost:3000';
    return [root, URLPath].filter(Boolean).join('');
  },   
};

export default controller;
