import type { ComponentProps } from 'react';
import { Textbox as UtrechtTextbox } from '@utrecht/component-library-react';
import '@utrecht/textbox-css/dist/index.css';

export const TextInput = (props: ComponentProps<typeof UtrechtTextbox>) => <UtrechtTextbox {...props} />;
