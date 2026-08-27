import { Root } from '@utrecht/root-react';
import { ReactNode } from 'react';
import { Logo } from '@/components/Logo';
import { PageBody } from '@/components/PageBody/PageBody';
import { SkipLink } from '@/components/SkipLink/SkipLink';
import { DevPaneProvider } from '@/dev-pane/DevPaneProvider';
import { Navbar } from '@/layout/Navbar/Navbar';
import { PageFooter } from '@/layout/PageFooter/PageFooter';
import { PageHeader } from '@/layout/PageHeader/PageHeader';
import '@utrecht/root-css/dist/index.css';
import '@utrecht/page-layout-css/dist/index.css';

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
      <body className="utrecht-page-layout">
        <SkipLink href="#main">Skip to main content</SkipLink>

        <PageHeader>
          <Logo />
        </PageHeader>

        <Navbar items={navItems} />

        <DevPaneProvider>
          <PageBody id="main">{children}</PageBody>
        </DevPaneProvider>

        <PageFooter />
      </body>
    </Root>
  );
};

export { Layout };
