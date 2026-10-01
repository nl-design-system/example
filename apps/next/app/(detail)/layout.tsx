import { PropsWithChildren } from 'react';
import { Layout } from '@/layout/Layout';
import '@amsterdam/design-system-tokens/dist/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import './detail/detail.css';

const DetailRootLayout = ({ children }: PropsWithChildren) => (
  <Layout navbarCurrent="detail" theme="rhc-theme">
    {children}
  </Layout>
);

export default DetailRootLayout;
