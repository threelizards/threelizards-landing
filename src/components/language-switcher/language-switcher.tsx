'use client';

import { useI18NContext } from '@/i18n/context';
import { languages } from '@/i18n/settings';
import React from 'react';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useI18NContext();

  const handleChangeLanguage: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    changeLanguage(e.target.value);
  };
  return (
    <div className='text-black'>
      <select title='lng' onChange={handleChangeLanguage} value={language}>
        {languages.map((l) => {
          return (
            <option key={l} value={l}>
              {l}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
