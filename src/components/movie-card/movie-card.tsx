import { Link } from 'react-router-dom';
import { TypeMovieCard } from '../../mocks/type-mocks';
import { useEffect, useRef } from 'react';

type TypePropsMovieCard = {
  movie: TypeMovieCard;
  onMouseOverCapture: (value: string) => void;
  onMouseOutCapture: () => void;
  movieIdPlaying: string;
}
export default function MovieCard({ movie, onMouseOverCapture, onMouseOutCapture, movieIdPlaying}: TypePropsMovieCard): JSX.Element {
  const movieLink = `/films/${movie.id}`;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isPlay = movieIdPlaying === movie.id;

  useEffect(() => {
    const playerElement = videoRef.current;

    if(!playerElement) {
      return;
    }

    if(!isPlay) {
      return;
    }

    const timeout = setTimeout(() => {
      playerElement.play();
    }, 1000);

    return () => {
      playerElement.load();
      clearTimeout(timeout);
    };
  });


  return (
    <article
      onMouseOver={() => {
        onMouseOverCapture(movie.id);
      }}
      onMouseOut={onMouseOutCapture}
      className="small-film-card catalog__films-card"
    >
      <Link to={movieLink}>
        <div className="small-film-card__image">
          <video src={movie.previewVideoLink} poster={movie.previewImage} ref={videoRef} width="280" height="175" loop muted/>
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <Link to={movieLink} className="small-film-card__link" >{movie.name}</Link>
      </h3>
    </article>
  );
}
