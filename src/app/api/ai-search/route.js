export async function POST(req) {
  try {
    const { query } = await req.json();
    if (!query) return Response.json({ error: 'No query' }, { status: 400 });

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 500,
        messages: [{
          role: 'user',
          content: `Extract flight search parameters from this query and respond ONLY with JSON (no markdown):
Query: "${query}"

Response format:
{
  "origin": "IATA code (default AMS if Netherlands mentioned or unclear)",
  "originName": "Airport name",
  "dest": "IATA code or empty",
  "destName": "City name",
  "dep": "YYYY-MM-DD or empty",
  "ret": "YYYY-MM-DD or empty",
  "trip": "round or oneway",
  "adults": 1
}

Rules:
- If no origin mentioned, use AMS (Amsterdam)
- If no date, leave empty
- If "one way" mentioned, trip=oneway
- Convert month names to dates in current year 2026
- If no destination, leave dest empty`
        }]
      })
    });

    const data = await res.json();
    const text = data.content?.[0]?.text || '{}';
    const clean = text.replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(clean);
    return Response.json(parsed);
  } catch (e) {
    return Response.json({ origin: 'AMS', originName: 'Amsterdam Schiphol', dest: '', trip: 'round', adults: 1 });
  }
}
