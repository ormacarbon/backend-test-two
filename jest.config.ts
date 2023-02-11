import { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm',
  moduleNameMapper: {
    '^#/(.*)\\.jsx?$': '<rootDir>/src/$1',
    '#/api/db.json': '<rootDir>/src/api/mock-db.json',
    '#/api/openapi.json': '<rootDir>/src/api/openapi.json',
  },
  transform: {
    '^.+.(png|svg|jpg|gif|webp)$': 'jest-transform-stub',
  },
  passWithNoTests: true,
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  testRegex: '.(spec|test).(ts|tsx)$',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!**/index.ts', '!**/*.interface.ts'],
  coverageProvider: 'v8',
  setupFiles: ['<rootDir>/jest.setup.ts'],
};

export default config;
