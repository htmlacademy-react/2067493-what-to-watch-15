import { TypeMoviePage } from '../../../../mocks/type-mocks';

type TypePropsComponentOverviewMoviePage = {
  movie: TypeMoviePage;
}

export default function ComponentOverviewMoviePage({movie}: TypePropsComponentOverviewMoviePage): JSX.Element {
  const getMovieScore = (rating: number): string => {
    if (rating > 3) {
      if(rating < 5) {
        return 'Normal';
      }
      if(rating < 8) {
        return 'Good';
      }
      if (rating < 10) {
        return 'Very Good';
      }
      if (rating === 10) {
        return 'Awasome';
      }
    }
    return 'Bad';
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{movie.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getMovieScore(movie.rating)}</span>
          <span className="film-rating__count">{movie.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{movie.description}</p>

        <p className="film-card__director"><strong>Director: {movie.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {movie.starring.join(', ')}</strong></p>
      </div>
    </>
  );
}
