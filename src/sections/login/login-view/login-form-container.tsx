'use client';

import React, { useEffect } from 'react';
import FormProvider from '@/components/form/form-provider';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import LoginForm from './login-form-container/login-form';
import { loginDefaultValues, loginSchema } from '../login-options';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { routes } from '@/lib/routes';
import { RETURN_TO_PARAM } from '@/auth/context';
import { toast } from 'react-toastify';
import { useTranslationClient } from '@/i18n/client';

const LoginFormContainer = () => {
  const methods = useForm({ resolver: zodResolver(loginSchema), defaultValues: loginDefaultValues });
  const searchParams = useSearchParams();
  const navigateTo = searchParams.get(RETURN_TO_PARAM) || routes.root;
  const { t } = useTranslationClient('login');

  const router = useRouter();
  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await signIn('credentials', { ...data, redirect: false });
      if (res?.ok) {
        router.push(navigateTo);
      } else {
        toast(t('error.invalid_credentials'), { type: 'error' });
      }
    } catch {
      toast(t('error.invalid_credentials'), { type: 'error' });
    }
  });

  useEffect(() => {
    router.refresh();
  }, [router]);

  return (
    <FormProvider {...{ onSubmit, methods }}>
      <LoginForm />
    </FormProvider>
  );
};

export default LoginFormContainer;
