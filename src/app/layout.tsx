import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SessionWrapper from '@/components/SessionWrapper';

const roboto = Roboto({ weight: '500', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jenkins Electric LLC',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <SessionWrapper>
          <Navbar />
          <div className="min-h-[82vh]">{children}</div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
