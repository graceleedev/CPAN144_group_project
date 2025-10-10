// Component to render a simple styled list of review texts
export default function ReviewList({ reviews }) {

   // If there are no reviews, display a fallback message
    if (!reviews.length) return <p>No reviews yet.</p>;
  
    return (
      // Unordered list to contain all review items
      <ul>
        {/* Loop through the reviews array and render each review as a list item */}
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
  