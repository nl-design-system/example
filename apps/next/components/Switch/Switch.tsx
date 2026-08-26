import type { ComponentProps } from 'react';
import { FormToggle as UtrechtFormToggle } from '@utrecht/component-library-react';
import { ComponentReference } from '@/components/ComponentReference/ComponentReference';
import '@utrecht/form-toggle-css/dist/index.css';

export const Switch = (props: ComponentProps<typeof UtrechtFormToggle>) => (
  <>
    <UtrechtFormToggle {...props} />
    <ComponentReference label="Switch" npmPackage="@utrecht/form-toggle-css" />
  </>
);
