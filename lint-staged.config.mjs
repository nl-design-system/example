/**
 * This is the configuration for lint-staged.
 *
 * lint-staged can run commands on files that have been staged in git just before they are committed. We do this for two
 * reasons:
 *
 * 1. Prevent problematic code from being committed.
 * 2. If possible correct mistakes that can be auto-fixed.
 *
 * The keys of the configuration object below are files or globs that lint-staged will match against. The values are
 * either a single command to run or an array of commands that will be run serially on the files that matched.
 **/

export default {
  // If needed, auto-fix problems using stylelint and format the result with prettier:
  '*.{css,scss}': ['stylelint --allow-empty-input --fix', 'prettier --write'],
  // If needed, auto-fix problems using eslint and format the result with prettier:
  '*.{js,cjs,mjs,json,jsx,mdx,ts,tsx}': ['eslint --no-error-on-unmatched-pattern --fix', 'prettier --write'],
  // If needed, format YAML files using prettier:
  '*.{yml,yaml}': 'prettier --write',
  // If needed, lint Markdown files using markdownlint and format the result with prettier:
  '*.md': ['markdownlint', 'prettier --write'],
  // If needed, lint package.json files using npm-package-json-lint:
  'package.json': 'npmPkgJsonLint --allowEmptyTargets',
};
