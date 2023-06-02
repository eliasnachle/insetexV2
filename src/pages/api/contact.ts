import sendgrid from "@sendgrid/mail";
import { render } from '@react-email/render';
import { CustomerRecivedEmail } from "../../presentation/infra/email/customerRecivedEmail"

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

interface IContact {
  body: {
    name: string;
    phone: string;
    email: string;
    message: string;
  };
}

export default async function sendEmail(req: IContact, res: any) {
  try {
    await sendgrid.send({
      from: "noreply@insetex.com.br",
      to: req.body.email,
      subject: `Insetex`,
      // html: render(CustomerRecivedEmail(req.body.name)),
      html: `<h1>Ola, tudo bem? </h1>`,
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
  return res.status(200).json({ error: "" });
}