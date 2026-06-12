import Header from '../components/Header';
import Footer from '../components/Footer';
import CombinedSearchBox from '../components/CombinedSearchBox';
import DestinationGrid from '../components/DestinationGrid';
import FAQSection from '../components/FAQSection';

export const metadata = {
  title: 'TicketsJet — Compare Cheap Flights | AI Search | No Hidden Fees',
  description: 'Compare cheap flights from 1,000+ airlines. AI-powered search, anywhere search, 13 languages. No hidden fees ever.',
};

const HOME_FAQS = [
  { q: 'How does TicketsJet work?', a: 'TicketsJet searches and compares prices from 1,000+ airlines and booking sites. We show you all options side by side so you can find the best deal in seconds.' },
  { q: 'Is TicketsJet free to use?', a: 'Yes, completely free. We earn a small commission when you book, at no extra cost to you. The price you see is always the final price.' },
  { q: 'What is the AI Search feature?', a: 'Just type what you want in natural language — "cheap flight to Dubai in August" — and our AI will understand and find the best options for you, even in Arabic.' },
  { q: 'What is "Search Anywhere"?', a: 'If you\'re flexible, select "Anywhere" as your destination. We\'ll show you the cheapest places to fly to from your airport — perfect for spontaneous getaways.' },
  { q: 'Does TicketsJet support Arabic?', a: 'Yes! Full Arabic RTL support, 13 languages total, and prices in local currencies including AED, SAR, KWD, MAD and more.' },
];

export default function HomePage() {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <Header transparent={true} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-bg-img" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">Millions of cheap flights.<br />One simple search.</h1>
          <p className="hero-subtitle">Compare 1,000+ airlines · AI-powered · No hidden fees · 13 languages</p>
          <CombinedSearchBox defaultTab="flights" />
        </div>
      </section>

      {/* PARTNERS */}
      <div className="partners">
        <div className="partners-inner">
          <span className="partners-label">We compare</span>
          {['Trip.com', 'Booking.com', 'Expedia', 'Emirates', 'KLM', 'TUI', 'Ryanair', 'easyJet'].map(p => (
            <div key={p} className="partner-badge">{p}</div>
          ))}
        </div>
      </div>

      {/* LIVE DEALS */}
      <section className="section section-ice">
        <div className="section-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Live deals from Amsterdam</h2>
            <span className="live-badge"><span className="live-dot" />LIVE</span>
          </div>
          <p className="section-sub">Real-time prices updated every 30 minutes</p>
          <div className="deals-grid" id="live-deals">
            {[
              { from: 'AMS', to: 'DXB', airline: 'EK', price: 199, stops: 0 },
              { from: 'AMS', to: 'IST', airline: 'TK', price: 89,  stops: 0 },
              { from: 'AMS', to: 'BCN', airline: 'VY', price: 59,  stops: 0 },
              { from: 'AMS', to: 'CAI', airline: 'MS', price: 199, stops: 1 },
              { from: 'AMS', to: 'RAK', airline: 'AT', price: 129, stops: 0 },
              { from: 'AMS', to: 'JFK', airline: 'DL', price: 389, stops: 0 },
            ].map((d, i) => (
              <a key={i} href={`https://www.aviasales.com/search/${d.from}260801${d.to}1?marker=271745`}
                target="_blank" rel="noopener noreferrer" className="deal-card">
                <div className="deal-logo">
                  <img src={`https://pics.avs.io/200/200/${d.airline}.png`} alt={d.airline}
                    style={{ width: 36, height: 36, objectFit: 'contain' }}
                    onError={e => e.target.style.display = 'none'} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="deal-route">{d.from} → {d.to}</div>
                  <div className="deal-meta">{d.airline} · {d.stops === 0 ? 'Direct' : `${d.stops} stop`}</div>
                </div>
                <div className="deal-price">€{d.price}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="section section-white">
        <div className="section-inner">
          <h2 className="section-title">Popular Destinations</h2>
          <p className="section-sub">Most searched flights this month</p>
          <DestinationGrid locale="en" />
        </div>
      </section>

      {/* WHY */}
      <section className="section section-ice">
        <div className="section-inner section-center">
          <h2 className="section-title">Why TicketsJet?</h2>
          <p className="section-sub">Everything you need in one place</p>
          <div className="why-grid">
            {[
              { icon: '🤖', title: 'AI Smart Search', desc: 'Type in any language — our AI understands and finds the best flights instantly' },
              { icon: '🌍', title: 'Search Anywhere', desc: 'No destination? Discover the cheapest places to fly from your airport' },
              { icon: '🔍', title: 'Compare 1,000+', desc: 'We search every major airline and booking site for the absolute best price' },
              { icon: '💰', title: 'No hidden fees', desc: 'The price you see is exactly what you pay — always transparent' },
              { icon: '🕌', title: 'Halal Travel', desc: 'Muslim-friendly hotels, halal filter, and Umrah packages hub' },
              { icon: '✈️', title: 'Multi-city trips', desc: 'Plan complex itineraries with multiple stops in one simple search' },
            ].map(w => (
              <div key={w.title} className="why-card">
                <div className="why-icon">{w.icon}</div>
                <div className="why-title">{w.title}</div>
                <div className="why-desc">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-white">
        <div className="section-inner">
          <FAQSection faqs={HOME_FAQS} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
