import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const API_KEY = '60bdd84997c9f2a4c6cd2341c547ed98';
const REQUEST = {
  trendingMovies: '/trending/movie/day',
  moviesByQuery: '/search/movie',
  movie: '/movie',
  credits: '/credits',
  reviews: '/reviews',
  lang: 'language=en-US',
  restrictions: 'include_adult=false',
};

export const requestTrendingMovies = async (page = 1) => {
  const trendingMoviesResponse = await axios.get(
    `${URL}${REQUEST.trendingMovies}?api_key=${API_KEY}&page=${page}&${REQUEST.restrictions}`
  );

  const { data } = trendingMoviesResponse;
  const trendingMoviesArr = data.results;
  return trendingMoviesArr;
};

export const fetchMoviesByQuery = async (query, page = 1) => {
  // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
  const moviesByQueryResponse = await axios.get(
    `${URL}${REQUEST.moviesByQuery}?api_key=${API_KEY}&${REQUEST.lang}&${REQUEST.restrictions}&query=${query}&page=${page}`
  );

  const { data } = moviesByQueryResponse;
  const moviesByQueryArr = data.results;
  console.log(moviesByQueryArr);
  return moviesByQueryArr;
};

fetchMoviesByQuery('dog');

export const requestMovieInfo = async id => {
  // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  const movieInfoResponse = await axios.get(
    `${URL}${REQUEST.movie}/${id}?api_key=${API_KEY}&${REQUEST.lang}`
  );

  const { data } = movieInfoResponse;
  console.log(data.overview);

  return data;
};
requestMovieInfo(626735);

export const fetchMovieCredits = async id => {
  // https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
  const moviesCreditsResponse = await axios.get(
    `${URL}${REQUEST.movie}/${id}${REQUEST.credits}?api_key=${API_KEY}&${REQUEST.lang}`
  );
  console.log(moviesCreditsResponse);
  return moviesCreditsResponse;
};

fetchMovieCredits(881164);

export const fetchMovieReviews = async (id, page = 1) => {
  // https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
  const movieReviewsResponse = await axios.get(
    `${URL}${REQUEST.movie}/${id}${REQUEST.reviews}?api_key=${API_KEY}&${REQUEST.lang}&page=${page}`
  );

  console.log(movieReviewsResponse);
  return movieReviewsResponse;
};

fetchMovieReviews(881164);
