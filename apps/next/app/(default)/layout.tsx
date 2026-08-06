import '@amsterdam/design-system-tokens/dist/index.css';
import '@nl-design-system-unstable/start-design-tokens/dist/theme.css';
import { PropsWithChildren } from 'react';
import { Layout } from '@/components/Layout';
import './default.css';

const DefaultLayout = ({ children }: PropsWithChildren) => (
  <Layout navbarCurrent="home" theme="start-theme">
    {children}
  </Layout>
);

export default DefaultLayout;
