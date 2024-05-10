'use client';

import React, { useEffect } from 'react';
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

const ContactUsFormContainer = () => {
  const methods = useForm({ resolver: zodResolver(contactUSchema), defaultValues: contactUsDefaultValues });
  const { isOpen, onOpen } = useDisclosure();
  const { t } = useTranslationClient('contact-us');
  const { handleSubmit, watch, trigger } = methods;
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await frontendService.clientRequest.createClientRequest(data);
      onOpen();
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
      <ContactUsForm />
      <ContactUsModal {...{ isOpen, onClose }} />
    </FormProvider>
  );
};

export default ContactUsFormContainer;
