import {
  serviceContainer,
  serviceItensContainer,
  serviceItem,
} from './service.css'
import serviceMap from './serviceMap'
import { motion } from 'framer-motion'

export default function Service() {
  const serviceAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.75,
      },
    },
  }

  return (
    <motion.section
      variants={serviceAnimation}
      initial="hidden"
      animate="show"
      className={serviceContainer}
    >
      <article>
        <h1>Porque a Insetex é a melhor no combate de pragas?</h1>
        <div className={serviceItensContainer}>
          {serviceMap.map((it, i) => (
            <article key={i} className={serviceItem}>
              {it.svg}
              <h2>{it.title}</h2>
              <p>{it.description}</p>
            </article>
          ))}
        </div>
      </article>
    </motion.section>
  )
}
