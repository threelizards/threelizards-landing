import React from 'react';
import { HEADER_HEIGHT } from './config';

const Header = () => {
  return (
    <header className='flex items-center p-4 w-full fixed top-0 bg-black' style={{ height: HEADER_HEIGHT }}>
      Header
    </header>
  );
};

export default Header;
