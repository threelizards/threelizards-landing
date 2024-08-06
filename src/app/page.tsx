import OurServicesSection from '@/sections/home/our-services-section';
import PresentationSection from '@/sections/home/presentation-section';
import InformationSection from '@/sections/home/information-section';
import FooterSection from '@/sections/home/footer-section';
import CustomerStoriesSection from '@/sections/home/customer-stories-section';
import ContactSection from '@/sections/home/contact-section';
import FAQSection from '@/sections/home/question-section';

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <PresentationSection />
      <OurServicesSection />
      <CustomerStoriesSection />
      <FAQSection />
      <ContactSection />
      <InformationSection />
      <FooterSection />
    </div>
  );
}
