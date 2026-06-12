import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CombinedSearchBox from '../../components/CombinedSearchBox';
import FAQSection from '../../components/FAQSection';

export const metadata = { title: 'Compare Hotels Worldwide | TicketsJet', description: 'Compare 3,000,000+ hotels. Best price guaranteed.' };

const HOTEL_FAQS = [
  { q: 'Is free cancellation available?', a: 'Many hotels offer free cancellation on flexible rates. Always check the cancellation policy before booking.' },
  { q: 'Is breakfast included?', a: 'This varies by hotel and rate. Look for breakfast included filter in search results.' },
  { q: 'Are prices per person or per room?', a: 'Hotel prices are shown per room per night. The total for your stay is shown before you book.' },
];

export default function HotelsPage() {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <Header transparent={true} activeNav="/en/hotels" />
      <section className="hero" style={{ minHeight: '70vh' }}>
        <div className="hero-bg" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #1a3a4a 40%, #0D5C8A 100%)' }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p style={{ color: '#1BA8E0', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>🏨 HOTEL SEARCH</p>
          <h1 className="hero-title">Find Your Perfect Hotel</h1>
          <p className="hero-subtitle">Compare 3,000,000+ hotels worldwide. Best price guaranteed.</p>
          <CombinedSearchBox defaultTab="hotels" />
        </div>
      </section>
      <section className="section section-ice"><div className="section-inner"><FAQSection faqs={HOTEL_FAQS} title="Hotel booking questions" /></div></section>
      <Footer />
    </div>
  );
}
