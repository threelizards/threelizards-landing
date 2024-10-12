import AuthGuard from '@/auth/guard/auth-guard';
import { LayoutBaseProps } from '@/types/utils';
import React from 'react';

const layout: React.FC<LayoutBaseProps> = ({ children }) => {
  return <AuthGuard>{children}</AuthGuard>;
};

export default layout;
