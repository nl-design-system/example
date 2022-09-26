module.exports = {
  stories: [
    '../../../documentation/**/*stories.@(js|jsx|mdx|ts|tsx)',
    // '../../../components/**/*stories.@(js|jsx|mdx|ts|tsx)',
  ],
  addons: [
    '@etchteam/storybook-addon-status/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register',
    '@storybook/preset-scss',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
    disableTelemetry: true,
  },
  features: {
    postcss: false,
    buildStoriesJson: true,
  },
};
