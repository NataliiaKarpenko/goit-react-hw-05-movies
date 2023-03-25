import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { requestMovieReviews } from '../components/APIServices/APIServices';
import { Reviews } from '../components/Reviews/Reviews.jsx';
import { Loader } from '../components/Loader/Loader';
import { ErrorView } from '../components/ErrorView/ErrorView';
import { PaginationContainer } from '../components/Pagination/Pagination.jsx';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  const page = new URLSearchParams(location.search).get('page') ?? 1;

  useEffect(() => {
    setStatus('pending');
    const fetchMovieReviews = async movieId => {
      try {
        const { results, total_pages } = await requestMovieReviews(movieId);

        if (results.length === 0) {
          toast.warning('Sorry, no results found', {
            toastId: 'error',
          });
          setStatus('idle');
          return;
        }

        setReviews(results);
        setTotalPages(total_pages);
        setStatus('resolved');
      } catch (error) {
        console.log(error);
        setError(`❌ ${error.message}`);
        setStatus('rejected');
      }
    };
    fetchMovieReviews(movieId);
    onScrollPage();
  }, [movieId]);

  const onHandlePage = (event, page) => {
    navigate({ ...location, search: `page=${page}` });
  };

  const onScrollPage = () => {
    // setTimeout(() => {
    window.scrollBy({
      top: document.documentElement.clientHeight - 160,
      behavior: 'smooth',
    });
    // }, 1000);
  };

  return (
    <>
      {status === 'pending' && <Loader />}

      {status === 'rejected' && <ErrorView message={error} />}

      {status === 'resolved' && <Reviews reviewsInfo={reviews} />}
      <ToastContainer
        autoClose={3000}
        theme={'colored'}
        position="bottom-center"
        limit={1}
      />
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

export default ReviewsPage;
