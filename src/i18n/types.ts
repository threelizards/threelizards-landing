import { languages } from './settings';

export interface I18NProviderProps {
  language: LanguageOptions;
  changeLanguage: (lng: LanguageOptions) => void;
}

export type LanguageOptions = (typeof languages)[number];
