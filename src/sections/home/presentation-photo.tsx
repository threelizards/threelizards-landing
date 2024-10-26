'use client';

import React from 'react';
import girlPhoto from '@/assets/images/sexy-girl.webp';
import girlPhotoDark from '@/assets/images/sexy-girl-dark.webp';
import Image from 'next/image';
import { useThemeContext } from '@/theme/context/theme-context';

const PresentationPhoto: React.FC = () => {
  const { theme } = useThemeContext();
  return <Image src={theme === 'dark' ? girlPhotoDark : girlPhoto} alt='Worker girl' quality={100} />;
};

export default PresentationPhoto;
