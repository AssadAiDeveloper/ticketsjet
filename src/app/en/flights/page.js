import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CombinedSearchBox from '../../components/CombinedSearchBox';
import DestinationGrid from '../../components/DestinationGrid';
import FAQSection from '../../components/FAQSection';

export const metadata = { title: 'Compare Cheap Flights | TicketsJet', description: 'Find the cheapest flights from 1,000+ airlines. Compare prices instantly.' };

const FLIGHT_FAQS = [
  { q: 'What is the cheapest day to fly?', a: 'Tuesday and Wednesday are typically the cheapest days to fly. Booking 6-8 weeks in advance can save up to 30%.' },
  { q: 'How much luggage can I bring?', a: 'Each airline has different baggage policies. Always check the airline website before travel.' },
  { q: 'Can I change or cancel my flight?', a: 'This depends on the fare type. Flexible tickets allow changes, while cheapest fares are often non-refundable.' },
  { q: 'How early should I arrive at the airport?', a: 'For European flights: 2 hours. For international: 3 hours before departure.' },
];

export default function FlightsPage() {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <Header transparent={true} activeNav="/en/flights" />
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-bg-img" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p style={{ color: '#1BA8E0', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>✈️ FLIGHT SEARCH</p>
          <h1 className="hero-title">Find Your Perfect Flight</h1>
          <p className="hero-subtitle">Compare 1,000+ airlines worldwide. No hidden fees. Ever.</p>
          <CombinedSearchBox defaultTab="flights" />
        </div>
      </section>
      <section className="section section-white"><div className="section-inner"><h2 className="section-title">Popular destinations</h2><p className="section-sub">Most searched from Amsterdam</p><DestinationGrid locale="en" /></div></section>
      <section className="section section-ice"><div className="section-inner"><FAQSection faqs={FLIGHT_FAQS} title="Flight questions answered" /></div></section>
      <Footer />
    </div>
  );
}
