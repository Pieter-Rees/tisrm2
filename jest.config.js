import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.ts',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}',
    '!src/**/*.spec.{ts,tsx}',
  ],
  coverageReporters: ['text', 'lcov', 'html'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    // Mock Chakra UI main module and subpath imports (Next.js transforms named imports to subpaths)
    '^@chakra-ui/react$': '<rootDir>/src/__mocks__/chakra-ui-simple.tsx',
    '^@chakra-ui/react/(.*)$': '<rootDir>/src/__mocks__/chakra-ui-simple.tsx',
    // Mock react-icons
    '^react-icons/bs/(.*)$': '<rootDir>/src/__mocks__/react-icons-simple.tsx',
    '^react-icons/bs$': '<rootDir>/src/__mocks__/react-icons-simple.tsx',
    // Mock Next.js components
    '^next/image$': '<rootDir>/src/__mocks__/next-image.tsx',
    '^next/link$': '<rootDir>/src/__mocks__/next-link.tsx',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transformIgnorePatterns: [
    '/node_modules/(?!(.*\\.mjs$|@chakra-ui|framer-motion))',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{ts,tsx}',
    '<rootDir>/src/**/*.{test,spec}.{ts,tsx}',
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  // Temporarily remove ts-jest configuration to use default Next.js Jest
  // transform: {
  //   '^.+\\.(ts|tsx)$': ['ts-jest', {
  //     tsconfig: 'tsconfig.json',
  //     useESM: true,
  //   }],
  // },
  // extensionsToTreatAsEsm: ['.ts', '.tsx'],
  // globals: {
  //   'ts-jest': {
  //     useESM: true,
  //   },
  // },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(customJestConfig);
