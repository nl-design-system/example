const minorConfig = require('./.ncurc.minor.cjs');

module.exports = {
  ...minorConfig,
  reject: [
    ...minorConfig.reject,
    // @types/node is kept in line with the node version in .nvmrc and package.json#engines.node
    '@types/node',
    '@types/react',
    '@types/react-dom',
    'react',
    'react-dom',
    'style-dictionary',
    'storybook',
    '@storybook/*',
    '@etchteam/storybook-addon-status',
    '@whitespace/storybook-addon-html',
    'vite',
  ],
  target: 'latest',
};
