import { useState } from 'react';
import RatingAddReview from './rating-add-review';

export default function FormAddReview(): JSX.Element {
  const [state, setState] = useState({
    comment: '',
    rating: 8
  });

  const handleOnChangeRating = (rating: string): void => {
    setState({
      ...state,
      rating: Number(rating)
    });
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {Array.from({ length: 10 }, (_,index) => (
            <RatingAddReview key={`star-${10 - index}`} state={state} onChange={handleOnChangeRating} index={index}/>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          onChange={(evt) =>
            setState({
              ...state,
              comment: evt.target.value
            })}
          className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={state.comment}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form >
  );
}
