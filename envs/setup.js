// This file has to stay a JavaScript file
// One reason is no support for typescript in sequelize-cli
const path = require('path');

const nodeEnv = process.env.GITHUB_ACTION
  ? 'test'
  : process.env.NODE_ENV || 'development';

const getRootDir = () => {
  // Being referenced from the dist (past-build) folder
  if (__dirname.includes('/dist')) {
    return path.join(__dirname, '../..');
  }
  return path.join(__dirname, '..');
};

const loadDotEnv = () => {
  const basePath = path.join(getRootDir(), '.env');
  let envPath = `${basePath}.${nodeEnv}`;
  if (nodeEnv === 'production') {
    envPath = `${basePath}`;
  }
  if (nodeEnv === 'development') {
    envPath = `${basePath}`;
  }
  console.log('Loading envs from:', envPath);
  require('dotenv').config({ path: envPath }); // eslint-disable-line global-require
};

loadDotEnv();

module.exports = {
  nodeEnv,
};

