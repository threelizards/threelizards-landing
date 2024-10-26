import { cookies } from 'next/headers';
import { cookieThemeName, fallbackTheme } from './config';

export const getThemeServer = () => {
  return cookies().get(cookieThemeName)?.value ?? fallbackTheme;
};
