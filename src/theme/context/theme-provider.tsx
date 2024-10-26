'use client';

import React, { useEffect, useState } from 'react';
import { ThemeContext } from './theme-context';
import { LayoutBaseProps } from '@/types/utils';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { updateTheme } from '../actions';
import { fallbackTheme } from '../config';

interface CustomThemeProviderProps extends LayoutBaseProps {
  initialTheme: string;
}

const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    updateTheme(theme ?? fallbackTheme);
  }, [theme]);

  return (
    <NextThemesProvider attribute='class' defaultTheme={initialTheme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
    </NextThemesProvider>
  );
};

export default CustomThemeProvider;
