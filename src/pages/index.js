import Link from 'next/link';
import styles from '../styles/index.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.heroImg}>
        <h1 className={styles.title}>Share bites and moments <br/> with the ones you love</h1>
      </div>
    </>
  );
}