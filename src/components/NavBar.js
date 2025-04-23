import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.logo}>
        <p className={styles.text}>BistroTable</p>
      </Link>
      <Link href="/reservations">
        <button className={styles.button}>My Reservations</button>
      </Link>
    </nav>
  );}