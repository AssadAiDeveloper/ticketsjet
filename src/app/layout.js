import './styles/globals.css';

export const metadata = {
  title: { default: 'TicketsJet — Every flight. Every fare. Every language.', template: '%s | TicketsJet' },
  description: 'Compare cheap flights from 1,000+ airlines. AI search, anywhere search, no hidden fees.',
  keywords: 'cheap flights, compare flights, book flights, airline tickets, TicketsJet',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="/images/logo-icon.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
