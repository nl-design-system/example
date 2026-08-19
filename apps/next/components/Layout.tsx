import { Root } from '@utrecht/root-react';
import { ReactNode } from 'react';
import { Logo } from '../components/Logo';
import { Navbar } from '../components/Navbar/Navbar';
import { PageBody } from '../components/PageBody/PageBody';
import { PageFooter } from '../components/PageFooter/PageFooter';
import { PageHeader } from '../components/PageHeader/PageHeader';
import { SkipLink } from '../components/SkipLink/SkipLink';
import '@utrecht/root-css/dist/index.css';

type NavbarCurrent = 'detail' | 'form' | 'home';

type LayoutProps = {
  theme: 'start-theme' | 'rhc-theme';
  children: ReactNode;
  navbarCurrent: NavbarCurrent;
};

const navPages: { id: NavbarCurrent; href: string; label: string }[] = [
  { id: 'home', href: '/', label: 'Home' },
  { id: 'detail', href: '/detail', label: 'Detail page' },
  { id: 'form', href: '/form', label: 'Form' },
];

const Layout = ({ children, navbarCurrent, theme }: LayoutProps) => {
  const navItems = navPages.map((page) => ({
    ...page,
    'aria-current': (page.id === navbarCurrent ? 'page' : undefined) as 'page' | undefined,
  }));

  return (
    <Root lang="en" dir="ltr" className={theme}>
      <body>
        <SkipLink href="#main">Skip to main content</SkipLink>

        <PageHeader>
          <Logo />
        </PageHeader>

        <Navbar items={navItems} />

        <PageBody id="main">{children}</PageBody>

        <PageFooter />
      </body>
    </Root>
  );
};

export { Layout };
