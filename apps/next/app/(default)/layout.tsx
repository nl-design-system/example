import type { Metadata } from 'next';
import '@amsterdam/design-system-tokens/dist/index.css';
import '@nl-design-system-unstable/start-design-tokens/dist/theme.css';
import { PropsWithChildren } from 'react';
import { Layout } from '@/components/Layout';
import './layout.css';

export const metadata: Metadata = {
  description: 'A Next.js example project using components from the NL Design System',
  title: 'Next.js example site',
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <Layout navbarCurrent="home" theme="start-theme">
    {children}
  </Layout>
);

export default RootLayout;
