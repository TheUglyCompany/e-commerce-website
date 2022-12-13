module.exports = {
  collectCoverage: true,
  // collectCoverageFrom: ['<roodDir>/src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  resetMocks: false,
  // coveragePathIgnorePatterns: ['components/*/*.style.*'],
};
