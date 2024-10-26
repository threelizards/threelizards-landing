import React from 'react';
import { translationServer } from '@/i18n';
import { IAccordionItem } from '../accordion/types';
import AccordionClient from '../accordion/accordion-client';

const FAQList: React.FC = async () => {
  const { t } = await translationServer('faq-section');

  const items: IAccordionItem[] = [
    { title: t('offer'), text: t('offer_answer') },
    { title: t('custom_solutions'), text: t('custom_solutions_answer') },
    { title: t('how_long'), text: t('how_long_answer') },
    { title: t('update_existing_website'), text: t('update_existing_website_answer') },
    { title: t('support'), text: t('support_answer') },
    { title: t('how_much'), text: t('how_much_answer') }
  ];

  return (
    <div className='max-w-2xl lg:w-2/3'>
      <AccordionClient items={items} />
    </div>
  );
};

export default FAQList;
