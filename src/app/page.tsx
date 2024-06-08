import OurServicesSection from '@/sections/home/our-services-section';
import PresentationSection from '@/sections/home/presentation-section';
import Section2 from '@/sections/home/section-2';
import InformationSection from '@/sections/home/information-section';
import FooterSection from '@/sections/home/footer-section';
import ContactSection from '@/sections/home/contact-section';

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <PresentationSection />
      <OurServicesSection />
      <Section2 />
      <Section2 />
      <ContactSection />
      <InformationSection />
      <FooterSection />
    </div>
  );
}
