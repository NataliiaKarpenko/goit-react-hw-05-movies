import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { requestMovieCredits } from '../components/APIServices/APIServices';
import { Cast } from '../components/Cast/Cast';
import { Loader } from '../components/Loader/Loader';
import { ErrorView } from '../components/ErrorView/ErrorView';

const CastPage = () => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pending');
    const fetchMovieCredits = async movieId => {
      try {
        const cast = await requestMovieCredits(movieId);

        if (cast.length === 0) {
          toast.warning('Sorry, no results found', {
            toastId: 'warning1',
          });
          setStatus('idle');
          return;
        }

        setCast(cast);
        setStatus('resolved');
      } catch (error) {
        console.log(error);
        setError(`❌ ${error.message}`);
        setStatus('rejected');
      }
    };
    fetchMovieCredits(movieId);
    onScrollPage();
  }, [movieId]);

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
      <ToastContainer
        autoClose={3000}
        theme={'colored'}
        position="bottom-center"
        limit={1}
      />

      {status === 'pending' && <Loader />}

      {status === 'rejected' && <ErrorView message={error} />}

      {status === 'resolved' && <Cast actingCast={cast} />}
    </>
  );
};

export default CastPage;
