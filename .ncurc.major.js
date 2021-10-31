const minorConfig = require('./.ncurc.minor');

module.exports = {
  reject: [
    ...minorConfig.reject,
    '@angular/cli',
    '@angular/compiler',
    '@angular/compiler-cli',
    '@angular/core',
    '@angular/forms',
    '@percy/storybook',
    '@types/react',
    '@types/react-dom',
    'css-loader',
    'ng-packagr',
    'react',
    'react-dom',
    'rxjs',
    'sass-loader',
    'style-loader',
    'webpack',
  ],
};
