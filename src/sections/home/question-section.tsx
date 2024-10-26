import React, { Suspense } from 'react';
import FAQHeader from '@/components/faq/faq-header';
import FAQList from '@/components/faq/faq-list';
import FaqSkeleton from '@/components/faq/faq-skeleton';

const FAQSection = () => {
  return (
    <section className='flex flex-col lg:flex-row lg:justify-between p-8 gap-6 max-w-7xl w-full'>
      <FAQHeader />
      <Suspense fallback={<FaqSkeleton />}>
        <FAQList />
      </Suspense>
    </section>
  );
};

export default FAQSection;
