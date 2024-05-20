import serviceMap from '../servicesMap'
import { dropdownContainer, chevron } from './dropdown.css'
import { easeOut, motion } from 'framer-motion'
import Link from 'next/link'

export default function Dropdown() {
  const heroAnimation = {
    hidden: {
      y: -10,
      opacity: 0.5,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: easeOut,
        duration: 0.25,
      },
    },
  }

  return (
    <motion.nav
      variants={heroAnimation}
      initial="hidden"
      animate="show"
      className={dropdownContainer}>
      <div className={chevron} />
      <ul>
        {serviceMap.map((it, i) => (
          <li key={i}>
            <Link href={it.url}>{it.label}</Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
