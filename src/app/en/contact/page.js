import Header from '../../components/Header';
import Footer from '../../components/Footer';
export const metadata = { title: 'Contact TicketsJet', description: 'Get in touch with the TicketsJet team.' };
export default function ContactPage() {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <Header transparent={false} />
      <section style={{ background: 'linear-gradient(135deg,#0D1B2A,#162435)', padding: '100px 24px 60px', textAlign: 'center' }}>
        <h1 style={{ color: 'white', fontSize: '42px', fontWeight: 800 }}>Contact Us</h1>
      </section>
      <section className="section section-white">
        <div className="section-inner" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <div style={{ background: '#F0F8FF', borderRadius: '20px', padding: '32px', marginBottom: '20px' }}>
            <p style={{ fontWeight: 700, color: '#0D1B2A', marginBottom: '8px' }}>📧 Email</p>
            <a href="mailto:info@ticketsjet.com" style={{ color: '#1BA8E0', fontSize: '18px' }}>info@ticketsjet.com</a>
          </div>
          <div style={{ background: '#F0F8FF', borderRadius: '20px', padding: '32px' }}>
            <p style={{ fontWeight: 700, color: '#0D1B2A', marginBottom: '8px' }}>📍 Location</p>
            <p style={{ color: '#64748B' }}>Haarlem, Netherlands</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
