import { routes } from '@/lib/routes';
import { useTranslationClient } from '@/i18n/client';
import { Button } from '@nextui-org/button';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import Link from 'next/link';

const ContactUsFormButtons = () => {
  const { t } = useTranslationClient();
  const { formState } = useFormContext();
  return (
    <div className='flex gap-4'>
      <Button color='primary' variant='bordered' className='w-full' as={Link} href={routes.root}>
        {t('cancel')}
      </Button>
      <Button color='primary' className='w-full' type='submit' isLoading={formState.isSubmitting}>
        {t('send')}
      </Button>
    </div>
  );
};

export default ContactUsFormButtons;
