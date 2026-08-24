import type { Locale } from '@/lib/language-routes';

export const CONTACT_EMAIL = 'panparci.id@gmail.com';
export const CONTACT_WHATSAPP_DISPLAY = '+62 859-2735-1745';
export const CONTACT_WHATSAPP_NUMBER = '6285927351745';

export const CONSULTATION_WHATSAPP_MESSAGES = {
  id: 'Halo Kognifx, saya ingin konsultasi terkait kebutuhan software atau teknologi untuk bisnis saya.',
  en: "Hi Kognifx, I'd like to discuss a software or technology solution for my business.",
} as const;

export function getWhatsAppHandoffUrl(message: string): string {
  return `https://wa.me/${CONTACT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getConsultationWhatsAppUrl(locale: Locale): string {
  return getWhatsAppHandoffUrl(CONSULTATION_WHATSAPP_MESSAGES[locale]);
}

export function getContactMailtoHref(): string {
  return `mailto:${CONTACT_EMAIL}`;
}
