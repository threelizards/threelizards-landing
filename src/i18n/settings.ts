import enFlag from '@/assets/flags/us.svg';
import esFlag from '@/assets/flags/es.webp';
import { NextImageImport } from '@/types/utils';
import { LanguageObject, LanguageOptions } from './types';
import countries from 'i18n-iso-countries';
import countriesEs from 'i18n-iso-countries/langs/es.json';
import countriesEN from 'i18n-iso-countries/langs/en.json';

countries.registerLocale(countriesEs);
countries.registerLocale(countriesEN);

export const languageObjects: LanguageObject[] = [
  {
    code: 'en',
    flag: enFlag as NextImageImport,
    countries: countries.getNames('en')
  },
  {
    code: 'es',
    flag: esFlag as NextImageImport,
    countries: countries.getNames('es')
  }
] as const;

export const fallbackLng = languageObjects[0].code;
export const languages = languageObjects.map(({ code }) => code);
export const defaultNS = 'general';
export const cookieI18Name = 'i18next';

export function getOptions(lng: LanguageOptions = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  };
}
