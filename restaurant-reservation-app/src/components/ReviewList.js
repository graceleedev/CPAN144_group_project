export default function ReviewList({ reviews }) {
    if (!reviews.length) return <p>No reviews yet.</p>;
  
    return (
      <ul>
        {reviews.map((text, i) => (
          <li key={i} style={{
            backgroundColor: '#D9C0A3',
            borderRadius: '5px',
            padding: '10px',
            marginBottom: '10px',
            listStyleType: 'none'

          }}>{text}</li>
        ))}
      </ul>
    );
  }
  