import React from 'react';
import { useTranslationClient } from '@/i18n/client';
import ContactUsFormButtons from './contact-us-form-buttons';
import FormInput from '@/components/form/form-input';
import FormTextArea from '@/components/form/form-text-area';
import { useFormContext } from 'react-hook-form';
import { IClientRequestCreate } from '@/types/client-request';
import FormPhoneInput from '@/components/form/form-phone-input';
import ReCAPTCHA from 'react-google-recaptcha';
import { RECAPTCHA_SITE_KEY } from '@/lib/config';
import { useI18NContext } from '@/i18n/context';
import { CountryCode } from 'libphonenumber-js';
import { useThemeContext } from '@/theme/context/theme-context';

interface ContactUsFormProps {
  initialCountry: CountryCode;
  setCaptcha: React.Dispatch<React.SetStateAction<string | null>>;
}

const ContactUsForm: React.FC<ContactUsFormProps> = ({ setCaptcha, initialCountry }) => {
  const { t } = useTranslationClient('contact-us');
  const { watch } = useFormContext<IClientRequestCreate>();
  const [email, phone] = watch(['email', 'phone']);
  const { theme } = useThemeContext();
  const { language } = useI18NContext();

  return (
    <div className='flex flex-col gap-4 w-full'>
      <FormPhoneInput
        translateFile='contact-us'
        label={t('form.phone')}
        name='phone'
        isRequired={!email}
        initialCountry={initialCountry}
      />
      <FormInput translateFile='contact-us' label={t('form.email')} name='email' isRequired={!phone} maxLength={256} />
      <FormTextArea
        translateFile='contact-us'
        label={t('form.description')}
        name='description'
        isRequired
        maxLength={2048}
      />
      <ReCAPTCHA
        sitekey={RECAPTCHA_SITE_KEY}
        className='w-full'
        theme={theme === 'dark' ? 'dark' : 'light'}
        onChange={(token) => setCaptcha(token)}
        hl={language}
      />
      <ContactUsFormButtons />
    </div>
  );
};

export default ContactUsForm;
