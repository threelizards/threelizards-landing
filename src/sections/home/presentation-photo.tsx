'use client';

import React from 'react';
import girlPhoto from '@/assets/images/sexy-girl.webp';
import girlPhotoDark from '@/assets/images/sexy-girl-dark.webp';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const PresentationPhoto = () => {
  const { theme } = useTheme();
  return <Image src={theme === 'dark' ? girlPhotoDark : girlPhoto} alt='Worker girl' />;
};

export default PresentationPhoto;
