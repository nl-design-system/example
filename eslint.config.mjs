import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { jsRules, reactRules } from './eslint.rules.mjs';

export default tseslint.config(
  {
    name: 'nlds/ignores',
    ignores: [
      '**/build/',
      '**/coverage/',
      '**/dist/',
      '**/tmp/',
      // for @stencil/react-output-target >=0.6
      'packages/web-components-react/src/stencil-generated',
      // for @stencil/react-output-target <0.6
      'packages/web-components-react/src/react-component-lib/',
      'packages/web-components-react/src/components.ts',
      'packages/web-components-stencil/{loader,www}',
    ],
  },
  {
    name: 'nlds/settings',
    // https://eslint.org/docs/latest/use/configure/configuration-files#configuring-linter-options
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    // https://eslint.org/docs/latest/use/configure/configuration-files#configuring-shared-settings
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      parserOptions: {
        sourceType: 'module',
      },
    },
  },
  {
    name: 'nlds/rules',
    plugins: {
      import: eslintPluginImport,
    },
    rules: jsRules,
  },
  ...tseslint.configs.recommended,
  {
    name: 'nlds/tooling',
    files: ['**/*.cjs', '**/vite.config.ts'],
    languageOptions: {
      globals: { ...globals.node },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    name: 'nlds/test-files',
    files: ['**/*.test.{ts,tsx,js,jsx}'],
    languageOptions: {
      globals: { ...globals.jest },
    },
  },
  {
    name: 'nlds/source-code',
    files: ['**/src/*.{js,mjs,ts}'],
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
  {
    name: 'nlds/react-jsx',
    files: ['**/*.{jsx,tsx}'],
    ignores: ['**/web-components-stencil/**/*.{jsx,tsx}'],
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReact.configs['jsx-runtime'].rules,
      ...reactRules,
    },
  },
  {
    name: 'nlds/stencil-jsx',
    files: ['**/web-components-stencil/**/*.{jsx,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^h$',
        },
      ],
    },
  },
  {
    name: 'eslint-config-prettier',
    ...eslintConfigPrettier,
  },
);
