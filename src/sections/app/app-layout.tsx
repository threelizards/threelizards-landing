import React from 'react';
import Header from '@/components/header/header';
import { LayoutBaseProps } from '@/types/utils';

const AppLayout: React.FC<LayoutBaseProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default AppLayout;
