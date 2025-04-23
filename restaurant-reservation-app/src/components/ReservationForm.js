'use client';

import { useState } from 'react';
import styles from '../styles/reservation.module.css';
import { restaurants } from '@/data/Restaurants';
import { useRouter } from 'next/router';

export default function ReservationForm({ restaurantId }) {
  const router = useRouter();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState(2);

  const restaurant = restaurants.find(r => r.id === restaurantId);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Reserve', { restaurantId, date, time, partySize });
    alert(`Reserved for ${partySize} on ${date} at ${time}`);
    const reservation = {
      restaurantId,
      date,
      time,
      partySize,
    };

    localStorage.setItem('latestReservation', JSON.stringify(reservation));

    router.push({
      pathname: '/reservations',
      query: reservation,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.div}>
          <label>Date: 
            <input type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </label>
        </div>
        <div className={styles.div}>
          <label>Time: 
            <input type="time"
              value={time}
              onChange={e => setTime(e.target.value)}
            />
          </label>
        </div>
        <div className={styles.div}>
          <label>Party Size: 
            <input type="number" min="1" max="20"
              value={partySize}
              onChange={e => setPartySize(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Reserve</button>
      </form>

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
