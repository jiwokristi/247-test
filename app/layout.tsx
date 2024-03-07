'use client';

import { Provider } from 'react-redux';
// import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { TabProvider } from './lib/contexts/providers/Tab';

import store from './lib/store';

import { Footer } from './Footer';
import { Header } from './Header';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: '247 - Jiwo Kristi',
//   description: 'Frontend Developer test for Jiwo Kristi.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="portal"></div>
        <main>
          <Header />
          <Provider store={store}>
            <TabProvider>{children}</TabProvider>
          </Provider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
