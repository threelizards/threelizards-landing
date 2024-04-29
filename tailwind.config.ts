import { nextui } from '@nextui-org/react';
import { palette } from './src/theme/palette';
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      textShadow: {
        sm: '0 0 10px rgba(0, 0, 0, 0.5)',
        DEFAULT: '0 0 10px rgba(0, 0, 0, 0.7)',
        lg: '0 0 10px rgba(0, 0, 0, 0.9)'
      },
      colors: palette
    }
  },
  darkMode: 'class',
  plugins: [
    nextui(),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          textShadow: (value) => ({
            textShadow: value
          })
        },
        { values: theme('textShadow') }
      );
    })
  ]
};
export default config;
