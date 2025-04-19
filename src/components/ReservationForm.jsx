import { useState } from 'react';
import styles from './reservation.module.css';

export default function ReservationForm({ restaurantId }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState(2);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Reserve', { restaurantId, date, time, partySize });
    alert(`Reserved for ${partySize} on ${date} at ${time}`);
  };

  return (
    <div className={styles.container}>
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
      <img src="https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1297145.jpg" alt="Giulietta" width='600px' style={{marginTop: '20px'}}/>
    </div> 
  );
}
