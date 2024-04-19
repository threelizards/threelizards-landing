'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { LayoutBaseProps } from '@/types/utils';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const NextUIWithRouterProvider: React.FC<LayoutBaseProps> = ({ children }) => {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute='class' defaultTheme='dark'>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default NextUIWithRouterProvider;
