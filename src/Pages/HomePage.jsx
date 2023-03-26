import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { PaginationContainer } from '../components/Pagination/Pagination';
import { requestTrendingMovies } from '../components/APIServices/APIServices';
import { Loader } from '../components/Loader/Loader';
import { MoviesGallery } from '../components/MoviesGallery/MoviesGallery';
import { ErrorView } from '../components/ErrorView/ErrorView';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const [status, setStatus] = useState('pending');
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') ?? 1;

  useEffect(() => {
    const fetchTrendingMovies = async currentPage => {
      try {
        const trendingMovies = await requestTrendingMovies(currentPage);

        setTrendingMovies(trendingMovies.results);
        setTotalPages(trendingMovies.total_pages);
        setStatus('resolved');
      } catch (error) {
        console.log(error);
        setError(`❌${error.message}. Try again later, please.`);
        setStatus('rejected');
      }
    };

    fetchTrendingMovies(page);
  }, [page, setSearchParams]);

  const onHandlePage = (event, newPage) => {
    setSearchParams({ page: newPage });
  };

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <ErrorView message={error} />}
      {status === 'resolved' && (
        <MoviesGallery headline="Trending movies" movies={trendingMovies} />
      )}
      {totalPages > 1 && (
        <PaginationContainer
          count={totalPages}
          onChange={onHandlePage}
          page={Number(page)}
          showFirstButton
          showLastButton
        />
      )}
    </>
  );
};

export default HomePage;
