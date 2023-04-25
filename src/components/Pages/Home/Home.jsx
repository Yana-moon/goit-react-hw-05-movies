import { resultMovieDay } from 'components/Api/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Notiflix from 'notiflix';
import { WrapperHome, WrapperHomeList} from './Home.styled';

const Home = () => {
  const [movieDay, setMovieDay] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function resultMovie() {
      try {
        const response = await resultMovieDay();
        const arr = response.map(el => ({
          title: el.title,
          id: el.id,
        }));
        setMovieDay(arr);
      } catch (error) {
        Notiflix.Notify.failure(
          'Sorry, something went wrong, please try again later'
        );
      }
    }
    resultMovie();
  }, []);

  return (
    <main>
      <WrapperHome>
        <h1>The most popular movies at this day</h1>
        <WrapperHomeList>
          {movieDay.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </WrapperHomeList>
      </WrapperHome>
    </main>
  );
};

export default Home;