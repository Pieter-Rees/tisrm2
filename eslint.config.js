import { fixupConfigRules } from '@eslint/compat';
import js from '@eslint/js';
import nextPlugin from 'eslint-config-next';
import prettier from 'eslint-config-prettier';

const sharedGlobals = {
  window: 'readonly',
  document: 'readonly',
  console: 'readonly',
  setTimeout: 'readonly',
  clearTimeout: 'readonly',
  React: 'readonly',
  describe: 'readonly',
  it: 'readonly',
  test: 'readonly',
  expect: 'readonly',
  beforeEach: 'readonly',
  afterEach: 'readonly',
  beforeAll: 'readonly',
  afterAll: 'readonly',
  jest: 'readonly',
  NodeJS: 'readonly',
  HTMLButtonElement: 'readonly',
  HTMLDivElement: 'readonly',
  HTMLElement: 'readonly',
  HTMLSpanElement: 'readonly',
  KeyboardEvent: 'readonly',
  MediaQueryListEvent: 'readonly',
  process: 'readonly',
  module: 'readonly',
  require: 'readonly',
  __dirname: 'readonly',
  __filename: 'readonly',
};

// Next's babel eslint-parser is not ESLint 10 ScopeManager-compatible yet.
const nextConfigs = fixupConfigRules(nextPlugin).map((config) => {
  if (config.name === 'next' && config.languageOptions?.parser) {
    const { parser: _parser, ...languageOptions } = config.languageOptions;
    return {
      ...config,
      languageOptions,
    };
  }
  return config;
});

const eslintConfig = [
  {
    ignores: [
      'build/**',
      'node_modules/**',
      '.next/**',
      'dist/**',
      'coverage/**',
      'static/**',
    ],
  },
  js.configs.recommended,
  ...nextConfigs,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    languageOptions: {
      globals: sharedGlobals,
    },
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'no-useless-catch': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/set-state-in-effect': 'off',
      'prefer-const': 'warn',
      'no-var': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-template': 'warn',
      'object-shorthand': 'warn',
      'no-constant-binary-expression': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  prettier,
];

export default eslintConfig;
