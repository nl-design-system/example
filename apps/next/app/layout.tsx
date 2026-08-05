import type { Metadata } from 'next';
import '@amsterdam/design-system-tokens/dist/index.css';
import '@nl-design-system-unstable/start-design-tokens/dist/theme.css';
import { PropsWithChildren } from 'react';
import { Link } from '../components/Link/Link';
import { Logo } from '../components/Logo';
import { PageBody } from '../components/PageBody/PageBody';
import { PageFooter } from '../components/PageFooter/PageFooter';
import { PageHeader } from '../components/PageHeader/PageHeader';
import { SkipLink } from '../components/SkipLink/SkipLink';
import './layout.css';

export const metadata: Metadata = {
  description: 'A Next.js example project using components from the NL Design System',
  title: 'NL Design System',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" dir="ltr" className="start-theme">
      <body>
        <SkipLink href="#main">Skip to main content</SkipLink>

        <PageHeader>
          <Link href="https://nldesignsystem.nl">
            <Logo />
          </Link>
        </PageHeader>

        <PageBody id="main">{children}</PageBody>

        <PageFooter />
      </body>
    </html>
  );
}
