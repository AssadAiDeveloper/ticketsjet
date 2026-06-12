'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Header from '../../components/Header';

function SearchContent() {
  const params = useSearchParams();
  const from = params.get('from') || 'AMS';
  const to = params.get('to') || '';
  const dep = params.get('dep') || '';
  const ret = params.get('ret') || '';
  const adults = params.get('adults') || '1';
  const cabin = params.get('cabin') || 'economy';
  const trip = params.get('trip') || 'round';

  // Build White Label URL
  const wlParams = new URLSearchParams();
  if (from) wlParams.set('origin', from);
  if (to && to !== 'anywhere') wlParams.set('destination', to);
  if (dep) wlParams.set('depart_date', dep);
  if (ret && trip === 'round') wlParams.set('return_date', ret);
  wlParams.set('adults', adults);
  wlParams.set('marker', '271745');

  const wlURL = `https://book.ticketsjet.com?${wlParams.toString()}`;

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#F0F8FF' }}>
      <Header transparent={false} />

      {/* Search summary bar */}
      <div className="results-header">
        <div className="results-header-inner">
          <span className="results-route">
            ✈️ {from} {to ? `→ ${to}` : '→ Anywhere'}
          </span>
          <span className="results-meta">
            {dep} {ret && trip === 'round' ? `· Return: ${ret}` : ''} · {adults} Adult{parseInt(adults) > 1 ? 's' : ''} · {cabin}
          </span>
          <button className="edit-btn" onClick={() => window.history.back()}>✏️ Edit search</button>
        </div>
      </div>

      {/* White Label iframe — النتائج في نفس الصفحة */}
      <div className="search-iframe-wrap">
        <iframe
          src={wlURL}
          className="search-iframe"
          title="Flight Search Results"
          allow="payment"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
        />
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F0F8FF' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>✈️</div>
          <p style={{ color: '#64748B', fontSize: '16px' }}>Searching for the best prices...</p>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
