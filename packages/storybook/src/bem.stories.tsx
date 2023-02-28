/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import readme from './README.md';
import './bem.scss';

const Button = ({ textContent }) => (
  <button className="example-button" type="button">
    <span className="example-button__text">{textContent}</span>
  </button>
);

const meta = {
  title: 'CSS Component/Button',
  id: 'css-button',
  component: Button,
  argTypes: {
    textContent: {
      description: 'Button text',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: '',
    },
  },
  args: {
    textContent: 'Opslaan en verder',
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Button>;

export default meta;

export const Default: StoryObj<typeof Button> = {
  name: 'Example button',
};
