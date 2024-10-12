import { routes } from '@/lib/routes';
import { useTranslationClient } from '@/i18n/client';
import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const LoginFormButtons = () => {
  const { t } = useTranslationClient('login');
  const router = useRouter();
  const { formState } = useFormContext();
  return (
    <div className='flex gap-4'>
      <Button
        color='default'
        variant='bordered'
        className='w-full'
        type='button'
        onClick={() => router.push(routes.root)}>
        {t('cancel')}
      </Button>
      <Button color='primary' className='w-full' type='submit' isLoading={formState.isSubmitting}>
        {t('sign_in')}
      </Button>
    </div>
  );
};

export default LoginFormButtons;
