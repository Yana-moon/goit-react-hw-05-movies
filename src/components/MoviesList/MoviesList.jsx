import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { WrapperMoviesList, WrapperList } from './MoviesList.styled';

const MoviesList = ({ titles }) => {
  const location = useLocation();
  return (
    <WrapperMoviesList>
      <WrapperList>
        {titles.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </WrapperList>
    </WrapperMoviesList>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  titles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};