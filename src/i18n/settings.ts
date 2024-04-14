export const fallbackLng = 'en';
export const languages = [fallbackLng, 'es'];
export const defaultNS = 'general';
export const cookieI18Name = 'i18next';

export function getOptions(lng = fallbackLng, ns = defaultNS) {
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
