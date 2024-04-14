import { HEADER_HEIGHT } from '@/components/header/config';
import Header from '@/components/header/header';
import { LayoutBaseProps } from '@/types/utils';
import React from 'react';

const AppLayout: React.FC<LayoutBaseProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ marginTop: HEADER_HEIGHT }}>{children}</main>
    </>
  );
};

export default AppLayout;
