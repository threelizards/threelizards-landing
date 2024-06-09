import React from 'react';
import FAQHeader from '@/components/faq/faq-header';
import FAQList from '@/components/faq/faq-list';

const FAQSection = () => {
  return (
    <section className='flex flex-col lg:flex-row lg:justify-between p-8 gap-6 max-w-7xl '>
      <FAQHeader />
      <FAQList />
    </section>
  );
};

export default FAQSection;
