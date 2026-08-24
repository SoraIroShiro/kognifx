import { getConsultationWhatsAppUrl } from '@/lib/contact-channels';
import type { Locale } from '@/lib/language-routes';
import type { ReactNode } from 'react';

export function WhatsAppConsultationLink({
  locale,
  className,
  children,
}: {
  locale: Locale;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={getConsultationWhatsAppUrl(locale)}
      target='_blank'
      rel='noopener noreferrer'
      data-conversion='whatsapp-consultation'
      className={className}
    >
      {children}
    </a>
  );
}
