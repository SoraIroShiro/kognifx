import { SiteFooterNav } from '@/components/site-footer-nav';

export function SiteFooter() {
  return (
    <footer
      className='fixed bottom-0 left-0 w-full z-50 pointer-events-none'
      aria-label='Site footer'
    >
      <div className='mx-auto w-full max-w-screen-xl xl:pb-2'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-md py-4 px-8 gap-3 bg-white/80 dark:bg-black/60 backdrop-blur border-t border-neutral-200/30 dark:border-neutral-800/30'>
          <SiteFooterNav />
          <span className='text-[12px] text-gray-500 sm:text-center dark:text-gray-400'>
            © {new Date().getFullYear()}{' '}
            <span>Kognifx </span>
            All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
