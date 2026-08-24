import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const capabilityAreas = [
  'Custom Software',
  'Enterprise Systems',
  'AI & Automation',
  'Digital Commerce',
  'Digital Platforms',
  'IoT & Integration',
];

export function IndonesianHomepageContent() {
  return (
    <article>
      <section className='relative mx-auto max-w-[80rem] px-6 pb-16 pt-32 text-center md:px-8 md:pb-20'>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-x-0 top-0 h-[28rem] overflow-hidden sm:h-[32rem]'
        >
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_28%_28%,rgba(255,130,92,0.18),transparent_28%),radial-gradient(circle_at_72%_38%,rgba(118,225,255,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_45%)]' />
          <div className='pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent' />
        </div>

        <div className='relative z-10 mx-auto max-w-5xl pt-16 sm:pt-20'>
          <h1 className='overflow-visible bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-4xl font-medium leading-[1.15] tracking-tighter text-transparent text-balance sm:text-5xl md:text-6xl lg:text-7xl'>
            Mengubah Kompleksitas
            <br className='hidden md:block' />
            Menjadi Sistem yang Bekerja.
          </h1>
          <p className='mx-auto mb-10 max-w-3xl text-lg tracking-tight text-gray-400 md:text-xl text-balance'>
            Kognifx adalah software house dan technology partner berbasis AI
            yang membangun software custom, sistem enterprise, automation, AI
            agent, serta solusi IoT sesuai kebutuhan bisnis.
          </p>

          <div className='flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4'>
            <Link
              href='/id/kontak'
              className={cn(buttonVariants({ size: 'lg' }), 'rounded-full px-6')}
            >
              Konsultasikan Kebutuhan Anda
            </Link>
            <Link
              href='/id/solusi'
              className={cn(
                buttonVariants({ size: 'lg', variant: 'outline' }),
                'rounded-full px-6'
              )}
            >
              Lihat Solusi
            </Link>
          </div>
        </div>
      </section>

      <div className='mx-auto w-full max-w-screen-xl px-6 py-16 md:px-8 lg:py-20'>
        <section className='border-t border-border/60 pt-12'>
          <h2 className='max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl'>
            Software yang Dibangun Berdasarkan Masalah, Bukan Template.
          </h2>
          <p className='mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground'>
            Kognifx merancang dan membangun sistem berdasarkan kebutuhan
            operasional yang sebenarnya. Solusinya bisa berupa custom software,
            sistem enterprise, AI & automation, digital commerce, digital
            platforms, hingga IoT & integration, dipilih karena sesuai masalah,
            bukan karena menjadi penawaran bawaan.
          </p>
          <ul className='mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3'>
            {capabilityAreas.map((area) => (
              <li
                key={area}
                className='rounded-md border border-border/60 px-3 py-2 text-sm text-foreground/90'
              >
                {area}
              </li>
            ))}
          </ul>
          <Link
            href='/id/solusi'
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'mt-8 inline-flex rounded-full'
            )}
          >
            Lihat Semua Solusi
          </Link>
        </section>

        <section className='mt-16 border-t border-border/60 pt-12'>
          <h2 className='max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl'>
            AI Bukan Sekadar Tambahan.
          </h2>
          <p className='mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground'>
            Ketika memberi nilai praktis, AI dapat diintegrasikan ke dalam
            sistem yang dibangun Kognifx. Hal ini membantu mengurangi pekerjaan
            manual, memperjelas informasi, dan mendukung keputusan yang lebih
            baik.
          </p>
          <p className='mt-4 max-w-3xl leading-relaxed text-muted-foreground'>
            Penerapannya dapat mencakup AI assistant, AI agent, intelligent
            workflow, document intelligence, decision support, dan
            automation, disesuaikan dengan konteks, bukan ditambahkan sebagai
            lapisan marketing.
          </p>
        </section>

        <section className='mt-16 border-t border-border/60 pt-12'>
          <h2 className='max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl'>
            Mulai dari Masalahnya.
          </h2>
          <p className='mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground'>
            Kadang bisnis membutuhkan website. Kadang ERP. Kadang automation
            atau IoT. Kadang tidak ada produk siap pakai yang benar-benar
            cocok dengan masalah yang dihadapi.
          </p>
          <p className='mt-4 max-w-3xl leading-relaxed text-muted-foreground'>
            Kognifx memulai dari pemahaman dan penyusunan masalah sebelum
            membangun sistem yang tepat. Pelajari pendekatan kami di halaman{' '}
            <Link
              href='/id/tentang'
              className='text-foreground underline underline-offset-4 decoration-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
            >
              Tentang
            </Link>
            , atau{' '}
            <Link
              href='/id/kontak'
              className='text-foreground underline underline-offset-4 decoration-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
            >
              konsultasikan kebutuhan Anda
            </Link>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
