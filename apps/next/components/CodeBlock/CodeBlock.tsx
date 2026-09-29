import { CodeBlock as UtrechtCodeBlock } from '@nl-design-system-candidate/code-block-react';
import dedent from 'dedent';
import '@nl-design-system-candidate/code-block-css/code-block.css';

export const CodeBlock = UtrechtCodeBlock;

// Template tags for code snippets: mark the language for editor highlighting,
// and strip the surrounding blank lines and common indentation.
export const js = dedent;
export const sh = dedent;
