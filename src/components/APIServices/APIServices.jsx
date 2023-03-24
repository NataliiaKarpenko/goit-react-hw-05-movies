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

export const requestTrendingMovies = async page => {
  const trendingMoviesResponse = await axios.get(
    `${URL}${REQUEST.trendingMovies}?api_key=${API_KEY}&page=${page}&${REQUEST.restrictions}`
  );

  const { data } = trendingMoviesResponse;

  return data;
};

export const requestMoviesByQuery = async (query, page) => {
  // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
  const moviesByQueryResponse = await axios.get(
    `${URL}${REQUEST.moviesByQuery}?api_key=${API_KEY}&${REQUEST.lang}&${REQUEST.restrictions}&query=${query}&page=${page}`
  );

  const { data } = moviesByQueryResponse;

  return data;
};

export const requestMovieInfo = async id => {
  // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  const movieInfoResponse = await axios.get(
    `${URL}${REQUEST.movie}/${id}?api_key=${API_KEY}&${REQUEST.lang}`
  );

  const { data } = movieInfoResponse;

  return data;
};

export const requestMovieCredits = async id => {
  // https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
  const moviesCreditsResponse = await axios.get(
    `${URL}${REQUEST.movie}/${id}${REQUEST.credits}?api_key=${API_KEY}&${REQUEST.lang}`
  );

  const { data } = moviesCreditsResponse;
  const moviesCreditsArr = data.cast;
  return moviesCreditsArr;
};

export const requestMovieReviews = async (id, page = 1) => {
  // https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
  const movieReviewsResponse = await axios.get(
    `${URL}${REQUEST.movie}/${id}${REQUEST.reviews}?api_key=${API_KEY}&${REQUEST.lang}&page=${page}`
  );

  const { data } = movieReviewsResponse;

  return data;
};
