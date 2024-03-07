import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from './Footer';
import { Header } from './Header';
import { Wrapper } from './Wrapper';

import './globals.css';

export const metadata: Metadata = {
  title: 'Jiwo Kristi | 247',
  description: 'Frontend Developer test for Jiwo Kristi.',
};

const inter = Inter({ subsets: ['latin'] });

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
          <Wrapper>{children}</Wrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
