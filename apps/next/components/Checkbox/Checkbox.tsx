'use client';

import type { ComponentProps } from 'react';
import { Checkbox as UtrechtCheckbox } from '@utrecht/component-library-react';
import '@utrecht/checkbox-css/dist/index.css';

export const Checkbox = (props: ComponentProps<typeof UtrechtCheckbox>) => <UtrechtCheckbox {...props} />;
