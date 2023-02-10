import { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm',
  moduleNameMapper: {
    '^#/(.*)\\.jsx?$': '<rootDir>/src/$1',
    '#/api/db.json': '<rootDir>/src/modules/beer/services/mock-db.json',
  },
  transform: {
    '^.+.(png|svg|jpg|gif|webp)$': 'jest-transform-stub',
  },
  passWithNoTests: true,
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  testRegex: '.(spec|test).(ts|tsx)$',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageProvider: 'v8',
  setupFiles: ['<rootDir>/jest.setup.ts'],
};

export default config;
