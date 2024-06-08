import { H5, H3 } from '@/theme/typography';
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaPhoneAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';
import Logo from '@/assets/logo/logo-no-bg.png';
import Image from 'next/image';
import { useTranslationServer } from '@/i18n';

const Footer = async () => {
  const { t } = await useTranslationServer('footer-section');
  return (
    <footer className='w-full bg-white p-8'>
      <div className='flex flex-col flex-wrap items-center justify-center gap-y-6 gap-x-6 bg-white text-center '>
        <div className='flex items-center md:flex-row md:items-center justify-center'>
          <Image src={Logo.src} alt='Logo de Three Lizards' width={64} height={64} />
          <H3>Three Lizards</H3>
        </div>
        <div className='flex items-center space-x-4'>
          <FaPhoneAlt className='text-lg' />
          <span>+1 (813) 390-9392</span>
          <FaMapMarkerAlt className='text-lg ml-4' />
          <span>Tampa, FL</span>
        </div>
      </div>
      <hr className='my-8 border-stone-400' />
      <div className='grid-cols-2 justify-center lg:flex lg:justify-between'>
        <div className='flex justify-center gap-y-2 gap-x-4 lg:flex lg:flex-wrap lg:items-center lg:gap-y-2 lg:gap-x-4'>
          <a
            href='https://x.com/threelizards01?t=ma5-maRSm-BTB1Q_MzdsjQ&s=08'
            target='_blank'
            rel='noopener noreferrer'
            className='text-xl sm:text-2xl text-black'>
            <FaTwitter />
          </a>
          <a
            href='https://www.linkedin.com/in/pagina/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-xl sm:text-2xl text-black'>
            <FaLinkedinIn />
          </a>
          <a
            href='https://facebook.com/pagina'
            target='_blank'
            rel='noopener noreferrer'
            className='text-xl sm:text-2xl text-black'>
            <FaFacebookF />
          </a>
          <a
            href='https://instagram.com/pagina'
            target='_blank'
            rel='noopener noreferrer'
            className='text-xl sm:text-2xl text-black'>
            <FaInstagram />
          </a>
          <a
            href='https://github.com/threelizards'
            target='_blank'
            rel='noopener noreferrer'
            className='text-xl sm:text-2xl text-black'>
            <FaGithub />
          </a>
        </div>
        <div className='flex flex-col mt-4 text-center lg:flex-row lg:mt-4 lg:text-center'>
          <H5 className='mb-2 text-zinc-500'>{t('rights')}</H5>
          <H5 className='mb-2 text-zinc-500'>
            <a href='/terms' className='ml-10'>
              {t('terms')}
            </a>
          </H5>
          <H5 className='mb-2 text-zinc-500'>
            <a href='/privacy' className='ml-10'>
              {t('policy')}
            </a>
          </H5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
