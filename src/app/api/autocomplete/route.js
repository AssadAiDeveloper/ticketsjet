export async function GET(req) {
  const q = new URL(req.url).searchParams.get('q') || '';
  if (q.length < 2) return Response.json([]);
  try {
    const res = await fetch(`https://autocomplete.travelpayouts.com/places2?term=${encodeURIComponent(q)}&locale=en&types=airport,city&limit=8`, { next: { revalidate: 86400 } });
    if (!res.ok) return Response.json([]);
    return Response.json(await res.json(), { headers: { 'Cache-Control': 'public,max-age=86400' } });
  } catch { return Response.json([]); }
}
