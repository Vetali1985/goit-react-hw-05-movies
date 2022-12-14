import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchReviews } from '../../service/fetchService';

import { Paragraf } from './Reviews.styled';
import { Wrapper } from 'components/MovieDetails/MovieDetails.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    fetchReviews(movieId)
      .then(setReviews)
      .catch(e => console.log(e.message));
  }, [movieId]);

  return (
    <Wrapper>
      {!!reviews.length ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <Paragraf>We don't have any reviews for this movie</Paragraf>
      )}
    </Wrapper>
  );
};
export default Reviews;
