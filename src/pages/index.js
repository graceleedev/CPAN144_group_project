import Link from 'next/link';
import styles from '../styles/index.module.css';
import RestaurantList from '../components/RestaurantList';
import { restaurants } from '@/data/Restaurants';

export default function Home() {
  return (
    <>
      <div className={styles.heroImg}>
        <h1 className={styles.title}>Share bites and moments <br/> with the ones you love</h1>
      </div>
      <RestaurantList list={restaurants}/>
    </>
  );
}