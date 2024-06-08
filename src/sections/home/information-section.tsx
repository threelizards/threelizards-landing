import { H3 } from '@/theme/typography';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from '@/assets/logo/logo-no-bg.png';
import Image from 'next/image';
import { phoneContact, ubication } from '@/lib/config';

const InformationSection = async () => {
  return (
    <section className='w-full pt-8'>
      <div className='flex flex-col flex-wrap items-center justify-center gap-y-6 gap-x-6 bg-white text-center '>
        <div className='flex items-center md:flex-row md:items-center justify-center'>
          <Image src={Logo.src} alt='Logo de Three Lizards' width={64} height={64} />
          <H3>Three Lizards</H3>
        </div>
        <div className='flex items-center space-x-4'>
          <FaPhoneAlt className='text-lg' />
          <span>{phoneContact}</span>
          <FaMapMarkerAlt className='text-lg ml-4' />
          <span>{ubication}</span>
        </div>
      </div>
      <hr className='mt-6 border-stone-400' />
    </section>
  );
};

export default InformationSection;
