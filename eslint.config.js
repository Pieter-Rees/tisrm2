import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';

export default [
  ...nextVitals,
  ...nextTs,
  {
    ignores: [
      'build/**',
      'node_modules/**',
      '.next/**',
      'dist/**',
      'coverage/**',
    ],
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/set-state-in-effect': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-require-imports': 'warn',
      '@next/next/no-html-link-for-pages': 'warn',
      'prefer-const': 'warn',
      'no-var': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-template': 'warn',
      'object-shorthand': 'warn',
      'no-undef': 'off',
    },
  },
  prettier,
];
