/* eslint-env node */
module.exports = {
  stories: ['../src/**/*stories.@(js|jsx|mdx|ts|tsx)'],
  addons: [
    '@etchteam/storybook-addon-status/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register',
    '@storybook/preset-scss',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: true,
  },
  features: {
    buildStoriesJson: true,
    storyStoreV7: true,
  },
  staticDirs: ['../../../proprietary/assets/src'],
};
