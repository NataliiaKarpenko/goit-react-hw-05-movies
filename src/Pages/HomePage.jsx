import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();
  const location = useLocation();

  const page = new URLSearchParams(location.search).get('page') ?? 1;

  useEffect(() => {
    if (page === 1) navigate({ ...location, search: `page=1` });
  });

  useEffect(() => {
    const fetchTrendingMovies = async page => {
      try {
        const trendingMovies = await requestTrendingMovies(page);
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
  }, [page]);

  const onHandlePage = (event, page) => {
    navigate({ ...location, search: `page=${page}` });
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
        />
      )}
    </>
  );
};

export default HomePage;
