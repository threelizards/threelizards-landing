import { H2, H5 } from '@/theme/typography';
import React from 'react';
import Service from './service';
import { useTranslationServer } from '@/i18n';
import { WebIcon } from '@/assets/icons/components/web-icon';
import { HiOutlineChartPie, HiOutlineCpuChip, HiOutlineEye, HiArrowsPointingOut } from 'react-icons/hi2';
import { EditIcon } from '@/assets/icons/components/edit-icon';

const OurServicesSection = async () => {
  const { t } = await useTranslationServer('our-services-section');
  return (
    <section className='flex flex-col gap-12 items-center px-8 my-10 max-w-7xl'>
      <div className='flex flex-col gap-2 text-center max-w-2xl'>
        <H2>{t('title')}</H2>
        <H5>{t('subtitle')}</H5>
      </div>
      <div className='grid grid-cols-3 [&>div]:border [&>div]:border-solid [&>div]:border-[rgba(0,0,0,0.1)] [&>div:nth-child(3n+1)]:border-l-0 [&>div:nth-child(3n)]:border-r-0 [&>div:nth-child(-n+3)]:border-t-0 [&>div:nth-last-child(-n+3)]:border-b-0'>
        <Service icon={<WebIcon />} title={t('web_dev')} subtitle={t('web_dev_info')} />
        <Service icon={<HiOutlineChartPie size={32} />} title={t('web_commerce')} subtitle={t('web_commerce_info')} />
        <Service
          icon={<HiOutlineCpuChip size={32} />}
          title={t('web_maintenance')}
          subtitle={t('web_maintenance_info')}
        />
        <Service icon={<HiOutlineEye size={32} />} title={t('seo')} subtitle={t('seo_info')} />
        <Service icon={<EditIcon />} title={t('content_management')} subtitle={t('content_management_info')} />
        <Service
          icon={<HiArrowsPointingOut size={32} />}
          title={t('responsive_design')}
          subtitle={t('responsive_design_info')}
        />
      </div>
    </section>
  );
};

export default OurServicesSection;
