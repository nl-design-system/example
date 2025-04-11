/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@example/components-css/button/README.md?raw';
import { ExampleButton } from '@example/web-components-react';
import { PropsWithChildren } from 'react';

const Button = ({ children }: PropsWithChildren) => <ExampleButton>{children}</ExampleButton>;

const meta = {
  id: 'web-component-button',
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
  title: 'Web Component/Button',
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Example button',
};
