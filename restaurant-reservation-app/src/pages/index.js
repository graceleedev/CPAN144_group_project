import Link from 'next/link';
import styles from '../styles/index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
      <h1>Welcome to Our Reservation Service</h1>
      <p>Find and book a table at your favorite restaurants.</p>
      </div>
      
      <Link href="/restaurants">
        <button className={styles.button}>Browse Restaurants</button>
      </Link>
    </div>
  );
}