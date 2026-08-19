import { NavBar } from '@rijkshuisstijl-community/navigation-bar-react';

export interface NavbarItem {
  id: string;
  'aria-current': 'page' | undefined;
  href: string;
  label: string;
}

export interface NavbarProps {
  items: NavbarItem[];
}

const Navbar = ({ items }: NavbarProps) => <NavBar items={items} />;

export { Navbar };
