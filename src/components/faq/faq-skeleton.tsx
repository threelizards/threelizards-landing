import { Card } from '@nextui-org/card';
import { Skeleton } from '@nextui-org/skeleton';
import React from 'react';

const FaqSkeleton: React.FC = () => {
  return (
    <div className='max-w-2xl lg:w-2/3'>
      <Card className='w-full space-y-5 p-4' radius='lg'>
        <div className='space-y-5'>
          <Skeleton className='w-full h-10 rounded-lg' />
          <Skeleton className='w-3/4 h-10 rounded-lg' />
          <Skeleton className='w-3/5 h-10 rounded-lg' />
          <Skeleton className='w-full h-10 rounded-lg' />
          <Skeleton className='w-3/5 h-10 rounded-lg' />
          <Skeleton className='w-full h-10 rounded-lg' />
        </div>
      </Card>
    </div>
  );
};

export default FaqSkeleton;
