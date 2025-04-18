import { useState } from 'react';
import { restaurants, categories } from '../data/restaurants';
import RestaurantList from '../components/RestaurantList';

export default function RestaurantsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered =
    selectedCategory === 'All'
      ? restaurants
      : restaurants.filter(r => r.category === selectedCategory);

  return (
    <div>
      <h1>Restaurants</h1>

      {/* Category filter */}
      <select
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
      >
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {/* List of restaurants */}
      <RestaurantList list={filtered} />
    </div>
  );
}
