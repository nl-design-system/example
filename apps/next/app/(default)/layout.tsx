import { PropsWithChildren } from 'react';
import { Layout } from '@/layout/Layout';
import '@amsterdam/design-system-tokens/dist/index.css';
import '@nl-design-system-unstable/start-design-tokens/dist/theme.css';
import './default.css';

const DefaultLayout = ({ children }: PropsWithChildren) => (
  <Layout navbarCurrent="home" theme="start-theme">
    {children}
  </Layout>
);

export default DefaultLayout;
