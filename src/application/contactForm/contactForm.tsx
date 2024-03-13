import SentMail from '@/presentation/components/contact/sentMail/sentMail'
import { useState } from 'react'
import { formContainer } from './contactForm.css'
import UserForm from './userForm/userForm'

export default function ContactForm() {
  const [isSent, setIsSent] = useState(false)

  return (
    <div className={formContainer}>
      <SentMail />
      {/* <h1>Fale Conosco</h1>
      <p>
        Preencha todos os campos obrigatórios do formulário de contato com suas
        informações corretas.
      </p>
      {isSent ? <SentMail /> : <UserForm setIsSent={setIsSent} />} */}
    </div>
  )
}
