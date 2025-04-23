// Component to display a list of customer reviews
export default function Reviews({ reviews }) {
    return (
      <div>
        {/* Section heading */}
        <h2 className="text-xl font-semibold mb-2">Reviews</h2>

        {/* Unordered list to display individual reviews */}
        <ul>
          {/* Loop through the reviews array and render each review */}
          {reviews.map((review, index) => (
            // Each list item uses a unique key and has bottom margin and border for separation
            <li key={index} className="mb-4 border-b pb-2">
              {/* Display the reviewer's name */}
              <p className="font-semibold">{review.user}</p>

              {/* Display the review rating with a star symbol */}
              <p>⭐ {review.rating}</p>

              {/* Display the review comment */}
              <p>{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  