import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Inter } from 'next/font/google';
import acceptLanguage from 'accept-language';
import { I18NProvider } from '@/i18n/context';
import AppLayout from '@/sections/app/app-layout';
import { cookieI18Name, fallbackLng, languages } from '@/i18n/settings';
import NextUIWithRouterProvider from '@/nextui/nextui-with-router-provider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Three Lizards',
  description: 'Your definitive web solution'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  acceptLanguage.languages(languages);
  const lng = acceptLanguage.get(cookies().get(cookieI18Name)?.value) || fallbackLng;
  return (
    <html lang={lng}>
      <body className={inter.className}>
        <I18NProvider {...{ lng }}>
          <NextUIWithRouterProvider>
            <AppLayout>{children}</AppLayout>
          </NextUIWithRouterProvider>
        </I18NProvider>
      </body>
    </html>
  );
}
