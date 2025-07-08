export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  rootDir: '.',
  modulePaths: ['<rootDir>/src'],
  testMatch: ['<rootDir>/test/**/*.spec.ts', '<rootDir>/test/**/*.spec.js'],
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^chai$': 'chai/chai.js',
    '^src/(.*)$': '<rootDir>/src/$1',
  },
};
