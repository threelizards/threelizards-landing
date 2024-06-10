import React from 'react';
import TermsIntroduction from '@/components/terms/terms-introduction';
import TermsDevelopment from '@/components/terms/terms-development';
import TermsConclusion from '@/components/terms/terms-conclusion';

const Terms = async () => {
  return (
    <section className='p-6 max-w-7xl mx-auto'>
      <TermsIntroduction />
      <TermsDevelopment />
      <TermsConclusion />
    </section>
  );
};

export default Terms;
