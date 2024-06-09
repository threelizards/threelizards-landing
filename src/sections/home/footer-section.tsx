import Social from '@/components/social/social';
import { useTranslationServer } from '@/i18n';
import { routes } from '@/lib/routes';
import { H5 } from '@/theme/typography';
import { Link } from '@nextui-org/link';
import React from 'react';

const FooterSection = async () => {
  const { t } = await useTranslationServer('footer-section');
  return (
    <footer className='w-full p-4 max-w-7xl '>
      <div className='justify-center lg:items-center lg:flex lg:justify-between'>
        <Social />
        <div className='mt-4 text-center gap-x-5 lg:flex-row lg:mt-4 lg:text-center lg:flex lg:justify-between md:flex-row md:mt-4 md:text-center md:flex md:justify-between'>
          <div>
            <H5 className='mb-2 text-zinc-500'>{t('rights')}</H5>
          </div>
          <div className='flex justify-center flex-col items-center lg:flex-row lg:space-x-4 md:flex md:flex-row md:space-x-4'>
            <H5 className='mb-2 text-zinc-500'>
              <Link href={routes.terms}>{t('terms')}</Link>
            </H5>
            <H5 className='mb-2 text-zinc-500'>
              <Link href={routes.policy}>{t('policy')}</Link>
            </H5>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterSection;
