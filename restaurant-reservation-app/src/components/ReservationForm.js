'use client'; // Enables client-side features like state and routing in a Next.js app

import { useState } from 'react'; // Importing necessary hooks and modules
import styles from '../styles/reservation.module.css'; // Import custom CSS module for styling
import { restaurants } from '@/data/restaurants'; // Import mock restaurant data
import { useRouter } from 'next/router'; // Import routing hook from Next.js

// Functional component that handles the reservation form
export default function ReservationForm({ restaurantId }) {
  const router = useRouter(); // Initialize the Next.js router

  // React state variables to manage user input
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState(2);

   // Find the restaurant based on the provided restaurantId
  const restaurant = restaurants.find(r => r.id === restaurantId);

    // Function to handle form submission
  const handleSubmit = e => {
    e.preventDefault(); // Prevents default form submission (page reload)

    // Log and show an alert for confirmation
    console.log('Reserve', { restaurantId, date, time, partySize });
    alert(`Reserved for ${partySize} on ${date} at ${time}`);
    
    // Create a reservation object
    const reservation = {
      restaurantId,
      date,
      time,
      partySize,
    };

    // Save the reservation in localStorage
    localStorage.setItem('latestReservation', JSON.stringify(reservation));
    
    // Redirect to the reservations page with query parameters
    router.push({
      pathname: '/reservations',
      query: reservation,
    });
  };

  return (
    <div>
      {/* Reservation form */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.div}>
          <label>Date: 
            <input type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              style={{
                padding: '10px',
                margin: '5px',
                border: 'none',
                backgroundColor: 'lightgray',
                borderRadius: '5px',
                fontSize: '16px',
                width: '360px'
              }}
            />
          </label>
        </div>

        {/* Time input */}
        <div className={styles.div}>
          <label>Time: 
            <input type="time"
              value={time}
              onChange={e => setTime(e.target.value)}
              style={{
                padding: '10px',
                margin: '5px',
                border: 'none',
                backgroundColor: 'lightgray',
                borderRadius: '5px',
                fontSize: '16px',
                width: '360px'
              }}
            />
          </label>
        </div>

         {/* Party size input */}
        <div className={styles.div}>
          <label>Party Size: 
            <input type="number" min="1" max="20"
              value={partySize}
              onChange={e => setPartySize(e.target.value)}
              style={{
                padding: '10px',
                margin: '5px',
                border: 'none',
                backgroundColor: 'lightgray',
                borderRadius: '5px',
                fontSize: '16px',
                width: '300px'
              }}
            />
          </label>
        </div>

        {/* Submit button */}
        <button type="submit" 
          style={{
            backgroundColor: '#FFAC32',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            }}>Reserve</button>
      </form>

      {/* Restaurant confirmation (can be expanded to show more info) */}
      <div className={styles.container}>
      {restaurant ? (
        <div>
          {/* <h2>{restaurant.name}</h2> */}
          {/* <img
            src={restaurant.imageUrl}
            alt={restaurant.name}
            className={styles.image}
          /> */}
        </div>
      ) : (
        <p>Restaurant not found</p>
      )}
    </div>
    </div> 
  );
}
