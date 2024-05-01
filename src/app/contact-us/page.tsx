import React from 'react';
import { H3 } from '@/theme/typography';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import ContactUsFormContainer from '@/sections/contact-us/contact-us-form-container';
import { useTranslationServer } from '@/i18n';

const ContactUsPage = async () => {
  const { t } = await useTranslationServer('contact-us');
  return (
    <div className='flex justify-center p-8'>
      <Card className='w-full max-w-2xl'>
        <CardHeader className='justify-center'>
          <H3>{t('title')}</H3>
        </CardHeader>
        <CardBody className='items-center'>
          <ContactUsFormContainer />
        </CardBody>
      </Card>
    </div>
  );
};

export default ContactUsPage;
