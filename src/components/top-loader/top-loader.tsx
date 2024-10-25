'use client';

import React, { useEffect, useState } from 'react';
import NextTopLoader from 'nextjs-toploader';
import { useTheme } from 'next-themes';
import { palette } from '@/theme/palette';

const TopLoaderClient: React.FC = () => {
  const { theme } = useTheme();
  return <NextTopLoader color={theme === 'dark' ? palette.primary[500] : palette.primary[400]} showSpinner={false} />;
};

const TopLoader: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) return <TopLoaderClient />;
  return <NextTopLoader color={palette.primary[500]} showSpinner={false} />;
};

export default TopLoader;
