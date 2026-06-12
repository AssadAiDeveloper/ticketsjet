import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DestinationGrid from '../../components/DestinationGrid';
import FAQSection from '../../components/FAQSection';

export const metadata = { title: 'Explore Destinations | TicketsJet', description: 'Discover your next destination with AI recommendations.' };

const EXPLORE_FAQS = [
  { q: 'How does AI recommendation work?', a: 'Tell our AI what you are looking for and it suggests perfect destinations based on your preferences and prices.' },
  { q: 'What is the cheapest destination from Amsterdam?', a: 'Budget options include Barcelona from 59 EUR, London from 49 EUR, and Brussels from 39 EUR.' },
  { q: 'Can I search for Halal-friendly destinations?', a: 'Yes! Use our Halal Travel filter to discover Muslim-friendly destinations with prayer facilities and halal food.' },
];

export default function ExplorePage() {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <Header transparent={false} activeNav="/en/explore" />
      <section style={{ background: 'var(--dark)', padding: '100px 24px 60px', textAlign: 'center' }}>
        <h1 style={{ color: 'white', fontSize: 'clamp(28px,5vw,52px)', fontWeight: 800, marginBottom: '12px' }}>Where will you go next?</h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', marginBottom: '32px' }}>Discover destinations based on your budget and style</p>
        <a href="/en" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--primary)', color: 'white', padding: '14px 32px', borderRadius: '12px', fontSize: '16px', fontWeight: 700 }}>🤖 Search with AI</a>
      </section>
      <section className="section section-white"><div className="section-inner"><h2 className="section-title">All destinations</h2><p className="section-sub">Explore flights from Amsterdam</p><DestinationGrid locale="en" /></div></section>
      <section className="section section-ice"><div className="section-inner"><FAQSection faqs={EXPLORE_FAQS} title="How to find your next destination" /></div></section>
      <Footer />
    </div>
  );
}
