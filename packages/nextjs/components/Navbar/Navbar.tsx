import '@utrecht/nav-bar-css/dist/index.css';
import '@utrecht/nav-list-css/dist/index.css';
import { NavList, NavListLink } from '@utrecht/component-library-react';
import { NavBar } from '@utrecht/nav-bar-react';

export interface NavbarProps {
  current: 'home' | 'detail';
}

const Navbar = ({ current }: NavbarProps) => (
  <nav aria-label="Hoofdnavigatie">
    <NavBar>
      <NavList>
        <NavListLink href="/" aria-current={current === 'home' ? 'page' : undefined}>
          Home
        </NavListLink>
        <NavListLink href="/detail" aria-current={current === 'detail' ? 'page' : undefined}>
          Detail page
        </NavListLink>
      </NavList>
    </NavBar>
  </nav>
);

export { Navbar };
