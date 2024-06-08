import { Link } from '@nextui-org/link';
import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { socialLinks } from '@/lib/config';

const Social = () => {
  return (
    <div className='flex justify-center gap-y-2 gap-x-4 lg:flex lg:flex-wrap lg:items-center lg:gap-y-2 lg:gap-x-4'>
      <Link href={socialLinks.X} target='_blank' rel='noopener noreferrer' className='text-xl sm:text-2xl text-black'>
        <FaTwitter />
      </Link>
      <Link
        href={socialLinks.LINKEDIN}
        target='_blank'
        rel='noopener noreferrer'
        className='text-xl sm:text-2xl text-black'>
        <FaLinkedinIn />
      </Link>
      <Link
        href={socialLinks.FACEBOOK}
        target='_blank'
        rel='noopener noreferrer'
        className='text-xl sm:text-2xl text-black'>
        <FaFacebookF />
      </Link>
      <Link
        href={socialLinks.INSTAGRAM}
        target='_blank'
        rel='noopener noreferrer'
        className='text-xl sm:text-2xl text-black'>
        <FaInstagram />
      </Link>
      <Link
        href={socialLinks.GITHUB}
        target='_blank'
        rel='noopener noreferrer'
        className='text-xl sm:text-2xl text-black'>
        <FaGithub />
      </Link>
    </div>
  );
};
export default Social;
