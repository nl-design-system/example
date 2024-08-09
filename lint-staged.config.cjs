module.exports = {
  '*': 'prettier --write',
  'package.json': 'npmPkgJsonLint --allowEmptyTargets',
  '*.md': ['markdownlint'],
  '*.{js,cjs,mjs,json,jsx,mdx,ts,tsx}': ['eslint --no-error-on-unmatched-pattern'],
  '*.{css,scss}': ['stylelint --allow-empty-input'],
};
