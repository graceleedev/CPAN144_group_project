import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.contact}>
        <p>Have questions? Contact us directly!</p>
        <span>Email: </span><a href="mailto:bistrotable@outlook.ca">bistrotable@outlook.ca</a><br />
        <span>Phone: </span><a href="tel:1-800-493-2950">1-800-493-2950</a>
      </div>

      <div className={styles.quickLink}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/reservations">My reservation</a></li>
        </ul>
      </div>

      <div className={styles.policy}>
        <ul>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Terms of Use</a></li>
          <li><a href="/">Cookies and Interest-Based Ads</a></li>
          <li><a href="/">Cookie Preferences</a></li>
        </ul>
      </div>
    </footer>
  );
}
