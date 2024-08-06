'use client';

import { useContext, createContext } from 'react';
import { I18NProviderProps } from '../types';

// ----------------------------------------------------------------------

export const I18NContext = createContext({} as I18NProviderProps);

export const useI18NContext = () => {
  const context = useContext(I18NContext);

  if (!context) throw new Error('useI18NContext must be use inside I18NProvider');

  return context;
};
