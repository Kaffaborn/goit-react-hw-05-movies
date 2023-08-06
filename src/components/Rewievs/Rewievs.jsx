import getReviews from 'components/API/getReviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Rewievs = () => {
  const [reviews, setReviews] = useState([]);
  const { filmId } = useParams();
  useEffect(() => {
    getReviews(filmId)
      .then(response => setReviews(response.results.slice(0, 5)))
      .catch(err => console.error(err));
  }, [filmId]);
  return reviews.length > 0 ? (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <p>We don't have any reviews for this movie.</p>
  );
};
export default Rewievs;
