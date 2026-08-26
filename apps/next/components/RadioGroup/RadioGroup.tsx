import type { ComponentProps } from 'react';
import { RadioGroup as UtrechtRadioGroup } from '@utrecht/radio-group-react';
import { ComponentReference } from '@/components/ComponentReference/ComponentReference';
import '@utrecht/radio-button-css/dist/index.css';
import '@utrecht/form-fieldset-css/dist/index.css';

export const RadioGroup = ({ children, ...props }: ComponentProps<typeof UtrechtRadioGroup>) => (
  <UtrechtRadioGroup {...props}>
    {children}
    <ComponentReference label="Radio Group" npmPackage="@utrecht/radio-group-react" />
  </UtrechtRadioGroup>
);
