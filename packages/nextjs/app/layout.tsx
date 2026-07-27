import type { Metadata } from 'next';
import '@amsterdam/design-system-tokens/dist/index.css';
import '@nl-design-system-community/ma-design-tokens/dist/variables.css';
import './globals.css';
import { PageBody } from '../components/PageBody/PageBody';
import { PageFooter } from '../components/PageFooter/PageFooter';
import { PageHeader } from '../components/PageHeader/PageHeader';
import { SkipLink } from '../components/SkipLink/SkipLink';

export const metadata: Metadata = {
  description: 'A Next.js example project using components from the NL Design System',
  title: 'NL Design System',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="ma-theme">
      <body>
        <SkipLink href="#main">Skip to main content</SkipLink>

        <PageHeader>Logo</PageHeader>

        <PageBody id="main">{children}</PageBody>
        <PageFooter>Footer</PageFooter>
      </body>
    </html>
  );
}
