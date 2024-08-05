import React from 'react';
import { H3 } from '@/theme/typography';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import ContactUsFormContainer from '@/sections/contact-us/contact-us-form-container';
import { translationServer } from '@/i18n';
import { IP_API, fallbackCountry } from '@/lib/config';
import { GeoData } from '@/types/utils';
import { getClientIp } from '@/lib/utils';

async function fetchCountryCode() {
  try {
    const clientIp = getClientIp();
    const res = await fetch(`${IP_API}/${clientIp}/json/`);
    if (!res.ok) throw new Error('Failed to fetch country');
    const data: GeoData = await res.json();
    return data.country || fallbackCountry;
  } catch (error) {
    console.error('Error fetching country:', error);
    return fallbackCountry;
  }
}

const ContactUsPage = async () => {
  const { t } = await translationServer('contact-us');
  const initialCountry = await fetchCountryCode();
  return (
    <div className='flex justify-center p-8'>
      <Card className='w-full max-w-2xl'>
        <CardHeader className='justify-center'>
          <H3>{t('title')}</H3>
        </CardHeader>
        <CardBody className='items-center'>
          <ContactUsFormContainer initialCountry={initialCountry} />
        </CardBody>
      </Card>
    </div>
  );
};

export default ContactUsPage;
