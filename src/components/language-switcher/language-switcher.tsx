'use client';

import React from 'react';
import { useI18NContext } from '@/i18n/context';
import { languageObjects } from '@/i18n/settings';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown';
import { Avatar } from '@nextui-org/avatar';
import { LanguageOptions } from '@/i18n/types';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useI18NContext();
  return (
    <Dropdown placement='bottom' classNames={{ content: 'bg-transparent min-w-min' }}>
      <DropdownTrigger>
        <Avatar
          size='sm'
          isBordered
          as='button'
          className='transition-transform mr-8'
          fallback={language}
          src={languageObjects.find(({ code }) => code === language)?.flag.src}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label='Languages' variant='flat' onAction={(key) => changeLanguage(key as LanguageOptions)}>
        {languageObjects
          .filter(({ code }) => code !== language)
          .map(({ code, flag }) => (
            <DropdownItem key={code} value={code} textValue={code}>
              <Avatar isBordered size='sm' fallback={code} src={flag.src} className='m-1' />
            </DropdownItem>
          ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LanguageSwitcher;
