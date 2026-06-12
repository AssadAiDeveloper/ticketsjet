import { NextResponse } from 'next/server';

const locales = ['en', 'ar', 'nl', 'fr', 'de', 'es', 'tr', 'ru'];
const defaultLocale = 'en';

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const hasLocale = locales.some(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (!hasLocale && !pathname.startsWith('/_next') && !pathname.includes('.')) {
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, req.url));
  }
}

export const config = { matcher: ['/((?!_next|api|.*\\..*).*)'] };
