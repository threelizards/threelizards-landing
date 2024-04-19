'use client';

import { MoonIcon } from '@/assets/icons/components/moon-icon';
import { SunIcon } from '@/assets/icons/components/sun-icon';
import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Switch
        color='primary'
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        onValueChange={(value) => setTheme(value ? 'dark' : 'light')}
        isSelected={theme === 'dark'}
      />
    </div>
  );
}
