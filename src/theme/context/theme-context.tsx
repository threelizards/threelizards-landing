'use client';

import { useContext, createContext } from 'react';
import { ThemeProviderProps } from '../types';

// ----------------------------------------------------------------------

export const ThemeContext = createContext({} as ThemeProviderProps);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useI18NContext must be use inside I18NProvider');

  return context;
};
