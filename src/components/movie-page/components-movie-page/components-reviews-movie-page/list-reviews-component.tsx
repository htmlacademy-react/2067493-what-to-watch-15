import { TypeComment } from '../../../../mocks/type-mocks';
import ReviewComponent from './review-component';
type TypePropsListReviewsComponent = {
  comments: TypeComment[];
}
export default function ListReviwsComponent({ comments }: TypePropsListReviewsComponent): JSX.Element {

  if (comments.length <= 1) {
    return (
      <div className="film-card__reviews-col">
        {comments.map((comment) => <ReviewComponent key={`comment-${comment.id}`} comment={comment} />)}
      </div>
    );
  }

  return (
    <>
      <div className="film-card__reviews-col">
        {comments.slice(0, Math.ceil(comments.length / 2)).map((comment) => <ReviewComponent key={`comment-${comment.id}`} comment={comment} />)}
      </div>
      <div className="film-card__reviews-col">
        {comments.slice(Math.ceil(comments.length / 2), comments.length).map((comment) => <ReviewComponent key={`comment-${comment.id}`} comment={comment} />)}
      </div>
    </>
  );
}
