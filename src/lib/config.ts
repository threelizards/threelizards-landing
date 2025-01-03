export const phoneContact = '+1 (813) 390-9392';
export const location = 'Tampa, FL';
export const email = 'threelizards.co@gmail.com';
export const emailConfig = { subject: 'Three Lizards Notification' };
export const socialLinks = {
  X: process.env.THREE_LIZARDS_X || '#',
  INSTAGRAM: process.env.THREE_LIZARDS_INSTAGRAM || '#',
  LINKEDIN: process.env.THREE_LIZARDS_LINKEDIN || '#',
  FACEBOOK: process.env.THREE_LIZARDS_FACEBOOK || '#',
  GITHUB: process.env.THREE_LIZARDS_GITHUB || '#'
};
export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';
export const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || '';
export const RECAPTCHA_SERVER_VERIFY_URL = process.env.RECAPTCHA_SERVER_VERIFY_URL || '';
export const IP_API = process.env.IP_API || '';
export const fallbackCountry = 'US';
export const GOOGLE_TGM_ID = process.env.NEXT_PUBLIC_GOOGLE_TGM_ID || '';
export const gmailPass = process.env.GMAIL_PASS || '';
export const gmailSMTP = process.env.GMAIL_SMTP || '';
export const gmailPort = Number(process.env.GMAIL_PORT) || 587;
export const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL || '';
export const ADMIN_USER = process.env.ADMIN_USER || '';
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';
