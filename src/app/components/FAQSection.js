const DEFAULT_FAQS = [
  { q: 'How does TicketsJet work?', a: 'TicketsJet compares prices from 1,000+ airlines and booking sites instantly. We search so you don\'t have to — just enter your details and see all available options side by side.' },
  { q: 'Is TicketsJet free to use?', a: 'Yes, completely free. We earn a small commission from booking sites when you book, at no extra cost to you. The price you see is always the final price.' },
  { q: 'How do I find the cheapest flights?', a: 'Use our flexible dates feature, try different airports, and book 6-8 weeks in advance. Tuesday and Wednesday departures are often cheaper.' },
  { q: 'Can I search for flights in Arabic?', a: 'Yes! TicketsJet supports 13 languages including Arabic with full RTL layout, and displays prices in local currencies including SAR, AED, KWD, and MAD.' },
  { q: 'What is the "Anywhere" search?', a: 'If you\'re flexible about your destination, select "Anywhere" and we\'ll show you the cheapest places to fly to from your airport — great for spontaneous travel.' },
];

export default function FAQSection({ faqs = DEFAULT_FAQS, title = 'Frequently asked questions' }) {
  return (
    <div>
      <h2 className="section-title section-center" style={{ marginBottom: '32px' }}>{title}</h2>
      <div className="faq-list">
        {faqs.map((item, i) => (
          <details key={i}>
            <summary>{item.q}</summary>
            <div className="faq-answer">{item.a}</div>
          </details>
        ))}
      </div>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(f => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </div>
  );
}
