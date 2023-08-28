/* eslint-disable */
export default {
  displayName: 'base-ui',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': [
      '@swc/jest',
      { jsc: { transform: { react: { runtime: 'automatic' } } } },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/base-ui',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
};
