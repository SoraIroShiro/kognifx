import HeroSection from '@/components/landing/hero-section';
import { HomepageSeoSections } from '@/components/landing/homepage-seo-sections';
import { Testimoni } from '@/components/landing/marque-cs';
import FAQPage from '@/components/landing/sesi-faq';
import SideUnik from '@/components/landing/side-content';
import { HomepageJsonLd } from '@/components/structured-data/homepage-json-ld';
import { createMarketingMetadata } from '@/lib/page-metadata';
import { seoDefaults } from '@/lib/seo';
import dynamic from 'next/dynamic';

const Particles = dynamic(() => import('@/components/magicui/particles'), {
  ssr: false,
});

export const metadata = createMarketingMetadata({
  path: '/',
  title: seoDefaults.title,
  description: seoDefaults.description,
});

export default async function Page() {
  return (
    <>
      <HomepageJsonLd />
      <HeroSection />
      <SideUnik />
      <HomepageSeoSections />
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
    </>
  );
}
