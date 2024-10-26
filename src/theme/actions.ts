'use server';

import { cookies } from 'next/headers';
import { cookieThemeName } from './config';
import { getNextYear } from '@/i18n/utils';

export async function updateTheme(theme: string) {
  if (cookies().get(cookieThemeName)?.value != theme) {
    cookies().set(cookieThemeName, theme, { expires: getNextYear() });
  }
}
