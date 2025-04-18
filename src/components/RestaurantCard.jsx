import Link from 'next/link';

export default function RestaurantCard({ restaurant }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem' }}>
      <h2>{restaurant.name}</h2>
      <p>Category: {restaurant.category}</p>
      <p>Rating: {restaurant.rating} ⭐ ({restaurant.reviews} reviews)</p>
      <Link href={`/restaurant/${restaurant.id}`}>
        <button>View Details & Reserve</button>
      </Link>
    </div>
  );
}
