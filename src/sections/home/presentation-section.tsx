import React from 'react';
import backgroundImageO from '@/assets/background/background.webp';
import Image from 'next/image';
import { H1, Caption1 } from '@/theme/typography';
import { useTranslationServer } from '@/i18n';
import { Button } from '@nextui-org/button';
import { palette } from '../../theme/palette';

const PresentationSection = async () => {
  const { t } = await useTranslationServer('presentation-section');

  return (
    <section className='relative md:h-screen md:w-screen lg:h-full lg:w-full'>
      <Image src={backgroundImageO} alt='Background Image' />
      <div className='absolute inset-0 flex flex-col justify-start items-center translate-y-10'>
        <H1 className='text-center textShadow-sm text-primary'>{t('title')}</H1>
        <span className='flex relative'>
          <Caption1 className='text-center '>
            <span style={{ color: palette.secondary.DEFAULT }}>{t('secondary-1')}</span>
            <span className='ml-1 text-secondary2'>{t('secondary-2')}</span>
          </Caption1>
        </span>
      </div>
      <div className='absolute inset-0 flex items-end justify-center'>
        <Button className='-translate-y-4 ' color='success' variant='ghost'>
          {t('contact')}
        </Button>
      </div>
    </section>
  );
};

export default PresentationSection;
