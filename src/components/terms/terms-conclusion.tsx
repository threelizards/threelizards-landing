import { translationServer } from '@/i18n';
import { H4, P, Subtitle2 } from '@/theme/typography';
import React from 'react';
import { routes } from '@/lib/routes';
import { email, phoneContact } from '@/lib/config';
import { Link } from '@nextui-org/link';

const TermsConclusion = async () => {
  const { t } = await translationServer('terms-conclusion');
  return (
    <div>
      <div className='mb-10'>
        <H4 className='text-secondary-500 mb-2'>{t('policy')}</H4>
        <P>
          {t('policy_introduction')}{' '}
          <Link href={routes.policy} className='font-normal text-xs md:text-sm lg:text-base'>
            {t('policy_title')}
          </Link>{' '}
          {t('policy_development')}
        </P>
      </div>

      <div className='mb-10'>
        <H4 className='text-secondary-500 mb-2'>{t('applicable_law')}</H4>
        <P>{t('applicable_law_description')}</P>
      </div>

      <div className='mb-10'>
        <H4 className='text-secondary-500 mb-2'>{t('contact')}</H4>
        <P>{t('contact_introduction')}</P>
        <ul className='list-disc ml-5'>
          <li className='font-normal text-xs md:text-sm lg:text-base'>
            <strong>{t('contact_email')}</strong>{' '}
            <Link href={`mailto:${email}`} className='font-normal text-xs md:text-sm lg:text-base'>
              {email}
            </Link>
          </li>
          <li className='font-normal text-xs md:text-sm lg:text-base'>
            <strong>{t('contact_phone')}</strong> {phoneContact}
          </li>
        </ul>
      </div>
      <Subtitle2 className='mb-6 italic'>{t('update')}</Subtitle2>
    </div>
  );
};
export default TermsConclusion;
