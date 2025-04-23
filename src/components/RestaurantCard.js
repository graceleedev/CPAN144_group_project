import Link from 'next/link';
import styles from '../styles/Card.module.css';

export default function RestaurantCard({ restaurant }) {
  return (
      <div className={styles.container}>
        <div className={styles.imgWrapper}>
        <Link href={`/restaurant/${restaurant.id}`} className={styles.link}>
        <img src={restaurant.imageUrl} alt="" className={styles.img}></img>
          {/* <button className={styles.button}>View Details & Reserve</button> */}
        </Link>
        </div>
        <h2 className={styles.h2}>{restaurant.name}</h2>
        {/* <p className={styles.p}>Category: <strong>{restaurant.category}</strong> </p> */}
        <p className={styles.p}>Rating: {restaurant.rating} ⭐ ({restaurant.reviews} reviews)</p>
      </div>
  );
}
