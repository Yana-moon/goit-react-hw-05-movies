import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const KEY = '774e1d28d884f123afe2adc71c6f8534';

// список найпопулярніших фільмів на гол. стор.

export const resultMovieDay = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
  return response.data.results;
};

//  Повна інформація про фільм 

export const resultOneMovie = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  return response.data;
};

// інформація про акторс. склад 

export const resultCast = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data.cast;
};

//  огляди 

export const resultReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`
  );
  return response.data.results;
};

// пошук фільму за ключовим словом 

export const resultQuery = async filter => {
  const response = await axios.get(
    `/search/movie?query=${filter}&api_key=${KEY}&language=en-US&include_adult=false`
  );
  return response.data.results;
};