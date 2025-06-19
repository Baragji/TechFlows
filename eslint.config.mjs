import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import nextPlugin from '@next/eslint-plugin-next';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
// import ssrFriendlyPlugin from 'eslint-plugin-ssr-friendly'; // Temporarily disabled - ESLint v9 compatibility issue
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  js.configs.recommended,
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: 'readonly',
        JSX: 'readonly',
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        HTMLElement: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLButtonElement: 'readonly',
        HTMLTextAreaElement: 'readonly',
        HTMLSelectElement: 'readonly',
        HTMLFormElement: 'readonly',
        HTMLImageElement: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLParagraphElement: 'readonly',
        HTMLHeadingElement: 'readonly',
        SVGElement: 'readonly',
        SVGSVGElement: 'readonly',
        IntersectionObserver: 'readonly',
        PerformanceObserver: 'readonly',
        PerformanceEntry: 'readonly',
        PerformanceNavigationTiming: 'readonly',
        performance: 'readonly',
        KeyboardEvent: 'readonly',
        URL: 'readonly',
        NodeJS: 'readonly',
        Event: 'readonly',
        EventTarget: 'readonly',
        confirm: 'readonly',
      },
    },
    plugins: {
      '@next/next': nextPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      // 'ssr-friendly': ssrFriendlyPlugin, // Temporarily disabled - ESLint v9 compatibility issue
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      // Next.js specific rules
      '@next/next/no-img-element': 'error',
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-head-element': 'error',
      '@next/next/no-sync-scripts': 'error',
      '@next/next/no-page-custom-font': 'error',

      // React rules
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-key': 'error',
      'react/no-children-prop': 'error',
      'react/no-danger-with-children': 'error',
      'react/no-deprecated': 'warn',
      'react/no-direct-mutation-state': 'error',
      'react/no-unescaped-entities': 'warn',
      'react/self-closing-comp': 'warn',
      'react/display-name': 'off',

      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Accessibility rules
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-proptypes': 'error',
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/role-supports-aria-props': 'error',

      // TypeScript rules
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true
      }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-var-requires': 'error',

      // General JavaScript rules
      'prefer-const': 'error',
      'no-var': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-alert': 'warn',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-script-url': 'error',

      // Code quality rules
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'no-duplicate-imports': 'error',
      'no-unused-expressions': 'error',
      'no-unreachable': 'error',
      'no-unreachable-loop': 'error',
      'array-callback-return': 'error',
      'consistent-return': 'off', // Disabled due to false positives with useEffect cleanup functions

      // Performance rules
      'no-await-in-loop': 'warn',
      'prefer-template': 'warn',
      'prefer-spread': 'warn',

      // Custom SSR-Friendly rules (replacing eslint-plugin-ssr-friendly)
      // These rules help prevent hydration mismatches

      // Enhanced hydration-specific rules
      'no-restricted-globals': [
        'warn',
        {
          name: 'document',
          message: 'Direct document access can cause hydration mismatches. Use typeof document !== "undefined" check or useEffect.',
        },
        {
          name: 'window',
          message: 'Direct window access can cause hydration mismatches. Use typeof window !== "undefined" check or useEffect.',
        },
        {
          name: 'localStorage',
          message: 'localStorage access can cause hydration mismatches. Use useEffect or client-side check.',
        },
        {
          name: 'sessionStorage',
          message: 'sessionStorage access can cause hydration mismatches. Use useEffect or client-side check.',
        },
        {
          name: 'navigator',
          message: 'Navigator access can cause hydration mismatches. Use useEffect or client-side check.',
        },
      ],

      'no-restricted-syntax': [
        'warn',
        {
          selector: "CallExpression[callee.object.name='Math'][callee.property.name='random']",
          message: 'Math.random() can cause hydration mismatches. Use a deterministic value or move to useEffect.',
        },
        {
          selector: 'NewExpression[callee.name="Date"][arguments.length=0]',
          message: 'new Date() without arguments can cause hydration mismatches. Pass a specific date or move to useEffect.',
        },
        {
          selector: "CallExpression[callee.object.name='Date'][callee.property.name='now']",
          message: 'Date.now() can cause hydration mismatches. Use a deterministic timestamp or move to useEffect.',
        },
        {
          selector: "MemberExpression[object.name='performance'][property.name='now']",
          message: 'performance.now() can cause hydration mismatches. Move to useEffect or use a deterministic value.',
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
      next: {
        rootDir: '.',
      },
    },
  },
  // Test files configuration
  {
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}', '**/jest.setup.js', 'testing-setup/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        vi: 'readonly',
        vitest: 'readonly',
        global: 'readonly',
        window: 'readonly',
        document: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'react/display-name': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  // JavaScript files configuration
  {
    files: ['**/*.{js,jsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
  // Configuration files
  {
    files: ['*.config.{js,mjs,ts}', 'scripts/**/*.js', 'jest.setup.js', 'verify-workflows.js'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'no-duplicate-imports': 'off',
      'no-restricted-syntax': 'off',
      'no-useless-escape': 'off',
      'no-alert': 'off',
    },
  },
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'build/**',
      'dist/**',
      'public/**',
      'coverage/**',
      '.swc/**',
      '.qodo/**',
      '.repomix/**',
      'docs/**',
      'Udseende/**',
      'testing-setup/**',
    ],
  },
];

export default eslintConfig;
