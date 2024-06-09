import React from 'react';
import LanguageSwitcher from '../language-switcher/language-switcher';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import Logo from '@/assets/logo/logo-no-bg.png';
import { H3 } from '@/theme/typography';
import { Image } from '@nextui-org/image';
import { ThemeSwitcher } from '../theme-switcher/theme-switcher';
import { Button } from '@nextui-org/button';
import { useTranslationServer } from '@/i18n';
import { Link } from '@nextui-org/link';
import { routes } from '@/lib/routes';

const Header = async () => {
  const { t } = await useTranslationServer('general');
  return (
    <Navbar maxWidth='full' className=''>
      <NavbarBrand className='gap-2'>
        <Image src={Logo.src} alt='Logo' width={64} height={64} />
        <H3>Three Lizards</H3>
      </NavbarBrand>
      <NavbarContent justify='end'>
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
    </Navbar>
  );
};

export default Header;
