const _ = require('lodash');
const prompts = require('prompts');
const { spawn } = require('child_process');

const run = async () => {
  const { env, confirm } = await prompts([
    {
      type: 'select',
      name: 'env',
      message: 'Select environment ("production" is not allowed and has to be done manually)',
      choices: [
        { title: 'Development', value: 'development' },
        { title: 'Test', value: 'test' },
      ],
      initial: 0,
    },
    {
      type: 'toggle',
      name: 'confirm',
      message: 'Are you sure?',
      initial: false,
      active: 'yes',
      inactive: 'no',
    },
  ]);
  if (!confirm) return;
  const command = [
    `cross-env NODE_ENV=${env} npx sequelize db:drop`,
    `cross-env NODE_ENV=${env} npx sequelize db:create`,
    `cross-env NODE_ENV=${env} npx sequelize db:migrate`,
  ].join(' && ');
  spawn(command, { shell: true, stdio: 'inherit' });
};

run();
