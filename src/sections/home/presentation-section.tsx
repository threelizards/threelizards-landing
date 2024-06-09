import React from 'react';
import { H1, Subtitle } from '@/theme/typography';
import { useTranslationServer } from '@/i18n';
import { Button } from '@nextui-org/button';
import PresentationPhoto from './presentation-photo';

const PresentationSection = async () => {
  const { t } = await useTranslationServer('presentation-section');
  return (
    <section className='flex flex-col lg:flex-row gap-6 lg:gap-24 max-w-7xl items-center px-8 my-10'>
      <div className='flex flex-col w-full gap-6 text-center lg:text-start items-center lg:items-start'>
        <H1>
          {t('title')} <span className='text-secondary2'>{t('title2')}</span>
        </H1>
        <Subtitle>{t('subtitle')}</Subtitle>
        <Button color='success' variant='solid' className='max-w-40' size='lg'>
          {t('contact')}
        </Button>
      </div>
      <div className='relative w-full flex flex-col items-center lg:items-start'>
        <PresentationPhoto />
      </div>
    </section>
  );
};

export default PresentationSection;
