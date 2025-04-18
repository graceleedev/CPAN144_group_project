import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Welcome to Our Reservation Service</h1>
      <p>Find and book a table at your favorite restaurants.</p>
      <Link href="/restaurants">
        <button>Browse Restaurants</button>
      </Link>
    </div>
  );
}