/* @license CC0-1.0 */

import readme from '@example/components-css/button/README.md?raw';
import { ExampleButton } from '@example/web-components-react';
import type { Meta, StoryObj } from '@storybook/react';
import { PropsWithChildren } from 'react';

const Button = ({ children }: PropsWithChildren<{}>) => <ExampleButton>{children}</ExampleButton>;

const meta = {
  title: 'Web Component/Button',
  id: 'web-component-button',
  component: Button,
  argTypes: {
    children: {
      name: 'Content',
      description: 'Button text',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: '',
    },
  },
  args: {
    children: 'Opslaan en verder',
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Example button',
};
