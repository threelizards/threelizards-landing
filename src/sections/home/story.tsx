/* eslint-disable @next/next/no-img-element */
import RateIcon from '@/assets/icons/images/rate.webp';
import { Caption1, Title } from '@/theme/typography';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { StaticImageData } from 'next/image';
import React from 'react';
import Image from 'next/image';

interface StoryProps {
  rate: number;
  name: string;
  story: string;
  avatar: StaticImageData;
}

const Story: React.FC<StoryProps> = ({ rate, name, story, avatar }) => {
  return (
    <Card
      classNames={{
        base: 'p-8 max-w-80 h-[376px] flex-[0_0_auto]',
        header: 'gap-2 px-0 pt-0',
        body: 'opacity-60 px-0',
        footer: 'gap-2 px-0 pb-0'
      }}
      shadow='sm'>
      <CardHeader>
        <Image src={RateIcon} alt='rate' width={32} height={32} />
        <Title>{rate.toFixed(1)}</Title>
      </CardHeader>
      <Divider />
      <CardBody>{story}</CardBody>
      <CardFooter>
        <img src={avatar.src} width={32} height={32} alt='avatar' />
        <Caption1>{name}</Caption1>
      </CardFooter>
    </Card>
  );
};

export default Story;
