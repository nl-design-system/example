import '@example/design-tokens/dist/index.css';
import '@example/font/src/index.scss';
import { defineCustomElements } from '@example/web-components-stencil/loader/index.js';
import type { Preview } from '@storybook/react';
import { ParametersArgsDecorator } from './ParametersArgsDecorator';

defineCustomElements();

const preview: Preview = {
  parameters: {
    controls: { expanded: false },
    options: { panelPosition: 'right' },
  },
  decorators: [ParametersArgsDecorator],
};

export default preview;
