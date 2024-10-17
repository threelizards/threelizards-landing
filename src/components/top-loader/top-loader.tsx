'use client';

import React from 'react';
import NextTopLoader from 'nextjs-toploader';
import { useTheme } from 'next-themes';
import { palette } from '@/theme/palette';

const TopLoader: React.FC = () => {
  const { theme } = useTheme();
  return <NextTopLoader color={theme === 'dark' ? palette.primary[500] : palette.primary[400]} />;
};

export default TopLoader;
