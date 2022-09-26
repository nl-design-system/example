/* eslint-env node */
module.exports = {
  core: {
    builder: 'webpack5',
    disableTelemetry: true,
  },
  // stories: ['../../../documentation/*stories.@(js|jsx|mdx|ts|tsx)'],
  stories: [
    '../../../documentation/**/*stories.@(js|jsx|mdx|ts|tsx)',
    '../../../components/**/*stories.@(js|jsx|mdx|ts|tsx)',
  ],
  features: {
    postcss: false,
    buildStoriesJson: true,
  },
  framework: '@storybook/react',
  addons: [
    // '@etchteam/storybook-addon-status/register',
    // '@storybook/addon-a11y/register',
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true },
    },
    // '@storybook/addon-viewport/register',
    '@storybook/preset-scss',
  ],
  webpackFinal: async (config) => ({
    ...config,
    performance: {
      // Disable warning for: "asset size exceeds the recommended limit (244 KiB)"
      hints: false,
    },
  }),
};
