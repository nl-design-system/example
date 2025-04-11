/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@example/components-css/button/README.md?raw';
import { PropsWithChildren } from 'react';
import '@example/components-css/button/index.scss';

const Button = ({ children }: PropsWithChildren) => (
  <button className="example-button" type="button">
    <span className="example-button__text">{children}</span>
  </button>
);

const meta = {
  id: 'css-button',
  args: {
    children: 'Opslaan en verder',
  },
  argTypes: {
    children: {
      name: 'Content',
      defaultValue: '',
      description: 'Button text',
      type: {
        name: 'string',
        required: true,
      },
    },
  },
  component: Button,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  tags: ['autodocs'],
  title: 'CSS Component/Button',
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Example button',
};
