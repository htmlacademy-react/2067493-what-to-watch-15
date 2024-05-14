import { Link, useParams } from 'react-router-dom';
import { TypeMoviesPage, TypeMoviePage } from '../../mocks/type-mocks';
import Page404 from '../page404/page404';
type TypePropsPlayerPage = {
  promoMovie: TypeMoviePage;
  moviesPage: TypeMoviesPage;
}
export default function PlayerPage({ promoMovie, moviesPage }: TypePropsPlayerPage): JSX.Element {
  const params = useParams();
  const movie = params.id === promoMovie.id ? promoMovie : moviesPage.find((movieItem) => movieItem.id === params.id);

  return (
    movie ?
      <div className="player">
        <video src={movie.videoLink} className="player__video" poster={movie.posterImage} preload='auto'></video>

        <Link to={`/films/${movie.id}`}><button type="button" className="player__exit">Exit</button></Link>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{ left: '30%' }}> Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div> :
      <Page404 />
  );
}
