import { useState } from 'react';
import Overview from './Overview';
import Photos from './Photos';
import Reviews from './Reviews';

export default function RestaurantTabs({ restaurant }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div>
      <div className="flex space-x-4 mb-4 border-b pb-2">
        {['overview', 'photos', 'reviews'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`capitalize ${activeTab === tab ? 'font-bold text-blue-600' : 'text-gray-500'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && <Overview description={restaurant.description} />}
      {activeTab === 'photos' && <Photos images={restaurant.images} />}
      {activeTab === 'reviews' && <Reviews reviews={restaurant.reviews} />}
    </div>
  );
}
