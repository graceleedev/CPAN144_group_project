import { useRouter } from 'next/router';
import { restaurants } from '../../data/restaurants';
import ReservationForm from '../../components/ReservationForm';
import ReviewList from '../../components/ReviewList';

export default function RestaurantDetail() {
  const { query: { id } } = useRouter();
  const restaurant = restaurants.find(r => r.id === id);

  if (!restaurant) return <p>Loading… or Restaurant not found.</p>;

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>Location: {restaurant.location}</p>
      {/* Placeholder for Maps API */}
      <iframe
        src={restaurant.mapUrl}
        width="300"
        height="200"
        style={{ border: 0 }}
      />

      <h2>Make a Reservation</h2>
      <ReservationForm restaurantId={restaurant.id} />

      <h2>Reviews</h2>
      <ReviewList reviews={[ /* static placeholder */ 'Great!', 'Loved it!' ]} />
    </div>
  );
}
