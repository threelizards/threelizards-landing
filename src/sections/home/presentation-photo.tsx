/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import girlPhoto from '@/assets/images/sexy-girl.webp';
import girlPhotoDark from '@/assets/images/sexy-girl-dark.webp';
import { useThemeContext } from '@/theme/context/theme-context';

const PresentationPhoto: React.FC = () => {
  const { theme } = useThemeContext();
  return <img src={theme === 'dark' ? girlPhotoDark.src : girlPhoto.src} alt='Worker girl' />;
};

export default PresentationPhoto;
