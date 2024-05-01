import { Input, Textarea } from '@nextui-org/input';
import React from 'react';
import { useTranslationClient } from '@/i18n/client';
import ContactUsFormButtons from './contact-us-form-buttons';

const ContactUsForm = () => {
  const { t } = useTranslationClient('contact-us');
  return (
    <div className='flex flex-col gap-4 w-full'>
      <Input label={t('form.phone')} name='phone' />
      <Input label={t('form.email')} name='email' />
      <Textarea label={t('form.description')} name='description' />
      <ContactUsFormButtons />
    </div>
  );
};

export default ContactUsForm;
