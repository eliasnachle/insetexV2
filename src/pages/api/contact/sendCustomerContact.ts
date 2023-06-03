import nodemailer from 'nodemailer'
import { render } from '@react-email/render'
import { ContactSentMail } from '../../../presentation/infra/email/contactSentMail'
import { ContactRecipeMail } from '../../../presentation/infra/email/contactRecipeMail'
import { NextApiResponse } from 'next'

interface IContact {
  body: {
    name: string
    phone: string
    email: string
    message: string
  }
}

export default async function sendEmail(req: IContact, res: NextApiResponse) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.CONTACT_MAIL_USER,
      pass: process.env.CONTACT_MAIL_PASS,
    },
  })

  try {
    const customerMail = await transporter.sendMail({
      from: 'noreply@insetex.com.br',
      to: req.body.email,
      subject: `${req.body.name}, recebemos seu pedido de orçamento`,
      html: render(ContactSentMail(req.body.name)),
    })
    console.log(customerMail.messageId)
    const companyMail = await transporter.sendMail({
      from: 'noreply@insetex.com.br',
      to: 'contato-site@insetex.com.br',
      subject: `${req.body.name}, envio uma mensagem.`,
      html: render(ContactRecipeMail(req.body)),
    })
    console.log(`${req.body.email} - enviado!`)
    console.log(companyMail.messageId)
  } catch (error) {
    res.status(500).json({ error: error.message || error.toString() })
  }

  return res.status(200).json({ error: '' })
}
