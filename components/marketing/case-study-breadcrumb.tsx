import Link from 'next/link';

export function CaseStudyBreadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label='Breadcrumb' className='mb-8'>
      <ol className='flex flex-wrap items-center gap-2 text-sm text-muted-foreground'>
        <li>
          <Link
            href='/id'
            className='underline underline-offset-4 decoration-foreground/40 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
          >
            Beranda
          </Link>
        </li>
        <li aria-hidden='true'>→</li>
        <li>
          <Link
            href='/id/studi-kasus'
            className='underline underline-offset-4 decoration-foreground/40 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
          >
            Studi Kasus
          </Link>
        </li>
        <li aria-hidden='true'>→</li>
        <li aria-current='page' className='font-medium text-foreground'>
          {current}
        </li>
      </ol>
    </nav>
  );
}
