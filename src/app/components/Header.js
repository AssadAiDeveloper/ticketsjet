'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NAV = [
  { label: '✈️ Flights',  href: '/en/flights' },
  { label: '🏨 Hotels',   href: '/en/hotels' },
  { label: '🚗 Cars',     href: '/en/car-rentals' },
  { label: '🎁 Packages', href: '/en/packages' },
  { label: '🌍 Explore',  href: '/en/explore' },
];

const LANGS = [
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'ar', flag: '🇸🇦', name: 'العربية' },
  { code: 'nl', flag: '🇳🇱', name: 'Nederlands' },
  { code: 'fr', flag: '🇫🇷', name: 'Français' },
  { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  { code: 'es', flag: '🇪🇸', name: 'Español' },
  { code: 'tr', flag: '🇹🇷', name: 'Türkçe' },
  { code: 'ru', flag: '🇷🇺', name: 'Русский' },
];

const CURRENCIES = ['EUR', 'USD', 'GBP', 'AED', 'SAR', 'KWD', 'MAD', 'TRY'];

export default function Header({ transparent = false, activeNav = '' }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currency, setCurrency] = useState('EUR');
  const [showCurr, setShowCurr] = useState(false);
  const [showLang, setShowLang] = useState(false);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [transparent]);

  const headerClass = `header ${transparent && !scrolled ? 'transparent' : 'solid'}`;

  return (
    <>
      <header className={headerClass}>
        <div className="header-inner">
          <Link href="/en" className="logo">
            <Image src="/images/logo-horizontal.png" alt="TicketsJet" width={160} height={38} style={{ height: '38px', width: 'auto' }} priority />
          </Link>

          <nav className="nav">
            {NAV.map(item => (
              <Link key={item.href} href={item.href} className={activeNav === item.href ? 'active' : ''}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-right">
            {/* Currency */}
            <div style={{ position: 'relative' }}>
              <button className="hdr-btn" onClick={() => { setShowCurr(!showCurr); setShowLang(false); }}>
                {currency} ▾
                {showCurr && (
                  <div className="hdr-dropdown-menu" style={{ display: 'block' }}>
                    {CURRENCIES.map(c => (
                      <button key={c} onClick={() => { setCurrency(c); setShowCurr(false); }}>{c}</button>
                    ))}
                  </div>
                )}
              </button>
            </div>

            {/* Language */}
            <div style={{ position: 'relative' }}>
              <button className="hdr-btn" onClick={() => { setShowLang(!showLang); setShowCurr(false); }}>
                🌐 EN ▾
                {showLang && (
                  <div className="hdr-dropdown-menu" style={{ display: 'block' }}>
                    {LANGS.map(l => (
                      <button key={l.code} onClick={() => { window.location.href = `/${l.code}`; setShowLang(false); }}>
                        {l.flag} {l.name}
                      </button>
                    ))}
                  </div>
                )}
              </button>
            </div>

            <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <nav className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
          {NAV.map(item => (
            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
