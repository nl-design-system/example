import minorConfig from './.ncurc.minor.mjs';

export default {
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
    '@vitejs/plugin-react', // keep @vitejs/plugin-react at v5 to stay in line with vite
    '@whitespace/storybook-addon-html',
    'vite', // keep vite at v7 to stay in line with @storybook/react-vite
  ],
  target: 'latest',
};
