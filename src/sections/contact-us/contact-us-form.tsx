import React from 'react';
import { useTranslationClient } from '@/i18n/client';
import ContactUsFormButtons from './contact-us-form-buttons';
import FormInput from '@/components/form/form-input';
import FormTextArea from '@/components/form/form-text-area';
import { useFormContext } from 'react-hook-form';
import { IClientRequestCreate } from '@/types/client-request';
import FormPhoneInput from '@/components/form/form-phone-input';

const ContactUsForm = () => {
  const { t } = useTranslationClient('contact-us');
  const { watch } = useFormContext<IClientRequestCreate>();
  const [email, phone] = watch(['email', 'phone']);
  return (
    <div className='flex flex-col gap-4 w-full'>
      <FormPhoneInput translateFile='contact-us' label={t('form.phone')} name='phone' isRequired={!email} />
      <FormInput translateFile='contact-us' label={t('form.email')} name='email' isRequired={!phone} maxLength={256} />
      <FormTextArea
        translateFile='contact-us'
        label={t('form.description')}
        name='description'
        isRequired
        maxLength={2048}
      />
      <ContactUsFormButtons />
    </div>
  );
};

export default ContactUsForm;
