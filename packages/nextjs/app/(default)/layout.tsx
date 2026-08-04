import type { Metadata } from 'next';
import '@amsterdam/design-system-tokens/dist/index.css';
import '@nl-design-system-unstable/start-design-tokens/dist/theme.css';
import { Layout } from '@/components/Layout';
import '../layout.css';

export const metadata: Metadata = {
  description: 'A Next.js example project using components from the NL Design System',
  title: 'NL Design System',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <Layout navbarCurrent="home" theme="start-theme">
    {children}
  </Layout>
);

export default RootLayout;
