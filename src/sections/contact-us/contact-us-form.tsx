import React from 'react';
import { useTranslationClient } from '@/i18n/client';
import ContactUsFormButtons from './contact-us-form-buttons';
import FormInput from '@/components/form/form-input';
import FormTextArea from '@/components/form/form-text-area';

const ContactUsForm = () => {
  const { t } = useTranslationClient('contact-us');
  return (
    <div className='flex flex-col gap-4 w-full'>
      <FormInput label={t('form.phone')} name='phone' />
      <FormInput label={t('form.email')} name='email' />
      <FormTextArea label={t('form.description')} name='description' />
      <ContactUsFormButtons />
    </div>
  );
};

export default ContactUsForm;
