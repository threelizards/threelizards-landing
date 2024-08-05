import React from 'react';
import LanguageSwitcher from '../language-switcher/language-switcher';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import Logo from '@/assets/logo/logo.webp';
import { H3 } from '@/theme/typography';
import { ThemeSwitcher } from '../theme-switcher/theme-switcher';
import { Button } from '@nextui-org/button';
import { translationServer } from '@/i18n';
import { Link } from '@nextui-org/link';
import { routes } from '@/lib/routes';
import OptionsDrawer from '../drawner/drawner';
import Image from 'next/image';

const Header = async () => {
  const { t } = await translationServer('general');
  return (
    <Navbar maxWidth='full' className=''>
      <NavbarBrand className='gap-2'>
        <Image src={Logo} alt='Logo' quality={100} className='w-12 md:w-14' />
        <H3>Three Lizards</H3>
      </NavbarBrand>
      <NavbarContent justify='end' className='hidden sm:flex'>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Button color='primary' variant='ghost' as={Link} href={routes.contact_us}>
            {t('contact')}
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end' className='flex sm:hidden'>
        <NavbarItem>
          <OptionsDrawer />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
