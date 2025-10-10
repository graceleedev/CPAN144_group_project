// Importing Link from Next.js for client-side navigation
import Link from 'next/link';

// Importing CSS module styles specific to the NavBar
import styles from '../styles/NavBar.module.css';

// Functional component for the navigation bar
export default function NavBar() {
  return (
    // The <nav> element represents a navigation section on the page
    <nav className={styles.container}>

       {/* Link to the home page ("/") with styled logo text */}
      <Link href="/" className={styles.logo}>
        <p className={styles.text}>BistroTable</p>
      </Link>

      {/* Link to the reservations page ("/reservations") with a styled button */}
      <Link href="/reservations">
        <button className={styles.button}>My Reservations</button>
      </Link>
    </nav>
  );}