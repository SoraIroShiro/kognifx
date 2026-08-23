export const languageRoutePairs = [
  { en: '/', id: '/id' },
  { en: '/about', id: '/id/tentang' },
  { en: '/solutions', id: '/id/solusi' },
  { en: '/contact', id: '/id/kontak' },
] as const;

export type LanguageRoutePair = (typeof languageRoutePairs)[number];
export type EnglishRoute = LanguageRoutePair['en'];
export type IndonesianRoute = LanguageRoutePair['id'];
export type MarketingRoute = EnglishRoute | IndonesianRoute;
export type Locale = 'en' | 'id';

const englishToPair = new Map<string, LanguageRoutePair>(
  languageRoutePairs.map((pair) => [pair.en, pair])
);

const indonesianToPair = new Map<string, LanguageRoutePair>(
  languageRoutePairs.map((pair) => [pair.id, pair])
);

export function getRoutePair(path: string): LanguageRoutePair | undefined {
  return englishToPair.get(path) ?? indonesianToPair.get(path);
}

export function getEquivalentRoute(
  path: string,
  targetLocale: Locale
): MarketingRoute | undefined {
  const pair = getRoutePair(path);
  if (!pair) return undefined;
  return targetLocale === 'en' ? pair.en : pair.id;
}

export function isEnglishRoute(path: string): path is EnglishRoute {
  return englishToPair.has(path);
}

export function isIndonesianRoute(path: string): path is IndonesianRoute {
  return indonesianToPair.has(path);
}
