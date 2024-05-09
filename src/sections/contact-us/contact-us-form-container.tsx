'use client';

import React from 'react';
import ContactUsForm from './contact-us-form';
import { useForm } from 'react-hook-form';
import FormProvider from '@/components/form/form-provider';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactUSchema, contactUsDefaultValues } from './contact-us-form-options';
import { frontendService } from '@/services/frontend';

const ContactUsFormContainer = () => {
  const methods = useForm({ resolver: zodResolver(contactUSchema), defaultValues: contactUsDefaultValues });
  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    await frontendService.clientRequest.createClientRequest(data);
  });

  return (
    <FormProvider {...{ onSubmit, methods }}>
      <ContactUsForm />
    </FormProvider>
  );
};

export default ContactUsFormContainer;
