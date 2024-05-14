type TypePropsShowMoreButtonComponent = {
  moviesCount: number;
  renderMoviesCount: number;
  onClick: () => void;
}
export default function ShowMoreButtonComponent({ moviesCount, renderMoviesCount, onClick}: TypePropsShowMoreButtonComponent): JSX.Element | string {
  return (
    renderMoviesCount < moviesCount ?
      <div className="catalog__more">
        <button className="catalog__button" type="button" onClick={onClick}>Show more</button>
      </div> : ''
  );
}
