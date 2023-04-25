import { resultOneMovie } from 'components/Api/Api';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { HiArrowSmLeft } from 'react-icons/hi';
import Notiflix from 'notiflix';
import {WrapperMovieDetails,WrapperAboutMovie,WrapperTextAboutMovie,
        WrapperInformation,WrapperButtonBack,WrapperLoading,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [oneMovie, setOneMovie] = useState('');

  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function getOneMovie() {
      try {
        const response = await resultOneMovie(movieId);
        setOneMovie(response);
      } catch (error) {
        Notiflix.Notify.failure(
          'Sorry, something went wrong, please try again later'
        );
      }
    }
    getOneMovie();
  }, [movieId]);

  const getMovieYear = () => {
    if (oneMovie && oneMovie.release_date) {
      return new Date(oneMovie.release_date).getFullYear();
    }
  };

  const getUserScore = () => {
    return Math.round(oneMovie.vote_average * 10);
  };

  const genresMovie = () => {
    if (oneMovie && oneMovie.genres) {
      const newgenres = oneMovie.genres.map(genre => genre.name);
      return newgenres.join(' ');
    }
  };

  if (!oneMovie) {
    return (
      <b
        style={{
          width: '1280',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          fontWeight: '500',
        }}
      >
        Loading...
      </b>
    );
  }

  const backLinkHref = location.state?.from ?? '/';

  return (
    <main>
      <WrapperMovieDetails>
        <WrapperButtonBack to={backLinkHref}>
          <HiArrowSmLeft size="20" />
          Go back
        </WrapperButtonBack>
        <WrapperAboutMovie>
          {oneMovie && (
            <img
              src={
                oneMovie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${oneMovie.poster_path}`
                  : 'https://via.placeholder.com/300x450?text=No+foto'
              }
              alt={oneMovie.original_title}
              width="300"
              loading="lazy"
            />
          )}
          <WrapperTextAboutMovie>
            <h1>
              {oneMovie.original_title} ({getMovieYear()})
            </h1>
            <p>User score: {getUserScore()}%</p>
            <h2>Overview</h2>
            <p>{oneMovie.overview}</p>
            <h3>Genres</h3>
            <p>{genresMovie()}</p>
          </WrapperTextAboutMovie>
        </WrapperAboutMovie>
        <WrapperInformation>
          <p>Additional Information</p>
          <ul>
            <li>
              <Link to="cast" state={location.state}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={location.state}>
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense fallback={<WrapperLoading>Loading subpage...</WrapperLoading>}>
            <Outlet />
          </Suspense>
        </WrapperInformation>
      </WrapperMovieDetails>
    </main>
  );
};

export default MovieDetails;