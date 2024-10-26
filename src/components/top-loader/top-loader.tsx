'use client';

import React from 'react';
import NextTopLoader from 'nextjs-toploader';
import { palette } from '@/theme/palette';
import { useThemeContext } from '@/theme/context/theme-context';

const TopLoader: React.FC = () => {
  const { theme } = useThemeContext();
  return <NextTopLoader color={theme === 'dark' ? palette.primary[500] : palette.primary[400]} showSpinner={false} />;
};

export default TopLoader;
