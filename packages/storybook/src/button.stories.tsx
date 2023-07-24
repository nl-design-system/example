import { ArgsTable, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components-react/src/Button';

const meta = {
  title: 'React Component/Button',
  id: 'react-button',
  component: Button,
  args: {
    children: 'Read more...',
  },
  parameters: {
    tokensPrefix: 'utrecht-button',
    docs: {
      page: () => (
        <>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    appearance: {
      control: { type: 'select' },
      options: [undefined, 'primary-action-button', 'secondary-action-button', 'subtle-button'],
    },
    type: {
      control: { type: 'select' },
      options: [undefined, 'button', 'submit', 'reset'],
    },
  },
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
