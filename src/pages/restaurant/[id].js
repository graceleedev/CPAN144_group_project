import { useRouter } from 'next/router';
import restaurants from '../../data/restaurants';
import RestaurantTabs from '../../components/RestaurantTabs';
import ReservationForm from '../../components/ReservationForm';
import ReviewList from '../../components/ReviewList';

export default function RestaurantDetail() {
  const { query: { id } } = useRouter();
  const restaurant = restaurants.find(r => r.id === id);

  if (!restaurant) return <p>Loading… or Restaurant not found.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>
      <p className="mb-2 text-lg">Location: {restaurant.location}</p>

      {restaurant.mapUrl && (
        <iframe
          src={restaurant.mapUrl}
          width="300"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="mb-6"
        />
      )}

      {/* Optional: Show Restaurant Tabs if component exists */}
      <RestaurantTabs restaurant={restaurant} />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Make a Reservation</h2>
      <ReservationForm restaurantId={restaurant.id} />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Reviews</h2>
      <ReviewList reviews={restaurant.reviews || []} />
    </div>
  );
}
