import { AboutContainer } from './about.css'
import Logo from '/public/logo_light.svg'
import { motion } from 'framer-motion'

export default function About() {
  const articleAnimation = {
    initial: {
      transform:
        'perspective(700px) translateX(0px) translateY(-45px) scale(1) rotate(0deg) rotateX(10deg) rotateY(0deg) translateZ(0px)',
    },
    onScreen: {
      transform:
        'perspective(700px) translateX(0px) translateY(0px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px)',
    },
  }

  return (
    <section className={AboutContainer}>
      <div>
        <motion.article
          initial={'initial'}
          whileInView={'onScreen'}
          variants={articleAnimation}
          viewport={{ once: false, amount: 'all' }}
          transition={{
            staggerChildren: 0.5,
            staggerDirection: -1,
          }}
        >
          <Logo />
          <p>
            Há duas décadas no mercado de Controle de Pragas e Desentupimento a
            INSETEX, vem prestando serviços com qualidade, segurança e
            eficiência altamente especializada, seguindo padrões e normas de
            segurança e qualidade. Fundada há quase três decadas, a INSETEX
            começou a comercializar seus serviços apenas na Grande São Paulo com
            o objetivo inicial de suprir as necessidades locais. buscando
            constante aprimoramento.
          </p>
        </motion.article>
      </div>
    </section>
  )
}
