import _ from 'lodash';
import * as Utils from '$utils/envs';

export const envs = {
  nodeEnv: Utils.getString(process.env.NODE_ENV, 'development'),
  port: Utils.getNumber(process.env.PORT, 3030),
  maintenanceMode: Utils.getBoolean(process.env.MAINTENANCE_MODE, false),
  Stripe: {
    secretKey: Utils.getString(process.env.STRIPE_SECRET_KEY),
    publicKey: Utils.getString(process.env.STRIPE_PUBLIC_KEY),
    webhookSecret: Utils.getString(process.env.STRIPE_WEBHOOK_SECRET),
  },
};

Utils.checkEnvs(envs, {
  notRequired: [],
});

const controller = {
  isProduction: () => envs.nodeEnv === 'production',
  isDevelopment: () => envs.nodeEnv === 'development',
  isTest: () => envs.nodeEnv === 'test',
  isCloud: () => envs.nodeEnv !== 'development' && (!!process.env.GCLOUD_PROJECT || !!process.env.GOOGLE_PROJECT_ID),
  getClientURL: (URLPath: string) => {
    const root = process.env.REACT_APP_CLIENT_URL || 'http://localhost:3000';
    return [root, URLPath].filter(Boolean).join('');
  }, 
  ...envs,  
};

export default controller;
