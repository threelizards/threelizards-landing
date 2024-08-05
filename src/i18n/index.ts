import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { cookieI18Name, fallbackLng, getOptions, languages } from './settings';
import { cookies } from 'next/headers';
import acceptLanguage from 'accept-language';
import { LanguageOptions } from './types';

acceptLanguage.languages(languages);

export const initI18next = async (lng: LanguageOptions, ns?: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export const getCurrentLanguage = () => {
  let language = acceptLanguage.get(cookies().get(cookieI18Name)?.value);
  if (!language) language = fallbackLng;
  return language as LanguageOptions;
};

export async function translationServer(ns?: string, options: { keyPrefix?: string } = {}) {
  const lng = getCurrentLanguage();
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
    i18n: i18nextInstance
  };
}
