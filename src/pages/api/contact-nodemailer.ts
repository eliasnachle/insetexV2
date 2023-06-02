const nodemailer = require("nodemailer");
import { render } from '@react-email/render';
import { CustomerRecivedEmail } from "../../presentation/infra/email/customerRecivedEmail"

interface IContact {
  body: {
    name: string;
    phone: string;
    email: string;
    message: string;
  };
}

export default async function sendEmail(req: IContact, res: any) {
  let transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: "noreply@insetex.com.br",
      pass: "Insetex@123",
    },
  });

  try {
    let info = await transporter.sendMail({
      from: `noreply@insetex.com.br`,
      to: `${req.body.email}`,
      subject: `${req.body.name}, recebemos seu pedido de orçamento`,
      html: render(CustomerRecivedEmail(req.body.name))
    });
    console.log(info.messageId)
    console.log(`${req.body.email} - enviado!`)
  } catch (error: any) {
    res.status(500).json({ error: error.message || error.toString() });
  }  

  return res.status(200).json({ error: "" });
}