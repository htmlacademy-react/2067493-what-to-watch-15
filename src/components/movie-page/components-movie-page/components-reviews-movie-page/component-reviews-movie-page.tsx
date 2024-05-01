import { TypeMoviePage } from '../../../../mocks/type-mocks';
import { TypeReviews, } from '../../../../mocks/type-mocks';
import ReviewComponent from './review-component';

type TypePropsReviewsMoviePage = {
  movie: TypeMoviePage;
  reviews: TypeReviews;
};

export default function ComponentReviewsMoviePage({ movie, reviews }: TypePropsReviewsMoviePage): JSX.Element {
  const comments = reviews.find((item) => movie.id === item.movieId);
  return (
    <div className="film-card__reviews film-card__row">
      {comments ?
        <div className="film-card__reviews-col">
          {comments.comments.map((item) => (<ReviewComponent key={item.id} comment={item} />))}
        </div> : ''}
    </div>
  );
}
