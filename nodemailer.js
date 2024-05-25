import nodemailer from 'nodemailer';
import { message } from "./body.js";
import dotenv from 'dotenv';
dotenv.config();

const {HOST_MAIL_PROCURE, USERMAIL_PROCURE, PASS_APP} = process.env

const createTransport = (host, user, pass) => {
  const transporter = nodemailer.createTransport({
    host: host,
    port: 465,
    secure: true,
    auth: {
      user,
      pass
    }
  })
  return transporter
}

export const sendMail = async(from, emailList, subject, plainText, body) =>{
  const transporter = createTransport(HOST_MAIL_PROCURE, USERMAIL_PROCURE, PASS_APP)

  try {
    const info = await transporter.sendMail({
      from: from, // sender address
      to: emailList, // list of receivers
      subject: subject, // Subject line
      text: plainText, // plain text body
      html: body, // html body
    });
    console.log("Message sent: ", info.messageId);
    return info.messageId
  } catch (error) {
    console.log('error: ', error)
    return error
  }

}

sendMail('Opinno <opinno>', 'ramirogrisales@gmail.com', 'Invitación Oferta', 'Ha sido invitado a participar en una oferta, dale click aca https://kiwiapp.starsdev.online/', message('Ramiro', "https://kiwiapp.starsdev.online/", "Opinno"))

