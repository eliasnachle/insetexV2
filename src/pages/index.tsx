/* eslint-disable @next/next/no-page-custom-font */
import { Inter } from 'next/font/google'
import '../presentation/styles/global.css'
import Home from '../pages/home/home'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" />
      </Head>
      <main className={inter.className}>
        <Home />
      </main>
    </>
  )
}
