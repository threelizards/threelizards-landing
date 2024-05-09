'use client';

import { LayoutBaseProps } from '@/types/utils';
import { useTheme } from 'next-themes';
import React from 'react';
import { ToastContainer as RootToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContainer: React.FC<LayoutBaseProps> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <>
      {children}
      <RootToastContainer position='bottom-right' theme={theme} />
    </>
  );
};

export default ToastContainer;
