import { translationServer } from '@/i18n';
import { P, H4 } from '@/theme/typography';
import React from 'react';

const TermsDevelopment = async () => {
  const { t } = await translationServer('terms-development');
  return (
    <div>
      <div className='mb-10'>
        <H4 className='text-secondary-500 mb-2'>{t('website_use')}</H4>
        <P>{t('website_use_introduction')}</P>
        <ul className='list-disc ml-5'>
          <li className='font-normal text-xs md:text-sm lg:text-base'>{t('website_use_1')}</li>
          <li className='font-normal text-xs md:text-sm lg:text-base'>{t('website_use_2')}</li>
          <li className='font-normal text-xs md:text-sm lg:text-base'>{t('website_use_3')}</li>
        </ul>
      </div>

      <div className='mb-10'>
        <H4 className='text-secondary-500 mb-2'>{t('sites_links')}</H4>
        <P>{t('sites_links_description')}</P>
      </div>

      <div className='mb-10'>
        <H4 className='text-secondary-500 mb-2'>{t('liability_limitation')}</H4>
        <P>{t('liability_limitation_introduction')}</P>
        <ul className='list-disc ml-5'>
          <li className='font-normal text-xs md:text-sm lg:text-base'>{t('liability_limitation_1')}</li>
          <li className='font-normal text-xs md:text-sm lg:text-base'>{t('liability_limitation_2')}</li>
          <li className='font-normal text-xs md:text-sm lg:text-base'>{t('liability_limitation_3')}</li>
        </ul>
      </div>

      <div className='mb-10'>
        <H4 className='text-secondary-500 mb-2'>{t('compensation')}</H4>
        <P>{t('compensation_description')}</P>
      </div>
    </div>
  );
};
export default TermsDevelopment;
