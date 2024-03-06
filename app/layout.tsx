import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { TabProvider } from './lib/context/provider/Tab';

import { Footer } from './Footer';
import { Header } from './Header';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '247 - Jiwo Kristi',
  description: 'Frontend Developer test for Jiwo Kristi.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Header />
          <TabProvider>{children}</TabProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
