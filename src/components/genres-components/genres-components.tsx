type TypePropsGenresComponents = {
  genre: string;
  stateGenres: string;
  onClickGenres: (evt: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function GenresComponents({genre, stateGenres, onClickGenres}: TypePropsGenresComponents): JSX.Element {
  const activeClass = 'catalog__genres-item--active';
  return (
    <li className={`catalog__genres-item ${genre === stateGenres ? activeClass : ''}`}>
      <a href="#" className="catalog__genres-link" onClick={onClickGenres}>{genre}</a>
    </li>
  );
}
