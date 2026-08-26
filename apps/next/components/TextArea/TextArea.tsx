import type { ComponentProps } from 'react';
import { Textarea as UtrechtTextarea } from '@utrecht/component-library-react';
import { ComponentReference } from '@/components/ComponentReference/ComponentReference';
import '@utrecht/textarea-css/dist/index.css';

export const TextArea = (props: ComponentProps<typeof UtrechtTextarea>) => (
  <>
    <UtrechtTextarea {...props} />
    <ComponentReference label="Text Area" npmPackage="@utrecht/textarea-css" />
  </>
);
