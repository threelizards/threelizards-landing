'use client';

import { useCallback, useEffect, useState } from 'react';
import { I18NContext } from './i18n-context';
import { updateCookieLanguage } from '../actions';
import { languageObjects, languages } from '../settings';
import { LanguageObject, LanguageOptions } from '../types';

// ----------------------------------------------------------------------

type I18NProviderProps = {
  children: React.ReactNode;
  lng: LanguageOptions;
};

export function I18NProvider({ children, lng }: I18NProviderProps) {
  const [language, setLanguage] = useState(lng);

  const changeLanguage = useCallback((lng: LanguageOptions) => {
    if (languages.includes(lng)) setLanguage(lng);
  }, []);

  const getLocales = useCallback(() => {
    return languageObjects.find(({ code }) => code === language) as LanguageObject;
  }, [language]);

  useEffect(() => {
    updateCookieLanguage(language);
  }, [language]);

  return <I18NContext.Provider value={{ language, changeLanguage, getLocales }}>{children}</I18NContext.Provider>;
}
