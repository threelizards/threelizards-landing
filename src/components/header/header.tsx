import React from 'react';
import LanguageSwitcher from '../language-switcher/language-switcher';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import Logo from '@/assets/logo/logo-no-bg.png';
import { H3 } from '@/theme/typography';
import { Image } from '@nextui-org/image';

const Header = () => {
  return (
    <Navbar maxWidth='full' className=''>
      <NavbarBrand className='gap-2'>
        <Image src={Logo.src} alt='Logo' width={64} height={64} />
        <H3>Three Lizards</H3>
      </NavbarBrand>
      <NavbarContent justify='end'>
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
