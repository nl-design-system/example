import { NavBar } from '@rijkshuisstijl-community/navigation-bar-react';

export interface NavbarProps {
  current: 'home' | 'detail';
}

const Navbar = ({ current }: NavbarProps) => (
  <NavBar
    items={[
      {
        id: 'home',
        'aria-current': current === 'home' ? 'page' : undefined,
        href: '/',
        label: 'Home',
      },
      {
        id: 'detail',
        'aria-current': current === 'detail' ? 'page' : undefined,
        href: '/detail',
        label: 'Detail page',
      },
    ]}
  />
);

export { Navbar };
