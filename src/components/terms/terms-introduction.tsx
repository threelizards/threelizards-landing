import { translationServer } from '@/i18n';
import { H4, P, H3, H2 } from '@/theme/typography';
import React from 'react';

const TermsIntroduction = async () => {
  const { t } = await translationServer('terms-introduction');
  return (
    <div>
      <H2 className='text-primary-500 mb-5'>{t('title')}</H2>

      <div className='mb-10'>
        <H4 className='text-secondary-500 mb-2'>{t('terms_accept')}</H4>
        <P>{t('terms_accept_description')}</P>
      </div>

      <div className='mb-10'>
        <H4 className='text-secondary-500 mb-2'>{t('terms_modifications')}</H4>
        <P>{t('terms_modifications_description')}</P>
      </div>

      <div className='mb-10'>
        <H4 className='text-secondary-500 mb-2'>{t('intellectual_property')}</H4>
        <P>{t('intellectual_property_description')}</P>
      </div>
    </div>
  );
};
export default TermsIntroduction;
