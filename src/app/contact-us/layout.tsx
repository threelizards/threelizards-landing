import { LayoutBaseProps } from '@/types/utils';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Three Lizards - Contact us',
  description: 'Contact us for your idea or project',
  keywords: ['web', 'contact']
};

const Layout: React.FC<LayoutBaseProps> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
