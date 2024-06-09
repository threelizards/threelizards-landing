import { useTranslationServer } from '@/i18n';
import { H2, H4, H5, Subtitle } from '@/theme/typography';
import React from 'react';
import Story from './story';
import olivia from '@/assets/avatars/olivia.webp';
import james from '@/assets/avatars/james.webp';
import alexandra from '@/assets/avatars/alexandra.webp';
import { Card, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import manSmiling from '@/assets/images/man-smiling.webp';

const stories = [
  { name: 'olivia', pic: olivia, rate: 5 },
  { name: 'james', pic: james, rate: 4.9 },
  { name: 'alexandra', pic: alexandra, rate: 5 }
];

const CustomerStoriesSection = async () => {
  const { t } = await useTranslationServer('customer-stories-sections');
  return (
    <div className='flex flex-col gap-12 items-center px-8 my-10 w-full max-w-7xl'>
      <div className='flex flex-col gap-2 text-center '>
        <H2>{t('title')}</H2>
        <H5 className='max-w-2xl'>{t('subtitle')}</H5>
      </div>
      <div className='flex gap-8 w-full'>
        <Card className='min-w-[411px]' shadow='sm'>
          <CardHeader className='p-4 flex-col items-start absolute z-10 top-1 left-2 gap-4'>
            <div className='flex items-baseline'>
              <H2>4.9</H2>
              <H4 className='opacity-60'>/5.0</H4>
            </div>
            <Subtitle className='opacity-60 max-w-48'>{t('average')}</Subtitle>
          </CardHeader>
          <Image
            removeWrapper
            alt='Card background'
            className='absolute z-0 object-cover bottom-0'
            src={manSmiling.src}
          />
        </Card>
        <div className='flex gap-4 rounded-xl border border-solid border-[rgba(0,0,0,0.1)] p-6 overflow-auto'>
          {stories.map(({ name, pic, rate }) => (
            <Story
              avatar={pic}
              name={t(`stories.${name}.name`)}
              story={t(`stories.${name}.story`)}
              rate={rate}
              key={name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerStoriesSection;
