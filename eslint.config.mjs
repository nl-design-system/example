import eslint from '@eslint/js';
import json from '@eslint/json';
import nlDesignSystemConfig from '@nl-design-system/eslint-config/configs/nl-design-system.config.mjs';
import prettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import react from 'eslint-plugin-react';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  // use the built-in globalIgnores utility to globally ignore files in the project
  globalIgnores(['**/dist/', '**/build/', '**/coverage/', 'packages/web-components-stencil/loader']),
  {
    // Use the Perfectionist recommended/natural configuration for all possible JavaScript, TypeScript and JSX files
    name: 'perfectionist/recommended/natural',
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
    plugins: { perfectionist },
    ...perfectionist.configs['recommended/natural'],
    rules: {
      // Sort import declarations
      'perfectionist/sort-imports': [
        'error',
        {
          ignoreCase: false,
          newlinesBetween: 'never',
        },
      ],
      // Sort objects sensibly, allow `id` and `name` properties to go first and `overrides` to go last
      'perfectionist/sort-objects': [
        'error',
        {
          customGroups: [
            {
              elementNamePattern: '^(?:id|name)$',
              groupName: 'first',
              selector: 'property',
            },
            {
              elementNamePattern: '^(?:overrides)$',
              groupName: 'last',
              selector: 'property',
            },
          ],
          groups: ['first', 'unknown', 'last'],
        },
      ],
    },
  },
  {
    // Use the @eslint/js recommended configuration to lint JavaScript, TypeScript, JSX and TSX files
    name: 'eslint/js/recommended',
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
    ...eslint.configs.recommended,
  },
  {
    // Use the typescript-eslint recommended configuration to lint TypeScript and TSX files
    name: 'typescript-eslint/recommended',
    extends: [tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
  },
  {
    // Use the @eslint/json recommended configuration to lint JSON files
    name: 'eslint/json/recommended',
    files: ['**/*.json'],
    language: 'json/json',
    ...json.configs.recommended,
  },
  {
    name: 'eslint-plugin-react',
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
    plugins: { react },
    ...react.configs.flat.recommended,
    ...react.configs.flat['jsx-runtime'],
  },
  {
    // Minor override for Stencil files that import `h` but do not use it so allow this
    files: ['packages/web-components-stencil/**/*.tsx'],
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
    // NL Design System specific rules
    extends: [nlDesignSystemConfig],
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
  },
  {
    name: 'eslint-config-prettier',
    ...prettier,
  },
]);
