import HeroSection from '@/components/landing/hero-section';
import { Testimoni } from '@/components/landing/marque-cs';
import FAQPage from '@/components/landing/sesi-faq';
import SideUnik from '@/components/landing/side-content';
import { SplineActivationProvider } from '@/lib/spline-activation';
import { HomepageJsonLd } from '@/components/structured-data/homepage-json-ld';
import dynamic from 'next/dynamic';

const Particles = dynamic(() => import('@/components/magicui/particles'), {
  ssr: false,
});

export default async function Page() {
  return (
    <SplineActivationProvider>
      <HomepageJsonLd />
      <HeroSection />
      <SideUnik />
      <Testimoni />
      <Particles
        className='absolute inset-0 -z-10'
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color={'#ffffff'}
      />
      <FAQPage />
    </SplineActivationProvider>
  );
}
