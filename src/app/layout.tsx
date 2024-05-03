import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import acceptLanguage from 'accept-language';
import { I18NProvider } from '@/i18n/context';
import AppLayout from '@/sections/app/app-layout';
import { languages } from '@/i18n/settings';
import NextUIWithRouterProvider from '@/nextui/nextui-with-router-provider';

import './globals.css';
import { getCurrentLanguage } from '@/i18n';

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
  const lng = getCurrentLanguage();
  return (
    <html lang={lng} suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen`}>
        <I18NProvider {...{ lng }}>
          <NextUIWithRouterProvider>
            <AppLayout>{children}</AppLayout>
          </NextUIWithRouterProvider>
        </I18NProvider>
      </body>
    </html>
  );
}
