import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components-react/src/Button';

const meta = {
  id: 'react-button',
  args: {
    children: 'Read more...',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [undefined, 'button', 'submit', 'reset'],
    },
  },
  component: Button,
  title: 'React Component/Button',
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
