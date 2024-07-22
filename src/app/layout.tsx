import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import acceptLanguage from 'accept-language';
import { I18NProvider } from '@/i18n/context';
import AppLayout from '@/sections/app/app-layout';
import { languages } from '@/i18n/settings';
import NextUIWithRouterProvider from '@/nextui/nextui-with-router-provider';

import './globals.css';
import { getCurrentLanguage } from '@/i18n';
import ToastContainer from '@/components/toast/toast-container';
import GoogleTagManagerHead from '@/components/google/google-tag-manager-head';
import GoogleTagManagerBody from '@/components/google/google-tag-manager-body';
import { GOOGLE_TGM_ID } from '@/lib/config';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});

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
      <head>
        <GoogleTagManagerHead gtmId={GOOGLE_TGM_ID} />
      </head>
      <body className={`${poppins.className} min-h-screen !overflow-x-hidden`}>
        <GoogleTagManagerBody gtmId={GOOGLE_TGM_ID} />
        <I18NProvider {...{ lng }}>
          <NextUIWithRouterProvider>
            <ToastContainer>
              <AppLayout>{children}</AppLayout>
            </ToastContainer>
          </NextUIWithRouterProvider>
        </I18NProvider>
      </body>
    </html>
  );
}
