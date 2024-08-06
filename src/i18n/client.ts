'use client';

import i18next, { KeyPrefix, Namespace } from 'i18next';
import { UseTranslationOptions, initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getOptions, languages } from './settings';
import { useI18NContext } from './context';

const runsOnServerSide = typeof window === 'undefined';

//
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator']
    },
    preload: runsOnServerSide ? languages : []
  });

export function useTranslationClient(ns?: string, options?: UseTranslationOptions<KeyPrefix<Namespace>>) {
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;
  const { language } = useI18NContext();
  if (i18n.resolvedLanguage !== language) i18n.changeLanguage(language);

  return ret;
}
