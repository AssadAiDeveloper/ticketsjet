const BASE = 'https://ticketsjet.com';
const LOCALES = ['en','ar','nl','fr','de','es','tr','ru'];
const DESTS = ['dubai','istanbul','marrakech','barcelona','cairo','london','paris','nador','tangier','bali','casablanca','riyadh'];
const AIRPORTS = ['amsterdam','eindhoven','rotterdam'];

export default function sitemap() {
  const entries = [];
  for (const locale of LOCALES) {
    entries.push({ url: `${BASE}/${locale}`, changeFrequency: 'daily', priority: 1.0, lastModified: new Date() });
    entries.push({ url: `${BASE}/${locale}/flights`, changeFrequency: 'daily', priority: 0.9 });
    entries.push({ url: `${BASE}/${locale}/hotels`, changeFrequency: 'daily', priority: 0.9 });
    entries.push({ url: `${BASE}/${locale}/explore`, changeFrequency: 'weekly', priority: 0.7 });
    for (const dest of DESTS) {
      entries.push({ url: `${BASE}/${locale}/flights-to/${dest}`, changeFrequency: 'daily', priority: 0.8 });
    }
    for (const airport of AIRPORTS) {
      entries.push({ url: `${BASE}/${locale}/flights-from/${airport}`, changeFrequency: 'daily', priority: 0.8 });
    }
  }
  return entries;
}
