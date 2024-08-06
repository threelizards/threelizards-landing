import { email, emailConfig, gmailPass, gmailPort, gmailSMTP } from '../config';
import nodemailer from 'nodemailer';
import { IClientRequestCreate } from '@/types/client-request';
import { translationServer } from '@/i18n';
import { emailNotificationTemplate } from './emailNotificationTemplate';

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
  const { t } = await translationServer('email-notification');
  try {
    let info = '';
    if (data.email && data.phone) {
      info = `${t('mail')} ${data.email}.\n${t('phone')} ${data.phone}`;
    } else if (data.email) {
      info = `${t('mail')} ${data.email}.\n`;
    } else {
      info = `${t('phone')} ${data.phone}.\n`;
    }

    const htmlContent = emailNotificationTemplate({
      description: data.description || '',
      info
    });

    const mensaje = {
      from: email,
      to: email,
      subject: emailConfig.subject,
      html: htmlContent
    };

    await transporter.sendMail(mensaje);
  } catch {
    throw new Error('Invalid notification mail');
  }
};
