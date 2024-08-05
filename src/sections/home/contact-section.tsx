import { translationServer } from '@/i18n';
import { H3, Subtitle } from '@/theme/typography';
import { Button } from '@nextui-org/button';
import React from 'react';
import eclipse from '@/assets/images/eclipse.webp';
import { routes } from '@/lib/routes';
import { Link } from '@nextui-org/link';

const ContactSection = async () => {
  const { t } = await translationServer('contact-section');

  return (
    <section
      className='relative bg-secondary max-w-7xl px-10 py-14 my-10 mx-8 rounded-lg shadow-md text-white text-center overflow-hidden'
      style={{
        backgroundImage: `url(${eclipse.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      <div className='relative z-10 bg-opacity-75 px-4 py-6'>
        <H3 className='text-xl mb-2'>{t('title')}</H3>
        <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20'>
          <Subtitle className='mb-4'>{t('description')}</Subtitle>
        </div>
        <Button
          variant='ghost'
          className='max-w-40 mx-auto mt-4 text-white border-white'
          as={Link}
          href={routes.contact_us}>
          {t('contact')}
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
