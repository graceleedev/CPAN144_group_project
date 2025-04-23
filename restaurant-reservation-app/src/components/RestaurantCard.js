// Functional component that displays individual restaurant card details
import Link from 'next/link';

// Importing CSS module styles 
import styles from '../styles/Card.module.css';

// Functional component that displays individual restaurant card details
export default function RestaurantCard({ restaurant }) {
  return (
      // Main container for the card
      <div className={styles.container}>

         {/* Wrapper for the image and link */}
        <div className={styles.imgWrapper}>

        {/* Clickable link that navigates to the specific restaurant's page using its ID */}
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
