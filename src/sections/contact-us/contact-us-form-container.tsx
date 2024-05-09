'use client';

import React from 'react';
import ContactUsForm from './contact-us-form';
import { useForm } from 'react-hook-form';
import FormProvider from '@/components/form/form-provider';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactUSchema, contactUsDefaultValues } from './contact-us-form-options';
import { frontendService } from '@/services/frontend';
import ContactUsModal from './contact-us-modal';
import { useDisclosure } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { routes } from '@/lib/routes';

const ContactUsFormContainer = () => {
  const methods = useForm({ resolver: zodResolver(contactUSchema), defaultValues: contactUsDefaultValues });
  const { isOpen, onOpen } = useDisclosure();
  const { handleSubmit } = methods;
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    await frontendService.clientRequest.createClientRequest(data);
    onOpen();
  });

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
