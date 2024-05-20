/* eslint-disable @typescript-eslint/no-var-requires */
import { easeIn, motion } from 'framer-motion'
import { sentMailContainer } from '../../../../application/contactForm/contactForm.css'
import { useRouter } from 'next/router'
import Lottie from 'lottie-react'

const successCheck = require('/public/success_check.json')

export default function SentMail() {
  const router = useRouter()
  const customerAnimation = {
    hidden: {
      y: 10,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: easeIn,
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      className={sentMailContainer}
      variants={customerAnimation}
      initial="hidden"
      animate="show">
      <Lottie animationData={successCheck} loop={false} />
      <div>
        <h1>
          Obrigado! <br /> sua mensagem foi enviada.
        </h1>
        <p>
          Nossa equipe recebeu sua mensagem e nossa equipe já está trabalhando para lhe fornecer uma
          resposta o mais breve possível.
        </p>
        <button onClick={() => router.back()}>Retornar a pagina anterior</button>
      </div>
    </motion.div>
  )
}
