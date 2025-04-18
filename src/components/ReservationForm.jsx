import { useState } from 'react';

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
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <div>
        <label>Date: 
          <input type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>Time: 
          <input type="time"
            value={time}
            onChange={e => setTime(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>Party Size: 
          <input type="number" min="1" max="20"
            value={partySize}
            onChange={e => setPartySize(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Reserve</button>
    </form>
  );
}
