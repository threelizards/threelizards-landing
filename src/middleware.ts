import { getNextYear } from './i18n/utils';
import acceptLanguage from 'accept-language';
import { NextRequest, NextResponse } from 'next/server';
import { fallbackLng, languages, cookieI18Name, i18nSearchParamName } from '@/i18n/settings';

acceptLanguage.languages(languages);

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
};

export function middleware(req: NextRequest) {
  const searchParams = new URL(req.url).searchParams;
  const paramLng = searchParams.get(i18nSearchParamName);

  const lng = paramLng || acceptLanguage.get(req.cookies.get(cookieI18Name)?.value) || fallbackLng;

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-url', req.url);
  const response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });

  response.cookies.set(cookieI18Name, lng, {
    expires: getNextYear()
  });
  return response;
}
