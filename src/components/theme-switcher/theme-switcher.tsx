'use client';

import { MoonIcon } from '@/assets/icons/components/moon-icon';
import { SunIcon } from '@/assets/icons/components/sun-icon';
import { useThemeContext } from '@/theme/context/theme-context';
import { Switch } from '@nextui-org/switch';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeSwitcher: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();
  const { theme, setTheme: setThemeContext } = useThemeContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChangeTheme = (value: string) => {
    setTheme(value);
    setThemeContext(value);
  };

  if (!mounted) return null;

  return (
    <div>
      <Switch
        color='primary'
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        onValueChange={(value) => handleChangeTheme(value ? 'dark' : 'light')}
        isSelected={theme === 'dark'}
      />
    </div>
  );
};
