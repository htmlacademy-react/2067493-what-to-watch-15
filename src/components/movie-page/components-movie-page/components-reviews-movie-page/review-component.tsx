import { TypeComment } from '../../../../mocks/type-mocks';
import { formatDate } from '../../../../const';
import { getDateFormate } from '../../../../mocks/utils-mocks';
type TypePropsReviewComponent = {
  comment: TypeComment;
}
export default function ReviewComponent({comment}: TypePropsReviewComponent): JSX.Element {

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user}</cite>
          <time className="review__date" dateTime={getDateFormate(comment.date, formatDate.dataReviewDataTime)}>{getDateFormate(comment.date, formatDate.dataReview)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>
  );
}
