import type { Metadata } from 'next';
import './globals.css';
import './theme.css';

export const metadata: Metadata = {
  description: 'A Next.js example project using components from the NL Design System',
  title: 'NL Design System',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="ma-theme">
      <body>{children}</body>
    </html>
  );
}
