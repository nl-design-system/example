import type { Decorator } from '@storybook/react-vite';

export const ParametersArgsDecorator: Decorator = (Story, context) => {
  context.parameters['args'] = context.args;

  return (
    <div className="example-theme">
      <Story />
    </div>
  );
};
