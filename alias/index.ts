const path = require('path');
require('better-module-alias')(path.join(__dirname, '..'), {
  '$root': '.',
  '$api': './api',
  '$server': './server',
  '$prisma': './prisma',
  '$services': './services',
  '$utils': './utils',
  '$errors': './errors',
  '$envs': './envs',
});

export {};
