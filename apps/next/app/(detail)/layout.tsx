import type { Metadata } from 'next';
import '@amsterdam/design-system-tokens/dist/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import { PropsWithChildren } from 'react';
import { Layout } from '@/components/Layout';
import './detail/detail.css';

export const metadata: Metadata = {
  description: 'A Next.js example project using components from the NL Design System',
  title: 'Next.js example site',
};

const DetailRootLayout = ({ children }: PropsWithChildren) => (
  <Layout navbarCurrent="detail" theme="rhc-theme">
    {children}
  </Layout>
);

export default DetailRootLayout;
