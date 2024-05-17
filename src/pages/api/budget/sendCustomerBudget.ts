import nodemailer from 'nodemailer'
import { render } from '@react-email/render'
import { ContactSentMail } from '../../../presentation/infra/email/contactSentMail'
import { NextApiResponse } from 'next'
import { BudgetState } from '@/domain/types/budget/budgetTypes'
import BudgetRecipeMail from '@/presentation/infra/email/budgetRecipeMail'

interface IBudget {
  body: BudgetState
}

export default async function sendEmail(req: IBudget, res: NextApiResponse) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.CONTACT_MAIL_USER,
      pass: process.env.CONTACT_MAIL_PASS,
    },
  })
  
  console.log("email ::: ", req.body.userData.email.inputValue)

  try {    
    const customerMail = await transporter.sendMail({
      from: process.env.CONTACT_MAIL_USER,
      to: req.body.userData.email.inputValue,
      subject: `${req.body.userData.name.inputValue}, recebemos sua solicitação de orçamento`,
      html: render(ContactSentMail(req.body.userData.name.inputValue)),
    })
    console.log(customerMail.messageId)
    const companyMail = await transporter.sendMail({
      from: process.env.CONTACT_MAIL_USER,
      to: 'contato-site@insetex.com.br',
      subject: `${req.body.userData.name.inputValue}, envio uma mensagem.`,
      html: render(BudgetRecipeMail(req.body)),
    })
    console.log(`${req.body.userData.email.inputValue} - enviado!`)
    console.log(companyMail.messageId)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({ error: error.message || error.toString() })
  }

  return res.status(200).json({ error: '' })
}
