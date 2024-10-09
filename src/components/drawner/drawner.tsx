'use client';

import { Button, Divider } from '@nextui-org/react';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import Logo from '@/assets/logo/logo.webp';
import LanguageSwitcher from '../language-switcher/language-switcher';
import { ThemeSwitcher } from '../theme-switcher/theme-switcher';
import { Caption1, H3 } from '@/theme/typography';
import Image from 'next/image';
import Link from 'next/link';
import { routes } from '@/lib/routes';
import { useTranslationClient } from '@/i18n/client';

const OptionsDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useTranslationClient();
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      if (isOpen) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'auto';
      }
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={clsx('z-20 fixed w-screen h-screen top-0 right-0 bg-[rgba(0,0,0,0.5)]', { hidden: !isOpen })}
        onClick={toggleDrawer}></div>
      <div
        className={clsx('z-30 fixed top-0 right-0 h-dvh transition-all bg-gray-50 dark:bg-gray-900 shadow-2xl', {
          'w-0': !isOpen,
          'w-80': isOpen
        })}>
        <div className={clsx('flex flex-col h-full', { hidden: !isOpen })}>
          <div className='flex gap-2 items-center p-4'>
            <Image src={Logo.src} alt='Logo' width={48} height={48} />
            <H3>Three Lizards</H3>
          </div>
          <Divider className='mb-4' />
          <div className='flex flex-col flex-1 justify-between gap-4 px-6 py-4'>
            <Button color='primary' variant='ghost' as={Link} href={routes.contact_us}>
              {t('contact')}
            </Button>
            <div className='flex gap-4'>
              <div className='flex gap-4 items-center'>
                <Caption1>{t('language')}</Caption1>
                <LanguageSwitcher />
              </div>
              <div className='flex gap-4 items-center'>
                <Caption1>{t('theme')}</Caption1>
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button isIconOnly variant='light' onClick={toggleDrawer} aria-label='Menu'>
        <HiBars3 size={32} />
      </Button>
    </>
  );
};

export default OptionsDrawer;
