import { H2, Subtitle } from '@/theme/typography';
import { Button } from '@nextui-org/button';
import React from 'react';
import { Link } from '@nextui-org/link';
import { routes } from '@/lib/routes';
import { useTranslationServer } from '@/i18n';

const FAQHeader: React.FC = async () => {
  const { t } = await useTranslationServer('faq-section');
  return (
    <div className='flex flex-col gap-y-4'>
      <H2 className='text-xl font-semibold text-center lg:text-start'>{t('title')}</H2>
      <Subtitle className='opacity-60 text-center lg:text-start'>{t('subtitle')}</Subtitle>
      <div className='flex justify-center lg:justify-start'>
        <Button color='primary' variant='solid' as={Link} href={routes.contact_us} className='max-w-40'>
          {t('contact')}
        </Button>
      </div>
    </div>
  );
};

export default FAQHeader;
