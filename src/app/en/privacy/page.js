import Header from '../../components/Header';
import Footer from '../../components/Footer';
export const metadata = { title: 'Privacy Policy | TicketsJet' };
export default function PrivacyPage() {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <Header transparent={false} />
      <section style={{ background: 'var(--dark)', padding: '100px 24px 48px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ color: 'white', fontSize: '36px', fontWeight: 800, marginBottom: '4px' }}>Privacy Policy</h1>
          <p style={{ color: 'rgba(255,255,255,0.4)' }}>Last updated: June 2026</p>
        </div>
      </section>
      <section className="section section-white">
        <div className="section-inner" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '12px', fontSize: '20px', fontWeight: 700 }}>Data Collection</h2>
          <p style={{ color: '#64748B', lineHeight: 1.9, marginBottom: '24px' }}>We collect search queries, IP address, and browser type to provide relevant results. We never sell your personal data.</p>
          <h2 style={{ marginBottom: '12px', fontSize: '20px', fontWeight: 700 }}>Cookies</h2>
          <p style={{ color: '#64748B', lineHeight: 1.9, marginBottom: '24px' }}>We use Google Analytics and AdSense cookies. You can opt out via browser settings.</p>
          <h2 style={{ marginBottom: '12px', fontSize: '20px', fontWeight: 700 }}>Affiliate Links</h2>
          <p style={{ color: '#64748B', lineHeight: 1.9 }}>We earn commissions when you book via our links. The price you pay is never affected. Contact: privacy@ticketsjet.com</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
