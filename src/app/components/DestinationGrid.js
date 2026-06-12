import Image from 'next/image';
import Link from 'next/link';

const DEFAULT_DESTS = [
  { city: 'Dubai',     country: 'UAE',       price: 199, slug: 'dubai',     img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop' },
  { city: 'Istanbul',  country: 'Turkey',    price: 89,  slug: 'istanbul',  img: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=600&fit=crop' },
  { city: 'Marrakech', country: 'Morocco',   price: 129, slug: 'marrakech', img: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800&h=600&fit=crop' },
  { city: 'Barcelona', country: 'Spain',     price: 59,  slug: 'barcelona', img: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop' },
  { city: 'Cairo',     country: 'Egypt',     price: 199, slug: 'cairo',     img: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&h=600&fit=crop' },
  { city: 'Bali',      country: 'Indonesia', price: 499, slug: 'bali',      img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop' },
];

export default function DestinationGrid({ dests = DEFAULT_DESTS, locale = 'en' }) {
  return (
    <div className="dest-grid">
      {dests.map((dest, i) => (
        <Link key={dest.slug} href={`/${locale}/flights-to/${dest.slug}`} className="dest-card">
          <img
            src={dest.img}
            alt={dest.city}
            loading={i === 0 ? 'eager' : 'lazy'}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className="dest-overlay">
            <div className="dest-city">{dest.city}</div>
            <div className="dest-country">{dest.country}</div>
            <div className="dest-price">from €{dest.price}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
