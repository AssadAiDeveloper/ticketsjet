'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const TOKEN = '4a59986d35a898733a7c2d90c5c8a7f5';
const MARKER = '271745';
const WHITELABEL = 'https://book.ticketsjet.com';
const TRIPCOM = 'https://trip.tpo.mx/1IUsqDdq';
const CARS = 'https://economybookings.tpo.mx/w14b7Yvs';

const TABS = [
  { key: 'flights',  label: '✈️ Flights' },
  { key: 'hotels',   label: '🏨 Hotels' },
  { key: 'cars',     label: '🚗 Cars' },
  { key: 'packages', label: '🎁 Packages' },
];

const ANYWHERE = [
  { city: 'Dubai',     code: 'DXB', price: 199 },
  { city: 'Istanbul',  code: 'IST', price: 89 },
  { city: 'Marrakech', code: 'RAK', price: 129 },
  { city: 'Barcelona', code: 'BCN', price: 59 },
  { city: 'Cairo',     code: 'CAI', price: 199 },
  { city: 'London',    code: 'LHR', price: 49 },
];

// Autocomplete input
function AirportInput({ label, placeholder, onSelect, defaultVal = '' }) {
  const [q, setQ] = useState('');
  const [display, setDisplay] = useState(defaultVal);
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const timer = useRef();
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    if (q.length < 2) { setResults([]); return; }
    clearTimeout(timer.current);
    timer.current = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://autocomplete.travelpayouts.com/places2?term=${encodeURIComponent(q)}&locale=en&types=airport,city&limit=8`);
        if (res.ok) setResults(await res.json());
      } catch {}
      setLoading(false);
    }, 250);
  }, [q]);

  const pick = (item) => {
    onSelect(item.code, item.name);
    setDisplay(`${item.name} (${item.code})`);
    setQ(''); setOpen(false);
  };

  return (
    <div ref={ref} className="search-field" style={{ flex: 2, position: 'relative' }}>
      <div className="field-label">{label}</div>
      <input
        type="text"
        className="field-input"
        value={open ? q : display}
        onChange={e => { setQ(e.target.value); setDisplay(e.target.value); setOpen(true); }}
        onFocus={() => { setOpen(true); if (display) { setQ(display); setDisplay(''); } }}
        placeholder={placeholder}
        autoComplete="off"
      />
      <div className={`ac-list ${open && (q.length >= 2 || results.length > 0) ? 'open' : ''}`}>
        {loading && <div className="ac-item"><span style={{ color: '#94a3b8' }}>Searching...</span></div>}
        {!loading && results.length === 0 && q.length >= 2 && (
          <div className="ac-item"><span style={{ color: '#94a3b8' }}>No results for "{q}"</span></div>
        )}
        {results.map((item, i) => (
          <div key={i} className="ac-item" onClick={() => pick(item)}>
            <div className="ac-icon">{item.type === 'airport' ? '✈️' : '🏙️'}</div>
            <div>
              <div className="ac-name">{item.name}</div>
              <div className="ac-sub">{item.city || ''}{item.country_name ? `, ${item.country_name}` : ''}</div>
            </div>
            <div className="ac-code">{item.code}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CombinedSearchBox({ defaultTab = 'flights' }) {
  const router = useRouter();
  const [tab, setTab] = useState(defaultTab);
  const [trip, setTrip] = useState('round');
  const [origin, setOrigin] = useState({ code: 'AMS', name: 'Amsterdam Schiphol' });
  const [dest, setDest] = useState({ code: '', name: '' });
  const [dep, setDep] = useState('');
  const [ret, setRet] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabin, setCabin] = useState('Economy');
  const [showPax, setShowPax] = useState(false);
  const [showAnywhere, setShowAnywhere] = useState(false);
  const [aiQuery, setAiQuery] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [legCount, setLegCount] = useState(2);
  const paxRef = useRef();
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const handler = (e) => { if (paxRef.current && !paxRef.current.contains(e.target)) setShowPax(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const totalPax = adults + children + infants;

  const handleSearch = () => {
    if (tab === 'hotels') { window.open(TRIPCOM, '_blank'); return; }
    if (tab === 'cars') { window.open(CARS, '_blank'); return; }
    if (tab === 'packages') { window.open(TRIPCOM, '_blank'); return; }

    // Flights
    if (!origin.code) return;
    const d = dest.code || 'anywhere';
    const params = new URLSearchParams({
      from: origin.code, fromName: origin.name,
      to: d, toName: dest.name || 'Anywhere',
      dep: dep || '', ret: trip === 'round' ? ret : '',
      adults, children, infants, cabin,
      trip,
    });
    router.push(`/en/search?${params.toString()}`);
  };

  const handleAISearch = async () => {
    if (!aiQuery.trim()) return;
    setAiLoading(true);
    try {
      const res = await fetch('/api/ai-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: aiQuery }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.origin) setOrigin({ code: data.origin, name: data.originName || data.origin });
        if (data.dest) setDest({ code: data.dest, name: data.destName || data.dest });
        if (data.dep) setDep(data.dep);
        if (data.trip) setTrip(data.trip);
        setTab('flights');
        setTimeout(handleSearch, 300);
      }
    } catch {}
    setAiLoading(false);
  };

  return (
    <div className="search-box">
      {/* Tabs */}
      <div className="search-tabs">
        {TABS.map(t => (
          <button key={t.key} className={`search-tab ${tab === t.key ? 'active' : ''}`}
            onClick={() => setTab(t.key)}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Flights UI */}
      {tab === 'flights' && (
        <>
          {/* Trip type + Pax */}
          <div className="trip-types">
            {[
              { v: 'round', l: '⇄ Roundtrip' },
              { v: 'oneway', l: '→ One-way' },
              { v: 'multi', l: '✈️ Multi-city' },
              { v: 'ai', l: '🤖 AI Search' },
            ].map(o => (
              <button key={o.v} className={`trip-type-btn ${trip === o.v ? 'active' : ''}`}
                onClick={() => setTrip(o.v)}>
                {o.l}
              </button>
            ))}

            {/* Passengers */}
            <div style={{ position: 'relative', marginLeft: 'auto' }} ref={paxRef}>
              <button className="pax-btn" onClick={() => setShowPax(!showPax)}>
                👤 {totalPax} Passenger{totalPax > 1 ? 's' : ''}, {cabin} ▾
              </button>
              {showPax && (
                <div className="pax-dropdown open">
                  {[
                    { key: 'adults', label: 'Adults', sub: '12+ years', val: adults, set: setAdults, min: 1 },
                    { key: 'children', label: 'Children', sub: '2–11 years', val: children, set: setChildren, min: 0 },
                    { key: 'infants', label: 'Infants', sub: 'Under 2', val: infants, set: setInfants, min: 0 },
                  ].map(p => (
                    <div key={p.key} className="pax-row">
                      <div>
                        <div className="pax-label">{p.label}</div>
                        <div className="pax-sub">{p.sub}</div>
                      </div>
                      <div className="pax-controls">
                        <button className="pax-minus" onClick={() => p.val > p.min && p.set(p.val - 1)} disabled={p.val <= p.min}>−</button>
                        <span className="pax-count">{p.val}</span>
                        <button className="pax-plus" onClick={() => p.set(p.val + 1)}>+</button>
                      </div>
                    </div>
                  ))}
                  <div style={{ marginTop: '12px' }}>
                    <div className="filter-label" style={{ marginBottom: '8px' }}>Cabin class</div>
                    <div className="cabin-opts">
                      {['Economy', 'Business', 'First'].map(c => (
                        <button key={c} className={`cabin-opt ${cabin === c ? 'active' : ''}`} onClick={() => setCabin(c)}>{c}</button>
                      ))}
                    </div>
                  </div>
                  <button className="pax-done" onClick={() => setShowPax(false)}>Done</button>
                </div>
              )}
            </div>
          </div>

          {/* AI search bar */}
          {trip === 'ai' && (
            <div className="ai-bar show">
              <input
                type="text"
                className="ai-input"
                value={aiQuery}
                onChange={e => setAiQuery(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleAISearch()}
                placeholder='Try: "Cheap flight Amsterdam to Dubai in August" or "رحلة لدبي في أغسطس"'
              />
              <button className="ai-btn" onClick={handleAISearch} disabled={aiLoading}>
                {aiLoading ? '⏳ Thinking...' : '🤖 Search'}
              </button>
            </div>
          )}

          {/* Regular fields */}
          {trip !== 'ai' && trip !== 'multi' && (
            <div className="search-fields">
              <AirportInput label="FROM" placeholder="City or airport"
                defaultVal={`${origin.name} (${origin.code})`}
                onSelect={(code, name) => setOrigin({ code, name })} />

              <button className="swap-btn" onClick={() => {
                const tmp = { ...origin };
                setOrigin({ ...dest });
                setDest(tmp);
              }}>⇄</button>

              <div style={{ position: 'relative', flex: 2 }}>
                <AirportInput label="TO" placeholder="City or anywhere"
                  defaultVal={dest.code ? `${dest.name} (${dest.code})` : ''}
                  onSelect={(code, name) => { setDest({ code, name }); setShowAnywhere(false); }} />
                {!dest.code && (
                  <div className="ac-list open" style={{ top: '100%', left: 0 }}>
                    <div className="ac-item" style={{ background: 'linear-gradient(135deg,#E8F6FD,#F0FFF4)' }}
                      onClick={() => { setDest({ code: 'anywhere', name: 'Anywhere' }); setShowAnywhere(true); }}>
                      <div className="ac-icon">🌍</div>
                      <div>
                        <div className="ac-name" style={{ color: '#1BA8E0', fontWeight: 700 }}>Anywhere</div>
                        <div className="ac-sub">Show me the cheapest deals</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="search-field" style={{ flex: 1 }}>
                <div className="field-label">DEPART</div>
                <input type="date" className="field-input" value={dep}
                  onChange={e => setDep(e.target.value)} min={today} />
              </div>

              {trip === 'round' && (
                <div className="search-field" style={{ flex: 1 }}>
                  <div className="field-label">RETURN</div>
                  <input type="date" className="field-input" value={ret}
                    onChange={e => setRet(e.target.value)} min={dep || today} />
                </div>
              )}

              <button className="search-submit" onClick={handleSearch}>🔍 Search</button>
            </div>
          )}

          {/* Multi-city */}
          {trip === 'multi' && (
            <div style={{ padding: '8px 12px' }}>
              {Array.from({ length: legCount }).map((_, i) => (
                <div key={i} className="multi-row">
                  <div className="search-field" style={{ flex: 2, border: '1.5px solid #E2EBF0', borderRadius: '10px' }}>
                    <div className="field-label">FROM</div>
                    <input type="text" className="field-input" placeholder="City or airport" />
                  </div>
                  <div className="search-field" style={{ flex: 2, border: '1.5px solid #E2EBF0', borderRadius: '10px' }}>
                    <div className="field-label">TO</div>
                    <input type="text" className="field-input" placeholder="City or airport" />
                  </div>
                  <div className="search-field" style={{ flex: 1, border: '1.5px solid #E2EBF0', borderRadius: '10px' }}>
                    <div className="field-label">DATE</div>
                    <input type="date" className="field-input" min={today} />
                  </div>
                  {i >= 2 && <button className="remove-leg" onClick={() => setLegCount(l => l - 1)}>✕</button>}
                </div>
              ))}
              {legCount < 6 && (
                <button className="add-leg" onClick={() => setLegCount(l => l + 1)}>+ Add another flight</button>
              )}
              <div style={{ padding: '8px 0 12px', display: 'flex', justifyContent: 'flex-end' }}>
                <button className="search-submit" onClick={handleSearch}>🔍 Search flights</button>
              </div>
            </div>
          )}

          {/* Checkboxes */}
          {trip !== 'ai' && (
            <div className="search-checks">
              <label className="check-item"><input type="checkbox" /> Add nearby airports</label>
              <label className="check-item"><input type="checkbox" /> Direct flights only</label>
              <label className="check-item"><input type="checkbox" /> ✓ Add a place to stay</label>
            </div>
          )}
        </>
      )}

      {/* Hotels/Cars/Packages */}
      {tab !== 'flights' && (
        <div style={{ padding: '24px' }}>
          <p style={{ color: '#64748B', fontSize: '15px', marginBottom: '20px' }}>
            {tab === 'hotels' && 'Search and compare 3,000,000+ hotels worldwide'}
            {tab === 'cars' && 'Compare car hire from 900+ suppliers worldwide'}
            {tab === 'packages' && 'Find flight + hotel packages and activities'}
          </p>
          <button className="search-submit" style={{ width: '100%', justifyContent: 'center' }} onClick={handleSearch}>
            🔍 Search {tab === 'hotels' ? 'Hotels' : tab === 'cars' ? 'Cars' : 'Packages'}
          </button>
        </div>
      )}
    </div>
  );
}
