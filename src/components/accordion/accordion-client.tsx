'use client';

import { Accordion, AccordionItem } from '@nextui-org/react';
import React from 'react';
import { IAccordionItem } from './types';
import { Subtitle, Subtitle1 } from '@/theme/typography';

interface AccordionClientProps {
  items: IAccordionItem[];
}

const AccordionClient: React.FC<AccordionClientProps> = ({ items }) => {
  return (
    <Accordion className='!px-6 w-full border border-slate-200 rounded-md'>
      {items.map(({ text, title }, index) => (
        <AccordionItem key={index} className='text-start' title={<Subtitle>{title}</Subtitle>}>
          <Subtitle1 className='opacity-60'>{text}</Subtitle1>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionClient;
