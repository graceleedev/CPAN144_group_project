import { useRouter } from 'next/router';
import restaurants from '../../data/restaurants';
import RestaurantTabs from '../../components/RestaurantTabs';

export default function RestaurantPage() {
  const router = useRouter();
  const { id } = router.query;

  const restaurant = restaurants.find(r => r.id === id);

  if (!restaurant) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>
      <RestaurantTabs restaurant={restaurant} />
    </div>
  );
}
