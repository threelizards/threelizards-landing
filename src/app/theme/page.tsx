import Palette from '@/components/palette/palette';
import { useTranslationServer } from '@/i18n';
import { palette } from '@/theme/palette';
import { H1, H2, H3, H4, P } from '@/theme/typography';
import React from 'react';

const ThemePage = async () => {
  const { t } = await useTranslationServer('page-theme');
  return (
    <div className='flex flex-col items-center w-full p-8 gap-8'>
      <H1 className='mb-8'>{t('title')}</H1>
      <div>
        <H2 className='mb-4'>{t('palette')}</H2>
        <div className='flex gap-4'>
          <div className='flex flex-col gap-4'>
            <H3>{t('primary')}</H3>
            <Palette colors={palette.primary} />
          </div>
          <div className='flex flex-col gap-4'>
            <H3>{t('secondary')}</H3>
            <Palette colors={palette.secondary} />
          </div>
          <div className='flex flex-col gap-4'>
            <H3>{t('secondary-2')}</H3>
            <Palette colors={palette.secondary2} />
          </div>
          <div className='flex flex-col gap-4'>
            <H3>{t('gray')}</H3>
            <Palette colors={palette.gray} />
          </div>
        </div>
      </div>
      <div>
        <H2 className='mb-4'>{t('typography')}</H2>
        <div className='flex flex-col gap-4'>
          <H1>H1: Lorem ipsum dolor sit amet consectetur adipisicing elit.</H1>
          <H2>H2: Lorem ipsum dolor sit amet consectetur adipisicing elit.</H2>
          <H3>H3: Lorem ipsum dolor sit amet consectetur adipisicing elit.</H3>
          <H4>H4: Lorem ipsum dolor sit amet consectetur adipisicing elit.</H4>
          <P>P: Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
        </div>
      </div>
    </div>
  );
};

export default ThemePage;