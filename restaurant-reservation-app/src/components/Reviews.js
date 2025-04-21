export default function Reviews({ reviews }) {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-2">Reviews</h2>
        <ul>
          {reviews.map((review, index) => (
            <li key={index} className="mb-4 border-b pb-2">
              <p className="font-semibold">{review.user}</p>
              <p>⭐ {review.rating}</p>
              <p>{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  