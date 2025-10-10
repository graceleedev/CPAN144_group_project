'use client'; // Enables client-side features like state and routing in a Next.js app

import { useState, useEffect } from 'react'; // Importing necessary hooks and modules
import styles from '../styles/Form.module.css'; // Import custom CSS module for styling
import { restaurants } from '@/data/restaurants'; // Import mock restaurant data
import { useRouter } from 'next/router'; // Import routing hook from Next.js

// Functional component that handles the reservation form
export default function ReservationForm({ restaurantId }) {
  const router = useRouter(); // Initialize the Next.js router

  // React state variables to manage user input
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState(2);
  const [validationMessage, setValidationMessage] = useState('');

   // Find the restaurant based on the provided restaurantId
  const restaurant = restaurants.find(r => r.id === restaurantId);

  // Live validation
  useEffect(() => {
    if (date && !time) {
      setValidationMessage('Please select a time.');
    } else {
      setValidationMessage('');
    }
  }, [date, time]);

    // Function to handle form submission
  const handleSubmit = e => {
    e.preventDefault(); // Prevents default form submission (page reload)

    if (!date || !time) {
      setValidationMessage('Please select both date and time.');
      return;
    }

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
    <div className={styles.container}>
      {/* Reservation form */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.div}>
          <label>Date: 
            <input type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              className={styles.input}
            />
          </label>
        </div>

        {/* Time input */}
        <div>
          <label>Time: 
            <input type="time"
              value={time}
              onChange={e => setTime(e.target.value)}
              className={styles.input}
            />
          </label>
        </div>

         {/* Party size input */}
        <div>
          <label>Party Size: 
            <input type="number" min="1" max="20"
              value={partySize}
              onChange={e => setPartySize(e.target.value)}
              className={styles.input}
            />
          </label>
        </div>

        {/* Submit button */}
        <button type="submit" 
          className={styles.button}>Reserve</button>
        {validationMessage && (
            <p style={{ color: 'red', fontSize: '0.9rem' }}>{validationMessage}</p>
          )}
      </form>


    </div> 
  );
}
