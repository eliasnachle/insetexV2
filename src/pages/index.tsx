import { Inter } from 'next/font/google'
import '../presentation/styles/global.css'
import Home from '../pages/home/home'

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <>
      <main className={inter.className}>
        <Home />
      </main>
    </>
  )
}
