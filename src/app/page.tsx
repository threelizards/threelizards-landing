import PresentationSection from '@/sections/home/presentation-section';
import Section2 from '@/sections/home/section-2';
import Footer from '@/sections/home/footer';

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <PresentationSection />
      <Section2 />
      <Section2 />
      <Section2 />
      <Section2 />
      <Section2 />
      <Section2 />
      <Section2 />
      <Section2 />
      <Section2 />
      <Footer />
    </div>
  );
}
