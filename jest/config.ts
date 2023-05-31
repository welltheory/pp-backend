import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from '../tsconfig.json';
import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  rootDir: '../',
  testEnvironment: 'node',
  preset: 'ts-jest',
  clearMocks: true,
  verbose: true,
  testTimeout: 10000,
  testMatch: [
    '<rootDir>/**/specs/**/*.spec.ts',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
    '<rootDir>/__api/',
    '<rootDir>/__db/',
  ],
  setupFiles: [
    '<rootDir>/envs/setup.js',
    '<rootDir>/alias/index.ts',
    '<rootDir>/jest/setup.ts',
  ],
  setupFilesAfterEnv: [
    'jest-extended',
  ],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      { diagnostics: false }, // Disable type checking
    ],
  },
  // transformIgnorePatterns: [
  //   '<rootDir>/node_modules/',
  //   '<rootDir>/dist/',
  //   '<rootDir>/build/',
  //   '<rootDir>/__api/',
  //   '<rootDir>/__db/',
  // ],
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  // moduleNameMapper: {
  //   '$services/(.*)': '<rootDir>/services/$1',
  //   '$api/(.*)': '<rootDir>/api/$1',
  //   '$utils/(.*)': '<rootDir>/utils/$1',
  //   '$config/(.*)': '<rootDir>/config/$1',
  //   '$envs/(.*)': '<rootDir>/envs/$1',
  //   '$envs': '<rootDir>/envs',
  //   '$prisma/(.*)': '<rootDir>/prisma/$1',
  //   '$errors/(.*)': '<rootDir>/errors/$1',
  //   '$errors': '<rootDir>/errors',
  //   '$test-utils': '<rootDir>/jest/utils/index.ts',
  // },
};

export default config;