import { useRouter } from 'next/router';
import { restaurants } from '../../data/restaurants';
import ReservationForm from '../../components/ReservationForm.js';
import ReviewList from '../../components/ReviewList';

export default function RestaurantDetail() {
  const { query: { id } } = useRouter();
  const restaurant = restaurants.find(r => r.id === id);

  if (!restaurant) return <p>Loading… or Restaurant not found.</p>;

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>Location: {restaurant.location}</p>

      <iframe
        src={restaurant.mapUrl}
        width="300"
        height="200"
        style={{ border: 0 }}
      />

      <h2>Make a Reservation</h2>
      <ReservationForm restaurantId={restaurant.id} />

      <h2>Reviews</h2>
      <ReviewList reviews={[  'Giulietta in Toronto offers a consistently "amazing experience" with "outstanding food" and "exceptional service." Diners rave about its "beautifully designed ambiance" and standout dishes like the "grilled octopus" and "lobster risotto."', 'Overall the food was fresh and delicious and the portions were also very good. The fresh pasta in the ragu was made to perfection. Our main critiques are we were seated 20 minutes into our reservation time. We also reserved a counter seat but were placed at the bar. ' ]} />
    </div>
  );
}
