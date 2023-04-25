import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { resultReviews } from '../Api/Api';
import { WrapperElementReviews, WrapperListReview, WrapperReviewContent } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const response = await resultReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 && (
        <h3>We don't have any reviews for this movie.</h3>
      )}
      <WrapperListReview>
        {reviews.map(review => (
          <WrapperElementReviews key={review.id}>
            <div>
              <WrapperReviewContent>{review.author}</WrapperReviewContent>
              <span style={{ display: 'block' }}>{review.content}</span>
            </div>
          </WrapperElementReviews>
        ))}
      </WrapperListReview>
    </div>
  );
};

export default Reviews;