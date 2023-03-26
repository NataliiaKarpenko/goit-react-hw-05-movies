import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { SearchBar } from 'components/SearchBar/SearchBar';
import { SearchView } from 'components/SearchView/SearchView';
import { ErrorView } from 'components/ErrorView/ErrorView';
import { requestMoviesByQuery } from '../components/APIServices/APIServices';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery.jsx';
import { Loader } from 'components/Loader/Loader';
import { PaginationContainer } from '../components/Pagination/Pagination.jsx';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [moviesByQuery, setMoviesByQuery] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const [searchParams, setSearchParams] = useSearchParams();

  const queryValue = searchParams.get('query');
  const page = searchParams.get('page');

  useEffect(() => {
    const fetchMoviesByQuery = async queryValue => {
      if (!queryValue) {
        return;
      }
      try {
        setStatus('pending');

        const moviesByQuery = await requestMoviesByQuery(queryValue, page);

        if (moviesByQuery.results.length === 0) {
          toast.warning(
            'Sorry, there are no movies matching your search query. Please enter another keyword 🔎.',
            {
              toastId: 'warning2',
            }
          );

          setMoviesByQuery([]);
          setStatus('idle');
        } else {
          setMoviesByQuery(moviesByQuery.results);
          setTotalPages(moviesByQuery.total_pages);
          setStatus('resolved');
        }
      } catch (error) {
        console.log(error.message);
        setError(`❌${error.message}. Try again later, please.`);
        setStatus('rejected');
      }
    };

    fetchMoviesByQuery(queryValue);
  }, [queryValue, page]);

  const onFormSubmit = keyword => {
    if (query === keyword) {
      return;
    }
    setQuery(keyword);
    setMoviesByQuery([]);
    setError(null);
    setSearchParams({ query: keyword, page: '1' });
  };

  const onHandlePage = (event, page) => {
    setSearchParams({ query: queryValue, page });
  };

  return (
    <>
      <SearchBar onFormSubmit={onFormSubmit} />
      <ToastContainer autoClose={4000} theme={'colored'} limit={1} />
      {status === 'idle' && <SearchView />}
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <MoviesGallery
          headline="👇 These movies match your query."
          movies={moviesByQuery}
        />
      )}
      {status === 'rejected' && <ErrorView message={error} />}
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

export default MoviesPage;
