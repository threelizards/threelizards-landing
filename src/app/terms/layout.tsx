import { LayoutBaseProps } from '@/types/utils';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Three Lizards - Terms and Conditions',
  description: 'Terms and Conditions',
  keywords: ['terms', 'conditions']
};

const Layout: React.FC<LayoutBaseProps> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
