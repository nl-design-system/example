import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import './root.css';

export const metadata: Metadata = {
  description: 'A Next.js example project using components from the NL Design System',
  title: 'Next.js example site using NL Design System',
};

const RootLayout = ({ children }: PropsWithChildren) => <>{children}</>;

export default RootLayout;
