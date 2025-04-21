import Link from 'next/link';
import styles from './Card.module.css';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" style={{ marginRight: '1rem' }}>
        Home
      </Link>
      <Link href="/restaurants" style={{ marginRight: '1rem' }}>
        Restaurants
      </Link>
      <Link href="/reservations">
        My Reservations
      </Link>
    </nav>
  );}