'use client';

import { getLocaleFromPathname } from '@/lib/marketing-navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiCustomerService2Fill } from 'react-icons/ri';

export function SiteFooterNav() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const contactHref = locale === 'id' ? '/id/kontak' : '/contact';
  const contactLabel = locale === 'id' ? 'Kontak' : 'Contact';

  return (
    <nav
      aria-label={locale === 'id' ? 'Tautan footer' : 'Footer links'}
      className='pointer-events-auto'
    >
      <ul className='flex space-x-5 sm:justify-center sm:mt-0'>
        <li>
          <Link
            href={contactHref}
            aria-label={contactLabel}
            className='text-gray-500 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
          >
            <RiCustomerService2Fill className='h-4 w-4' aria-hidden='true' />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
