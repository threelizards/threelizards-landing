import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import acceptLanguage from 'accept-language';
import { I18NProvider } from '@/i18n/context';
import AppLayout from '@/sections/app/app-layout';
import { languages } from '@/i18n/settings';
import NextUIWithRouterProvider from '@/nextui/nextui-with-router-provider';

import './globals.css';
import { getCurrentLanguage, translationServer } from '@/i18n';
import ToastContainer from '@/components/toast/toast-container';
import GoogleTagManagerHead from '@/components/google/google-tag-manager-head';
import GoogleTagManagerBody from '@/components/google/google-tag-manager-body';
import { GOOGLE_TGM_ID } from '@/lib/config';
import { AuthProvider } from '@/auth/context';
import TopLoader from '@/components/top-loader/top-loader';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await translationServer('metadata');
  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      t('keywords.web'),
      t('keywords.development'),
      t('keywords.design'),
      t('keywords.company'),
      t('keywords.solutions'),
      t('keywords.website'),
      t('keywords.seo'),
      t('keywords.ecommerce'),
      t('keywords.E-commerce'),
      t('keywords.three'),
      t('keywords.lizard'),
      t('keywords.lizards'),
      t('keywords.threelizards'),
      t('keywords.three_lizards'),
      t('keywords.software_development'),
      t('keywords.software'),
      t('keywords.fast'),
      t('keywords.fastest'),
      t('keywords.clean'),
      t('keywords.code')
    ]
  };
}

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
        <AuthProvider>
          <I18NProvider {...{ lng }}>
            <NextUIWithRouterProvider>
              <ToastContainer>
                <TopLoader />
                <AppLayout>{children}</AppLayout>
              </ToastContainer>
            </NextUIWithRouterProvider>
          </I18NProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
