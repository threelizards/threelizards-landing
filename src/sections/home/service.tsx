import { Caption, P } from '@/theme/typography';
import React from 'react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const Service: React.FC<ServiceProps> = ({ icon, title, subtitle }) => {
  return (
    <div className='flex flex-col gap-2 py-8 pl-8 pr-14'>
      <div className='bg-secondary2 p-3 rounded-xl w-fit text-white'>{icon}</div>
      <div className='flex flex-col gap-1'>
        <Caption>{title}</Caption>
        <P className='opacity-60'>{subtitle}</P>
      </div>
    </div>
  );
};

export default Service;
