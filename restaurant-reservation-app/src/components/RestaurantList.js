import RestaurantCard from './RestaurantCard'; // Importing the RestaurantCard component to display each restaurant
import styles from '../styles/RestaurantList.module.css'; // Importing CSS module for styling

// Functional component to render a list of restaurants
export default function RestaurantList({ list }) {
  // If the list is empty, display a message indicating no restaurants were found
  if (list.length === 0) return <p>No restaurants found.</p>;

  return (
    <div>
     {/* Section heading for the list */}
    <h2 className={styles.title}>Cozy restaurants in Toronto</h2>

     {/* Grid layout for displaying restaurant cards */}
    <div className={styles.grid}>
      {/* Loop over the list of restaurants and display each as a RestaurantCard */}
      {list.map(r => (
        <div key={r.id} className={styles.listItem}>
           {/* Render a RestaurantCard for each restaurant in the list */}
          <RestaurantCard restaurant={r} />
        </div>
      ))}
    </div>
    </div>
  );
}
