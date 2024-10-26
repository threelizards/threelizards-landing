'use client';

import { useThemeContext } from '@/theme/context/theme-context';
import { LayoutBaseProps } from '@/types/utils';
import React from 'react';
import { ToastContainer as RootToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContainer: React.FC<LayoutBaseProps> = ({ children }) => {
  const { theme } = useThemeContext();
  return (
    <>
      {children}
      <RootToastContainer position='bottom-right' theme={theme} />
    </>
  );
};

export default ToastContainer;
