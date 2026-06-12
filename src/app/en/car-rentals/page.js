import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CombinedSearchBox from '../../components/CombinedSearchBox';
import FAQSection from '../../components/FAQSection';

export const metadata = { title: 'Car Hire Worldwide | TicketsJet', description: 'Compare car hire from 900+ suppliers worldwide.' };

const CAR_FAQS = [
  { q: 'Do I need an international driving licence?', a: 'In most European countries your national licence is sufficient. For non-EU destinations, an IDP is often required.' },
  { q: 'Is insurance included?', a: 'Basic insurance (CDW) is usually included, but excess can be high. We recommend purchasing excess protection.' },
  { q: 'What fuel policy applies?', a: 'Most rentals use full-to-full — you receive a full tank and return it full. Always check before booking.' },
];

export default function CarRentalsPage() {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <Header transparent={true} activeNav="/en/car-rentals" />
      <section className="hero" style={{ minHeight: '70vh' }}>
        <div className="hero-bg" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #1a2e3a 40%, #0D6B3C 100%)' }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p style={{ color: '#00C4A7', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>🚗 CAR HIRE</p>
          <h1 className="hero-title">Find the Best Car Hire Deal</h1>
          <p className="hero-subtitle">Compare 900+ suppliers worldwide. Free cancellation available.</p>
          <CombinedSearchBox defaultTab="cars" />
        </div>
      </section>
      <section className="section section-ice"><div className="section-inner"><FAQSection faqs={CAR_FAQS} title="Car hire questions" /></div></section>
      <Footer />
    </div>
  );
}
