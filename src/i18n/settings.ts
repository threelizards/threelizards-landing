import enFlag from '@/assets/flags/us.svg';
import esFlag from '@/assets/flags/es.webp';
import { NextImageImport } from '@/types/utils';
import { LanguageOptions } from './types';

export const languageObjects = [
  {
    code: 'en',
    flag: enFlag as NextImageImport
  },
  {
    code: 'es',
    flag: esFlag as NextImageImport
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
