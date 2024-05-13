import GenresComponents from './genres-components';
import { getGenres } from '../../mocks/utils-mocks';
import { useAppDispatch, useAppSelector } from '../../utils';
import { CHANGE_GENRE } from '../../store/actions/action';

export default function GenresListComponents(): JSX.Element {
  const movies = useAppSelector((store) => store.movies);
  const stateGenre = useAppSelector((store) => store.genre);
  const genres = getGenres(movies);
  const dispatch = useAppDispatch();

  const handleClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    const value = evt.currentTarget.textContent;

    if(!value){
      return;
    }

    dispatch(CHANGE_GENRE(value));
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => <GenresComponents key={`genre-${genre}`} genre={genre} stateGenres={stateGenre} onClickGenres={handleClick}/>)}
    </ul>
  );
}
