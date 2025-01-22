/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: "node",
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts']
};