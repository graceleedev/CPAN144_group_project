import RestaurantCard from './RestaurantCard';

export default function RestaurantList({ list }) {
  if (list.length === 0) return <p>No restaurants found.</p>;

  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      {list.map(r => (
        <RestaurantCard key={r.id} restaurant={r} />
      ))}
    </div>
  );
}
