'use client';

import { Spinner } from '@nextui-org/react';
import React from 'react';

const Loading = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center fixed top-0 left-0 backdrop-blur-sm'>
      <Spinner />
    </div>
  );
};

export default Loading;
