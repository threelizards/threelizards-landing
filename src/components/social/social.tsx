import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { socialLinks } from '@/lib/config';
import Link from 'next/link';

const Social = () => {
  return (
    <div className='flex justify-center gap-y-2 gap-x-4 lg:flex lg:flex-wrap lg:items-center lg:gap-y-2 lg:gap-x-4'>
      <Link
        aria-label='X'
        href={socialLinks.X}
        target='_blank'
        rel='noopener noreferrer'
        className='text-xl sm:text-2xl'>
        <FaTwitter />
      </Link>
      <Link
        aria-label='LinkedIn'
        href={socialLinks.LINKEDIN}
        target='_blank'
        rel='noopener noreferrer'
        className='text-xl sm:text-2xl'>
        <FaLinkedinIn />
      </Link>
      <Link
        aria-label='Facebook'
        href={socialLinks.FACEBOOK}
        target='_blank'
        rel='noopener noreferrer'
        className='text-xl sm:text-2xl'>
        <FaFacebookF />
      </Link>
      <Link
        aria-label='Instagram'
        href={socialLinks.INSTAGRAM}
        target='_blank'
        rel='noopener noreferrer'
        className='text-xl sm:text-2xl'>
        <FaInstagram />
      </Link>
      <Link
        aria-label='GitHub'
        href={socialLinks.GITHUB}
        target='_blank'
        rel='noopener noreferrer'
        className='text-xl sm:text-2xl'>
        <FaGithub />
      </Link>
    </div>
  );
};
export default Social;
