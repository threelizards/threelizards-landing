'use client';

import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { Subtitle1 } from '@/theme/typography';
import { useTranslationClient } from '@/i18n/client';

const FAQList: React.FC = async () => {
  const { t } = await useTranslationClient('faq-section');
  return (
    <div className='max-w-2xl lg:w-2/3'>
      <Accordion className='border border-slate-200 rounded-md'>
        <AccordionItem className='text-center' title={t('offer')}>
          <Subtitle1 className='opacity-60'>{t('offer_answer')}</Subtitle1>
        </AccordionItem>
        <AccordionItem className='text-center' title={t('custom_Solutions')}>
          <Subtitle1 className='opacity-60'>{t('custom_solutions_answer')}</Subtitle1>
        </AccordionItem>
        <AccordionItem className='text-center' title={t('how_long')}>
          <Subtitle1 className='opacity-60'>{t('how_long_answer')}</Subtitle1>
        </AccordionItem>
        <AccordionItem className='text-center' title={t('update_existing_website')}>
          <Subtitle1 className='opacity-60'>{t('update_existing_website_answer')}</Subtitle1>
        </AccordionItem>
        <AccordionItem className='text-center' title={t('support')}>
          <Subtitle1 className='opacity-60'>{t('support_answer')}</Subtitle1>
        </AccordionItem>
        <AccordionItem className='text-center' title={t('how_much')}>
          <Subtitle1 className='opacity-60'>{t('how_much_answer')}</Subtitle1>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQList;
