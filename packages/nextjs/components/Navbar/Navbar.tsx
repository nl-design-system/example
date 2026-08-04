import '@utrecht/nav-bar-css/dist/index.css';
import '@utrecht/nav-list-css/dist/index.css';
import { NavList, NavListLink } from '@utrecht/component-library-react';
import { NavBar } from '@utrecht/nav-bar-react';
import './navbar.css';

export interface NavbarProps {
  current: 'home' | 'detail';
}

const Navbar = ({ current }: NavbarProps) => (
  <nav aria-label="Hoofdnavigatie" className="nextjs-example-navbar">
    <NavBar>
      <NavList>
        <NavListLink
          href="/"
          className="nextjs-example-navbar__link"
          aria-current={current === 'home' ? 'page' : undefined}
        >
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
