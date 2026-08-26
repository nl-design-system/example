import type { ComponentProps } from 'react';
import { Textbox as UtrechtTextbox } from '@utrecht/component-library-react';
import { ComponentReference } from '@/components/ComponentReference/ComponentReference';
import '@utrecht/textbox-css/dist/index.css';

export const TextInput = (props: ComponentProps<typeof UtrechtTextbox>) => (
  <>
    <UtrechtTextbox {...props} />
    <ComponentReference label="Text Input" npmPackage="@utrecht/textbox-css" />
  </>
);
