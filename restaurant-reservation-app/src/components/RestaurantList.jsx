import RestaurantCard from './RestaurantCard';
import styles from './Card.module.css';

export default function RestaurantList({ list }) {
  if (list.length === 0) return <p>No restaurants found.</p>;

  return (
    <div className={styles.card}>
      {list.map(r => (
        <div className={styles.cardItem}>
        <RestaurantCard key={r.id} restaurant={r} />
        </div>
      ))}
    </div>
  );
}
