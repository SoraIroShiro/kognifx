export const CONTACT_EMAIL = 'panparci.id@gmail.com';
export const CONTACT_WHATSAPP_DISPLAY = '+62 859-2735-1745';
export const CONTACT_WHATSAPP_NUMBER = '6285927351745';

export function getWhatsAppHandoffUrl(message: string): string {
  return `https://wa.me/${CONTACT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getContactMailtoHref(): string {
  return `mailto:${CONTACT_EMAIL}`;
}
