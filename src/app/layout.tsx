import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppLayout from '@/sections/app/app-layout';
import acceptLanguage from 'accept-language';
import { cookies } from 'next/headers';
import { I18NProvider } from '@/i18n/context';
import { cookieI18Name, fallbackLng, languages } from '@/i18n/settings';

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
    <html lang='en'>
      <body className={inter.className}>
        <I18NProvider {...{ lng }}>
          <AppLayout>{children}</AppLayout>
        </I18NProvider>
      </body>
    </html>
  );
}
