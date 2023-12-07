// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer, { TransportOptions } from "nodemailer";

interface CustomTransportOptions extends TransportOptions {
  host: string;
  port: string;
  auth: {
    user: string;
    pass: string;
  };
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: "587",
    auth:{
      user: "4cacd6de90097f",
      pass:"2cc98265fcee4b"
    }
  } as CustomTransportOptions)

  transporter.sendMail({
    from:`orgaosautuadores@gmail.com`,
    to: 'orgaosautuadores@gmail.com',
    replyTo: req.body.email,
    subject:`Contato Atraves do site - ${req.body.assunto}`,
    text: req.body.mensagem,
    html : `<b>${req.body.mensagem}</b>`
  }).then((response)=>{res.send(response)}).catch((error)=>{res.send(error)})
}
