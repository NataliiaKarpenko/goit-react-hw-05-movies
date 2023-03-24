import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { MovieDetails } from '../Moviedetails/MovieDetails';
import { requestMovieInfo } from '../APIServices/APIServices';
import { Loader } from 'components/Loader/Loader';
import { ErrorView } from 'components/ErrorView/ErrorView';

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState({
    poster_path: '',
    title: '',
    releaseYear: 0,
    voteAverage: 0,
    overview: '',
    genres: [],
  });

  // const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieInfo = async movieId => {
      try {
        setStatus('pending');

        const {
          poster_path,
          title,
          release_date,
          vote_average,
          overview,
          genres,
        } = await requestMovieInfo(movieId);

        setMovieDetails({
          poster_path: poster_path,
          title,
          releaseYear: new Date(release_date).getFullYear(),
          voteAverage: Math.round(vote_average * 10),
          overview,
          genres,
        });
        setStatus('resolved');
      } catch (error) {
        console.log(error.message);
        setError(`❌${error.message}. Try again later, please.`);
        setStatus('rejected');
      }
    };
    fetchMovieInfo(movieId);
  }, [movieId]);

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <MovieDetails movieDetails={movieDetails} />}
      {status === 'rejected' && <ErrorView message={error} />}
    </>
  );
};

export default MovieDetailsPage;
