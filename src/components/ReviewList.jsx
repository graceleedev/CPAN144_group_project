export default function ReviewList({ reviews }) {
    if (!reviews.length) return <p>No reviews yet.</p>;
  
    return (
      <ul>
        {reviews.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
    );
  }
  