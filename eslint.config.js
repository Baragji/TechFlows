import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
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
        // Browser globals (but we'll warn about direct usage)
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
        confirm: 'readonly',
        // DOM types
        HTMLElement: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLButtonElement: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLTextAreaElement: 'readonly',
        HTMLSelectElement: 'readonly',
        HTMLFormElement: 'readonly',
        HTMLImageElement: 'readonly',
        HTMLParagraphElement: 'readonly',
        HTMLHeadingElement: 'readonly',
        SVGElement: 'readonly',
        SVGSVGElement: 'readonly',
        // Web APIs
        IntersectionObserver: 'readonly',
        PerformanceObserver: 'readonly',
        PerformanceEntry: 'readonly',
        PerformanceNavigationTiming: 'readonly',
        performance: 'readonly',
        KeyboardEvent: 'readonly',
        URL: 'readonly',
        // Node.js types
        NodeJS: 'readonly',
      },
    },
    plugins: {
      '@next/next': nextPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      // Next.js specific rules for hydration
      '@next/next/no-img-element': 'error',
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-head-element': 'error',
      '@next/next/no-sync-scripts': 'error',
      '@next/next/no-page-custom-font': 'error',

      // React rules
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js
      'react/prop-types': 'off', // Using TypeScript
      'react/jsx-key': 'error',
      'react/no-children-prop': 'error',
      'react/no-danger-with-children': 'error',
      'react/no-deprecated': 'warn',
      'react/no-direct-mutation-state': 'error',
      'react/no-find-dom-node': 'error',
      'react/no-is-mounted': 'error',
      'react/no-render-return-value': 'error',
      'react/no-string-refs': 'error',
      'react/no-unknown-property': 'error',
      'react/no-unescaped-entities': 'warn',
      'react/require-render-return': 'error',
      'react/self-closing-comp': 'warn',
      'react/void-dom-elements-no-children': 'error',

      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Accessibility rules
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-proptypes': 'error',
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/role-supports-aria-props': 'error',

      // TypeScript rules
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',

      // General JavaScript rules
      'prefer-const': 'error',
      'no-var': 'error',
      'no-console': 'warn',

      // Custom hydration-specific rules to prevent SSR/client mismatches
      'no-restricted-globals': [
        'warn',
        {
          name: 'window',
          message: 'Direct window access can cause hydration mismatches. Use typeof window !== "undefined" check or useEffect.',
        },
        {
          name: 'document',
          message: 'Direct document access can cause hydration mismatches. Use typeof document !== "undefined" check or useEffect.',
        },
        {
          name: 'localStorage',
          message: 'localStorage access can cause hydration mismatches. Use useEffect or client-side check.',
        },
        {
          name: 'sessionStorage',
          message: 'sessionStorage access can cause hydration mismatches. Use useEffect or client-side check.',
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
          message: 'Date.now() can cause hydration mismatches. Use a deterministic value or move to useEffect.',
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
  {
    files: ['**/*.{js,jsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
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
      '*.config.js',
      '*.config.mjs',
      '*.config.ts',
      'scripts/**',
    ],
  },
];