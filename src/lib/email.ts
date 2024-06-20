import { email, emailConfig, gmailPass, gmailPort, gmailSMTP } from './config';
import nodemailer from 'nodemailer';
import { IClientRequestCreate } from '@/types/client-request';
import { useTranslationServer } from '@/i18n';

const transporter = nodemailer.createTransport({
  host: gmailSMTP,
  port: gmailPort,
  secure: false,
  auth: {
    user: email,
    pass: gmailPass
  }
});

export const sendEmailNotification = async (data: IClientRequestCreate) => {
  const { t } = await useTranslationServer('email-notification');
  try {
    let info = '';
    if (data.email && data.phone) {
      info = `${t('mail')} ${data.email}.\n${t('phone')} ${data.phone}`;
    } else if (data.email) {
      info = `${t('mail')} ${data.email}.\n`;
    } else {
      info = `${t('phone')} ${data.phone}.\n`;
    }
    const mensaje = {
      from: email,
      to: email,
      subject: emailConfig.subject,
      text: `${data.description}.\n${info}`
    };

    await transporter.sendMail(mensaje);
  } catch (error) {
    console.log(error);
    throw new Error('Invalid notification mail');
  }
};
