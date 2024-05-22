import { NextImageImport } from '@/types/utils';
import { languages } from './settings';
import countries from 'i18n-iso-countries';

export interface I18NProviderProps {
  language: LanguageOptions;
  changeLanguage: (lng: LanguageOptions) => void;
  getLocales: () => LanguageObject;
}

export type LanguageOptions = (typeof languages)[number];

export interface LanguageObject {
  readonly code: string;
  readonly flag: NextImageImport;
  readonly countries: countries.LocalizedCountryNames<{
    select: 'official';
  }>;
}
