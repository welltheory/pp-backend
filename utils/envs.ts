import _ from 'lodash';
import dot from 'dot-object';

type CheckEnvsOptions = {
  notRequired?: string[];
};

const defaultToFalse = (val?: boolean) => {
  if (typeof val === 'boolean') return val;
  return false;
};

export const getString = (val?: string, defaultValue?: string) => {
  if (typeof val !== 'string') return defaultValue || '';
  return val;
};

export const getNumber = (val?: string, defaultValue = 0) => {
  if (typeof val !== 'string') return defaultValue;
  const parsed = parseInt(val, 10);
  return _.isNaN(parsed) ? defaultValue : parsed;
};

export const getFloat = (val?: string, defaultValue = 0) => {
  if (typeof val !== 'string') return defaultValue;
  const parsed = parseFloat(val);
  return _.isNaN(parsed) ? defaultValue : parsed;
};

export const getBoolean = (val?: string, defaultValue?: boolean) => {
  if (typeof val !== 'string') return defaultToFalse(defaultValue);
  const lowercase = val.toLowerCase();
  return lowercase === 'true';
};

export const getArray = (val?: string, defaultValue?: Array<any>) => {
  if (typeof val !== 'string') return defaultValue;
  const trimmed = val.replace(/\s+/g, '');
  return trimmed.split(',');
};

export const getPrivateKey = (val?: string, defaultValue?: string) => {
  if (typeof val !== 'string') return defaultValue;
  return val.replace(/\\n/g, '\n');
};

export const checkEnvs = (envs: any, options: CheckEnvsOptions) => {
  const { notRequired = [] } = options;
  const dotized = dot.dot(envs);
  const missing = Object.keys(dotized)
    .filter((key) => !notRequired.includes(key))
    .map((key) => {
      const value = _.get(dotized, key);
      return (_.isNil(value) || value === '') ? key : null;
    })
    .filter((key) => key !== null);
  if (missing.length > 0) {
    throw new Error(`[Envs] Missing:\n— ${missing.join(',\n')}\n\nUpdate your .env file and check ./envs/index.ts`);
  } else {
    console.log('All envs are set');
  }
  return true;
};
