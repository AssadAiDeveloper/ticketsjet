import Link from 'next/link';

const DESTS = ['Dubai', 'Istanbul', 'Barcelona', 'Marrakech', 'Cairo', 'Nador', 'Tangier', 'London', 'Paris'];
const ROUTES = [['AMS','DXB'],['AMS','IST'],['AMS','BCN'],['AMS','CAI'],['AMS','RAK'],['AMS','TNG']];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand" style={{ maxWidth: '280px' }}>
            <div className="brand-name">✈️ Tickets<span>Jet</span></div>
            <p>Every flight. Every fare. Every language.</p>
            <p className="ar">كل رحلة. كل سعر. بلغتك.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Flights to</h4>
              {DESTS.map(d => (
                <Link key={d} href={`/en/flights-to/${d.toLowerCase()}`}>{d}</Link>
              ))}
            </div>
            <div className="footer-col">
              <h4>Popular routes</h4>
              {ROUTES.map(([f, t]) => (
                <Link key={`${f}-${t}`} href={`/en/routes/${f.toLowerCase()}/${t.toLowerCase()}`}>
                  {f} → {t}
                </Link>
              ))}
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <Link href="/en/flights">✈️ Flights</Link>
              <Link href="/en/hotels">🏨 Hotels</Link>
              <Link href="/en/car-rentals">🚗 Car hire</Link>
              <Link href="/en/packages">🎁 Packages</Link>
              <Link href="/en/explore">🌍 Explore</Link>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <Link href="/en/about">About us</Link>
              <Link href="/en/contact">Contact</Link>
              <Link href="/en/privacy">Privacy</Link>
              <Link href="/en/terms">Terms</Link>
              <Link href="/en/blog">Blog</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 TicketsJet.com — All rights reserved</p>
          <p className="footer-copy">Affiliate disclosure: We earn commissions from bookings</p>
        </div>
      </div>
    </footer>
  );
}
