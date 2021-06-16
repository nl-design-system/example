module.exports = {
  stories: ['../documentation/**/*stories.@(js|mdx)', '../components/**/*stories.@(js|jsx|mdx|ts|tsx)'],
  features: {
    postcss: false,
  },
  addons: [
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true },
    },
    '@storybook/addon-a11y/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-notes/register',
    '@storybook/preset-scss',
    '@etchteam/storybook-addon-status/register',
    'storybook-addon-mdx-embed',
    'storybook-design-token',
  ],
};
