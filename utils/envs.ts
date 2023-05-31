import _ from 'lodash';

export default {
  getNumber: (val?: string, defaultValue = 0) => {
    if (typeof val === 'undefined') return defaultValue;
    if (val === null) return defaultValue;
    const parsed = parseInt(val, 10);
    return _.isNaN(parsed) ? defaultValue : parsed;
  },
  getFloat: (val?: string, defaultValue = 0) => {
    if (typeof val === 'undefined') return defaultValue;
    if (val === null) return defaultValue;
    const parsed = parseFloat(val);
    return _.isNaN(parsed) ? defaultValue : parsed;
  },
  getBoolean: (val?: string, defaultValue?: boolean) => {
    if (typeof val === 'undefined') return defaultValue;
    if (val === null) return defaultValue;
    if (typeof val === 'boolean') return val;
    const normalized = val.toLowerCase();
    if (normalized === 'true') return true;
    return false;
  },
  getArray: (val?: string, defaultValue?: Array<any>) => {
    if (typeof val === 'undefined') return defaultValue;
    if (val === null) return defaultValue;
    const trimmed = val.replace(/\s+/g, '');
    return trimmed.split(',');
  },
  getPrivateKey: (val?: string, defaultValue?: string) => {
    if (typeof val === 'undefined') return defaultValue;
    if (val === null) return defaultValue;
    return val.replace(/\\n/g, '\n');
  },
};
