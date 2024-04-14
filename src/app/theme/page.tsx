import Palette from '@/components/palette/palette';
import { palette } from '@/theme/palette';
import { H1, H2, H3, H4, P } from '@/theme/typography';
import React from 'react';

const ThemePage = () => {
  return (
    <div className='flex flex-col items-center w-full p-8 gap-8'>
      <H1 className='mb-8'>Theme</H1>
      <div>
        <H2 className='mb-4'>Palette</H2>
        <div className='flex gap-4'>
          <div className='flex flex-col gap-4'>
            <H3>Primary</H3>
            <Palette colors={palette.primary} />
          </div>
          <div className='flex flex-col gap-4'>
            <H3>Secondary</H3>
            <Palette colors={palette.secondary} />
          </div>
          <div className='flex flex-col gap-4'>
            <H3>Secondary 2</H3>
            <Palette colors={palette.secondary2} />
          </div>
          <div className='flex flex-col gap-4'>
            <H3>Gray</H3>
            <Palette colors={palette.gray} />
          </div>
        </div>
      </div>
      <div>
        <H2 className='mb-4'>Typography</H2>
        <div className='flex flex-col gap-4'>
          <H1>H1: Lorem ipsum dolor sit amet consectetur adipisicing elit.</H1>
          <H2>H2: Lorem ipsum dolor sit amet consectetur adipisicing elit.</H2>
          <H3>H3: Lorem ipsum dolor sit amet consectetur adipisicing elit.</H3>
          <H4>H4: Lorem ipsum dolor sit amet consectetur adipisicing elit.</H4>
          <P>P: Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
        </div>
      </div>
    </div>
  );
};

export default ThemePage;
