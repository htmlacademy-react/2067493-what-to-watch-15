
type RatingAddReviewProps = {
  state: {
    comment: string;
    rating: number;
  };
  onChange: (rating: string) => void;
  index: number;
}
export default function RatingAddReview({ state, onChange, index }: RatingAddReviewProps): JSX.Element {
  return (
    <>
      <input className="rating__input" id={`star-${10 - index}`} type="radio" name="rating" value={`${10 - index}`} checked={state.rating === 10 - index} onChange={(evt) => {
        onChange(evt.target.value);
      }}
      />
      <label className="rating__label" htmlFor={`star-${10 - index}`}>Rating {10 - index}</label>
    </>
  );
}
