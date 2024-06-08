import React from 'react';
import girlPhoto from '@/assets/images/sexy-girl.webp';
import Image from 'next/image';
import { H1, Subtitle } from '@/theme/typography';
import { useTranslationServer } from '@/i18n';
import { Button } from '@nextui-org/button';

const PresentationSection = async () => {
  const { t } = await useTranslationServer('presentation-section');

  return (
    <section className='flex gap-24 max-w-7xl items-center px-8 my-10'>
      <div className='flex flex-col w-full gap-6'>
        <H1>
          {t('title')} <span className='text-secondary2'>{t('title2')}</span>
        </H1>
        <Subtitle>{t('subtitle')}</Subtitle>
        <Button color='success' variant='solid' className='max-w-40'>
          {t('contact')}
        </Button>
      </div>
      <div className='relative w-full'>
        <Image src={girlPhoto} alt='Worker girl' />
      </div>
    </section>
  );
};

export default PresentationSection;
