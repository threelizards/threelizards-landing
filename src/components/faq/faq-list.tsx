'use client';

import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { Subtitle, Subtitle1 } from '@/theme/typography';
import { useTranslationClient } from '@/i18n/client';

const FAQList: React.FC = () => {
  const { t } = useTranslationClient('faq-section');
  return (
    <div className='max-w-2xl lg:w-2/3'>
      <Accordion className='!px-6 w-full border border-slate-200 rounded-md'>
        <AccordionItem className='text-start' title={<Subtitle>{t('offer')}</Subtitle>}>
          <Subtitle1 className='opacity-60'>{t('offer_answer')}</Subtitle1>
        </AccordionItem>
        <AccordionItem className='text-start' title={<Subtitle>{t('custom_solutions')}</Subtitle>}>
          <Subtitle1 className='opacity-60'>{t('custom_solutions_answer')}</Subtitle1>
        </AccordionItem>
        <AccordionItem className='text-start' title={<Subtitle>{t('how_long')}</Subtitle>}>
          <Subtitle1 className='opacity-60'>{t('how_long_answer')}</Subtitle1>
        </AccordionItem>
        <AccordionItem className='text-start' title={<Subtitle>{t('update_existing_website')}</Subtitle>}>
          <Subtitle1 className='opacity-60'>{t('update_existing_website_answer')}</Subtitle1>
        </AccordionItem>
        <AccordionItem className='text-start' title={<Subtitle>{t('support')}</Subtitle>}>
          <Subtitle1 className='opacity-60'>{t('support_answer')}</Subtitle1>
        </AccordionItem>
        <AccordionItem className='text-start' title={<Subtitle>{t('how_much')}</Subtitle>}>
          <Subtitle1 className='opacity-60'>{t('how_much_answer')}</Subtitle1>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQList;
