'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { NextUIProvider } from '@nextui-org/react';
import { LayoutBaseProps } from '@/types/utils';

const NextUIWithRouterProvider: React.FC<LayoutBaseProps> = ({ children }) => {
  const router = useRouter();
  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
};

export default NextUIWithRouterProvider;
