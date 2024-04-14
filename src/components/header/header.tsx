import React from 'react';
import { HEADER_HEIGHT } from './config';
import LanguageSwitcher from '../language-switcher/language-switcher';

const Header = () => {
  return (
    <header
      className='flex items-center p-4 w-full fixed top-0 bg-black justify-between'
      style={{ height: HEADER_HEIGHT }}>
      Header
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
