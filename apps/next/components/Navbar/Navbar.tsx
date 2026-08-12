import { NavBar } from '@rijkshuisstijl-community/navigation-bar-react';

export interface NavbarProps {
  current: 'detail' | 'form' | 'home';
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
      {
        id: 'form',
        'aria-current': current === 'form' ? 'page' : undefined,
        href: '/form',
        label: 'Form',
      },
    ]}
  />
);

export { Navbar };
