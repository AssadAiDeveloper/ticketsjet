import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CombinedSearchBox from '../../components/CombinedSearchBox';
import FAQSection from '../../components/FAQSection';

export const metadata = { title: 'Holiday Packages | TicketsJet', description: 'Find the best holiday packages and activities worldwide.' };

const PKG_FAQS = [
  { q: 'What is included in a holiday package?', a: 'Holiday packages typically include flights, accommodation, and sometimes transfers or meals.' },
  { q: 'Are Umrah packages available?', a: 'Yes! TicketsJet features Umrah packages from Netherlands including flights, hotel and visa assistance.' },
  { q: 'Are packages refundable?', a: 'Refund policies vary by package. Look for Free cancellation badges before booking.' },
];

export default function PackagesPage() {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <Header transparent={true} activeNav="/en/packages" />
      <section className="hero" style={{ minHeight: '70vh' }}>
        <div className="hero-bg" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #2a1a3a 40%, #6B1BA8 100%)' }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p style={{ color: '#FF6B2B', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>🎁 PACKAGES</p>
          <h1 className="hero-title">Find Your Dream Holiday Package</h1>
          <p className="hero-subtitle">Flights + Hotels + Activities. All in one place.</p>
          <CombinedSearchBox defaultTab="packages" />
        </div>
      </section>
      <section className="section section-ice"><div className="section-inner"><FAQSection faqs={PKG_FAQS} title="Package holiday questions" /></div></section>
      <Footer />
    </div>
  );
}
