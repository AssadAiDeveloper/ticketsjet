import Header from '../../components/Header';
import Footer from '../../components/Footer';
export const metadata = { title: 'About TicketsJet', description: 'Learn about TicketsJet — the multilingual travel metasearch platform.' };
export default function AboutPage() {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <Header transparent={false} />
      <section style={{ background: 'linear-gradient(135deg,#0D1B2A,#162435)', padding: '100px 24px 60px', textAlign: 'center' }}>
        <h1 style={{ color: 'white', fontSize: '42px', fontWeight: 800, marginBottom: '12px' }}>About TicketsJet</h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '18px' }}>Every flight. Every fare. Every language.</p>
      </section>
      <section className="section section-white">
        <div className="section-inner" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '16px', fontSize: '24px', fontWeight: 800 }}>Our Mission</h2>
          <p style={{ color: '#64748B', lineHeight: 1.9, marginBottom: '24px' }}>TicketsJet is a multilingual travel metasearch platform built to serve travelers worldwide — especially Arabic-speaking communities in Europe. We compare flights, hotels, and car hire from 1,000+ providers in 13 languages.</p>
          <h2 style={{ marginBottom: '16px', fontSize: '24px', fontWeight: 800, marginTop: '32px' }}>Based in Haarlem, Netherlands</h2>
          <p style={{ color: '#64748B', lineHeight: 1.9 }}>Uniquely positioned to serve both European and Arabic-speaking markets across Europe and the Gulf region.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
