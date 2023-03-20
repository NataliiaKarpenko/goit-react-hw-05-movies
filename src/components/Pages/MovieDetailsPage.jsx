import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { MovieDetails } from '../Moviedetails/MovieDetails';
import { requestMovieInfo } from '../APIServices/APIServices';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchMovieInfo = async movieId => {
      try {
        const { poster_path, original_title, popularity, overview, genres } =
          await requestMovieInfo(movieId);
        console.log(movieDetails);

        setMovieDetails({
          src: `https://image.tmdb.org/t/p/w500/${poster_path}`,
          title: original_title,
          score: popularity.toFixed(1),
          overview,
          genres,
        });
        console.log(movieDetails.overview);

        console.log(movieDetails);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieInfo(movieId);
  }, [movieId]);

  return (
    <div>
      <MovieDetails movieDetails={movieDetails} />
    </div>
  );
};
