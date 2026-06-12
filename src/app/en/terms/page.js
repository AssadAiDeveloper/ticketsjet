import Header from '../../components/Header';
import Footer from '../../components/Footer';
export const metadata = { title: 'Terms of Service | TicketsJet' };
export default function TermsPage() {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <Header transparent={false} />
      <section style={{ background: 'var(--dark)', padding: '100px 24px 48px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ color: 'white', fontSize: '36px', fontWeight: 800 }}>Terms of Service</h1>
        </div>
      </section>
      <section className="section section-white">
        <div className="section-inner" style={{ maxWidth: '800px' }}>
          <p style={{ color: '#64748B', lineHeight: 1.9, marginBottom: '16px' }}>TicketsJet is a flight comparison service. We are not a booking agent.</p>
          <p style={{ color: '#64748B', lineHeight: 1.9, marginBottom: '16px' }}>Prices shown are subject to availability and may change. Always verify on the booking site.</p>
          <p style={{ color: '#64748B', lineHeight: 1.9 }}>We earn affiliate commissions from bookings at no extra cost to you.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
