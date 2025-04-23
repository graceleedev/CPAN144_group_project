import RestaurantCard from './RestaurantCard';
import styles from '../styles/RestaurantList.module.css';

export default function RestaurantList({ list }) {
  if (list.length === 0) return <p>No restaurants found.</p>;

  return (
    <div>
    <h2 className={styles.title}>Cozy restaurants in Toronto</h2>
    <div className={styles.grid}>
      {list.map(r => (
        <div key={r.id} className={styles.listItem}>
          <RestaurantCard restaurant={r} />
        </div>
      ))}
    </div>
    </div>
  );
}
