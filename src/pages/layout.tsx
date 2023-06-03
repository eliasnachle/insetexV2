/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import { Inter } from 'next/font/google'
import '../presentation/styles/global.css'
import Header from '@/presentation/components/header/header';
import Footer from '@/presentation/components/footer/footer';
import Whatsapp from '@/presentation/components/whatsapp/whatsapp';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <main className={inter.className}>
      <Whatsapp />
      <Header />
      {children}
      <Footer />
    </main>
  </>    
  );
}
