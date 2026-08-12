import { Root } from '@utrecht/root-react';
import { ReactNode } from 'react';
import { Logo } from '../components/Logo';
import { Navbar, type NavbarProps } from '../components/Navbar/Navbar';
import { PageBody } from '../components/PageBody/PageBody';
import { PageFooter } from '../components/PageFooter/PageFooter';
import { PageHeader } from '../components/PageHeader/PageHeader';
import { SkipLink } from '../components/SkipLink/SkipLink';
import '@utrecht/root-css/dist/index.css';

type LayoutProps = {
  theme: 'start-theme' | 'rhc-theme';
  children: ReactNode;
  navbarCurrent: NavbarProps['current'];
};

const Layout = ({ children, navbarCurrent, theme }: LayoutProps) => {
  return (
    <Root lang="en" dir="ltr" className={theme}>
      <body>
        <SkipLink href="#main">Skip to main content</SkipLink>

        <PageHeader>
          <Logo />
        </PageHeader>

        <Navbar current={navbarCurrent} />

        <PageBody id="main">{children}</PageBody>

        <PageFooter />
      </body>
    </Root>
  );
};

export { Layout };
