import HeroSection from '@/components/landing/hero-section';
import { HomepageSeoSections } from '@/components/landing/homepage-seo-sections';
import { Testimoni } from '@/components/landing/marque-cs';
import FAQPage from '@/components/landing/sesi-faq';
import { HomepageJsonLd } from '@/components/structured-data/homepage-json-ld';
import { createMarketingMetadata } from '@/lib/page-metadata';
import { seoDefaults } from '@/lib/seo';

export const metadata = createMarketingMetadata({
  path: '/en',
  title: seoDefaults.title,
  description: seoDefaults.description,
});

export default async function EnglishHomePage() {
  return (
    <>
      <HomepageJsonLd />
      <HeroSection />
      <HomepageSeoSections />
      <Testimoni />
      <FAQPage />
    </>
  );
}
