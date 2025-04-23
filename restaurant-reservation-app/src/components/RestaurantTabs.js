import { useState } from 'react';  // Importing useState hook from React for state management
import Overview from './Overview'; // Importing Overview component
import RestaurantImage from './RestaurantImage'; // Importing RestaurantImage component
import Reviews from './Reviews'; // Importing Reviews component

// Functional component for rendering tabs for restaurant details (overview, photos, reviews)
export default function RestaurantTabs({ restaurant }) {
  // State to manage the active tab (defaults to 'overview')
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div>
       {/* Tab navigation bar */}
      <div className="flex space-x-4 mb-4 border-b pb-2">
         {/* Map over tab names ('overview', 'photos', 'reviews') to generate buttons */}
        {['overview', 'photos', 'reviews'].map(tab => (
          // Button for each tab. The active tab is highlighted with bold text and blue color
          <button
            key={tab} // Unique key for each button
            onClick={() => setActiveTab(tab)} // Set active tab when clicked
            className={`capitalize ${activeTab === tab ? 'font-bold text-blue-600' : 'text-gray-500'}`}
          >
            {tab}  {/* Display the tab name */}
          </button>
        ))}
      </div>

      {/* Render content based on active tab */}
      {activeTab === 'overview' && <Overview description={restaurant.description} />}
      {activeTab === 'photos' && <RestaurantImage images={restaurant.images} />}
      {activeTab === 'reviews' && <Reviews reviews={restaurant.reviews} />}
    </div>
  );
}
