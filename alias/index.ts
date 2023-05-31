const path = require('path');
require('better-module-alias')(path.join(__dirname, '..'), {
  '$root': '.',
  '$api': './api',
  '$config': './config',
  '$prisma': './prisma',
  '$services': './services',
  '$utils': './utils',
  '$errors': './errors',
  '$envs': './envs',
});

console.log('Aliases loaded.');

export {};
