import { H3 } from '@/theme/typography';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from '@/assets/logo/logo.webp';
import { phoneContact, location } from '@/lib/config';
import Image from 'next/image';

const InformationSection = async () => {
  return (
    <section className='w-full pt-8'>
      <div className='flex flex-col flex-wrap items-center justify-center gap-6 text-center '>
        <div className='flex items-center md:flex-row md:items-center justify-center'>
          <Image src={Logo} alt='Logo de Three Lizards' className='w-12 md:w-14' quality={100} />
          <H3>Three Lizards</H3>
        </div>
        <div className='grid-cols space-y-2 sm:flex items-center justify-center'>
          <div className='flex space-x-2'>
            <FaPhoneAlt className='text-lg' />
            <span>{phoneContact}</span>
          </div>
          <div className='flex space-x-2'>
            <FaMapMarkerAlt className='text-lg ml-4' />
            <span>{location}</span>
          </div>
        </div>
      </div>
      <hr className='mt-6 border-stone-400' />
    </section>
  );
};

export default InformationSection;
