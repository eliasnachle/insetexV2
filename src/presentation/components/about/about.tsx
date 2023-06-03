import { aboutContainer } from './about.css'
import AboutService from './aboutService'
import Customers from './customers'
import History from './history'

export default function About() {
  return (
    <>
      <section className={aboutContainer}>
        <History />
        <Customers />
        <AboutService />
      </section>
    </>
  )
}
