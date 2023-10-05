import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from '../tsconfig.json';
import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  rootDir: '../',
  testEnvironment: 'node',
  preset: 'ts-jest',
  clearMocks: true,
  verbose: true,
  testTimeout: 30 * 1000,
  testMatch: [
    '<rootDir>/**/__tests__/**/*.test.ts',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
  ],
  setupFiles: [
    '<rootDir>/alias/index.ts',
    '<rootDir>/tests/setup.ts',
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
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
};

export default config;