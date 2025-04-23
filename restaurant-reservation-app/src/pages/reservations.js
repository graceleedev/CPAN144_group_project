'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import { restaurants } from '@/data/restaurants';
import styles from '../styles/reservation.module.css';


export default function MyReservations() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    const query = {
      restaurantId: searchParams.get('restaurantId'),
      date: searchParams.get('date'),
      time: searchParams.get('time'),
      partySize: searchParams.get('partySize'),
    };

    const stored = localStorage.getItem('latestReservation');

    if (query.restaurantId && query.date && query.time && !stored) {
      localStorage.setItem('latestReservation', JSON.stringify(query));
      setReservation(query);
    } else if (stored) {
      setReservation(JSON.parse(stored));
    }
  }, [searchParams]);

  const handleClear = () => {
    localStorage.removeItem('latestReservation');
    setReservation(null);
    history.replaceState(null, '', pathname);
  };

  if (!reservation) {
    return <p>No reservations have been booked yet.</p>
  } 

  const { restaurantId, date, time, partySize } = reservation;
  const restaurant = restaurants.find(r => r.id === restaurantId);

  return (
    <div className={styles.container}>
      <h1>My Reservations</h1>
      <ul>
        <li>Restaurant: {restaurant?.name}</li>
        <li>Date: {date}</li>
        <li>Time: {time}</li>
        <li>Party Size: {partySize}</li>
        <button onClick={handleClear}>Clear Reservation</button>
      </ul>
    </div>
  );
}
