import Link from 'next/link';
import styles from './Card.module.css';

export default function RestaurantCard({ restaurant }) {
  return (
    <div className={`${styles[restaurant.className]}`}>
      <div  className={styles.container}>
        <h2 className={styles.h2}>{restaurant.name}</h2>
        <p className={styles.p}>Category: <strong>{restaurant.category}</strong> </p>
        <p className={styles.p}>Rating: {restaurant.rating} ⭐ ({restaurant.reviews} reviews)</p>
        <Link href={`/restaurant/${restaurant.id}`}>
          <button className={styles.button}>View Details & Reserve</button>
        </Link>
      </div>
    </div>
  );
}
