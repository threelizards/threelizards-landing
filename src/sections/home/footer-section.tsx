import Social from '@/components/social/social';
import { useTranslationServer } from '@/i18n';
import { routes } from '@/lib/routes';
import { H5 } from '@/theme/typography';
import { Link } from '@nextui-org/link';
import React from 'react';

const FooterSection = async () => {
  const { t } = await useTranslationServer('footer-section');
  return (
    <footer className='w-full p-4 '>
      <div className='grid-cols-2 justify-center lg:items-center lg:flex lg:justify-between'>
        <Social />
        <div className='flex flex-col mt-4 text-center lg:flex-row lg:mt-4 lg:text-center'>
          <H5 className='mb-2 text-zinc-500'>{t('rights')}</H5>
          <H5 className='mb-2 text-zinc-500'>
            <Link href={routes.terms} className='ml-10'>
              {t('terms')}
            </Link>
          </H5>
          <H5 className='mb-2 text-zinc-500'>
            <Link href={routes.policy} className='ml-10'>
              {t('policy')}
            </Link>
          </H5>
        </div>
      </div>
    </footer>
  );
};
export default FooterSection;
