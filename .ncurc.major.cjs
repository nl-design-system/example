const minorConfig = require('./.ncurc.minor.cjs');

module.exports = {
  ...minorConfig,
  reject: [
    ...minorConfig.reject,
    // @types/node is kept in line with the node version in .nvmrc and package.json#engines.node
    '@types/node',
    '@types/react',
    '@types/react-dom',
    'eslint',
    'eslint-plugin-json',
    'react',
    'react-dom',
    'style-dictionary',
  ],
  target: 'latest',
};
