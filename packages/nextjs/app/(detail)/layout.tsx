import type { Metadata } from 'next';
import '@amsterdam/design-system-tokens/dist/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import { Layout } from '@/components/Layout';
import '../layout.css';

export const metadata: Metadata = {
  description: 'A Next.js example project using components from the NL Design System',
  title: 'NL Design System',
};

const DetailRootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <Layout navbarCurrent="detail" theme="rhc-theme">
    {children}
  </Layout>
);

export default DetailRootLayout;
