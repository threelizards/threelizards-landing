'use server';

import { cookies } from 'next/headers';
import { cookieI18Name, languages } from './settings';
import { getNextYear } from './utils';

export async function updateCookieLanguage(lng: string) {
  if (languages.includes(lng)) {
    cookies().set(cookieI18Name, lng, { expires: getNextYear() });
  }
}
