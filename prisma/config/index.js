// This file has to stay a JavaScript file
// One reason is no support for typescript in sequelize-cli
require('../../envs/setup');
const _ = require('lodash');

const getValue = (key, defaultValue) => _.get(process.env, key, defaultValue);

module.exports = {
  username: getValue('DB_USERNAME', 'root_user'),
  password: getValue('DB_PASSWORD', 'admin1234'),
  database: getValue('DB_NAME', 'wt-pairprogramming'),
  host: getValue('DB_HOST', 'localhost'),
  dialect: 'postgres',
  logging: false,
};
