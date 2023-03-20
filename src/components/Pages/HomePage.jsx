import { useState, useEffect } from 'react';

import { requestTrendingMovies } from '../APIServices/APIServices';
import { Loader } from '../Loader/Loader';
import { MoviesGallery } from '../MoviesGallery/MoviesGallery';

export const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchTrendingMovies = async () => {
      try {
        const trendingMovies = await requestTrendingMovies();
        console.log(trendingMovies);
        setTrendingMovies(trendingMovies);
        console.log(trendingMovies);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      <MoviesGallery trendingMovies={trendingMovies} />
    </div>
  );
};
