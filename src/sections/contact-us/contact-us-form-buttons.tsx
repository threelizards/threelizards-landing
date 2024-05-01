import { routes } from '@/lib/routes';
import { useTranslationClient } from '@/i18n/client';
import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
import React from 'react';

const ContactUsFormButtons = () => {
  const { t } = useTranslationClient();
  const router = useRouter();
  return (
    <div className='flex gap-4'>
      <Button color='primary' variant='bordered' className='w-full' onClick={() => router.push(routes.root)}>
        {t('cancel')}
      </Button>
      <Button color='primary' className='w-full' type='submit'>
        {t('send')}
      </Button>
    </div>
  );
};

export default ContactUsFormButtons;
