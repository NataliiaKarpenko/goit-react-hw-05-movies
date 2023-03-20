import { MovieItem } from '../MovieItem/MovieItem';

export const MoviesGallery = ({ trendingMovies }) => {
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(movie => {
          return <MovieItem key={movie.id} movie={movie} />;
        })}
      </ul>
    </div>
  );
};
