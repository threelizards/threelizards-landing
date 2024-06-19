'use client';
import React, { useEffect, useState } from 'react';
import ContactUsForm from './contact-us-form';
import { useForm } from 'react-hook-form';
import FormProvider from '@/components/form/form-provider';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactUSchema, contactUsDefaultValues } from './contact-us-form-options';
import { frontendService } from '@/services/frontend';
import ContactUsModal from './contact-us-modal';
import { useDisclosure } from '@nextui-org/modal';
import { useRouter } from 'next/navigation';
import { routes } from '@/lib/routes';
import { toast } from 'react-toastify';
import { useTranslationClient } from '@/i18n/client';
import { CountryCode } from 'libphonenumber-js';

interface ContactUsFormProps {
  initialCountry: CountryCode;
}

const ContactUsFormContainer: React.FC<ContactUsFormProps> = ({ initialCountry }) => {
  const methods = useForm({ resolver: zodResolver(contactUSchema), defaultValues: contactUsDefaultValues });
  const { isOpen, onOpen } = useDisclosure();
  const { t } = useTranslationClient('contact-us');
  const { handleSubmit, watch, trigger } = methods;
  const router = useRouter();
  const [captcha, setCaptcha] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (captcha) {
        await frontendService.clientRequest.createClientRequest(data, captcha);
        onOpen();
      } else {
        toast(t('error.captcha'), { type: 'error' });
      }
    } catch (error) {
      toast(t('error.unknown'), { type: 'error' });
    }
  });

  const [phone, email] = watch(['phone', 'email']);

  useEffect(() => {
    if (phone) trigger('email');
    if (email) trigger('phone');
  }, [phone, email]);

  const onClose = () => {
    router.push(routes.root);
  };

  return (
    <FormProvider {...{ onSubmit, methods }}>
      <ContactUsForm {...{ setCaptcha, initialCountry }} />
      <ContactUsModal {...{ isOpen, onClose }} />
    </FormProvider>
  );
};

export default ContactUsFormContainer;
