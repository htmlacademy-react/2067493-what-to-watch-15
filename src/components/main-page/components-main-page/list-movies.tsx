import MovieCard from './movie-card';

export default function ListMovies() {
  return (
    <div className="catalog__films-list">
      {Array.from({ length: 8 }, (_, index) => <MovieCard key={`movie-${index}`} />)}
    </div>
  );
}
