import Link from 'next/link';

export default function NavBar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link href="/" style={{ marginRight: '1rem' }}>
        Home
      </Link>
      <Link href="/restaurants">
        Restaurants
      </Link>
    </nav>
  );
}