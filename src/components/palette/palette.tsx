import React from 'react';
import { PaletteProps } from './types';
import clsx from 'clsx';
import { getRelativeLuminance } from '@/theme/utils';

const Palette: React.FC<PaletteProps> = ({ colors }) => {
  return (
    <div className='flex flex-col'>
      {Object.entries(colors).map(([key, color]) => (
        <span
          key={key}
          style={{ backgroundColor: color }}
          className={clsx('p-2', {
            'text-black': getRelativeLuminance(color) > 0.5,
            'text-white': getRelativeLuminance(color) <= 0.5
          })}>
          {key} {color}
        </span>
      ))}
    </div>
  );
};

export default Palette;
