import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { resultCast } from '../Api/Api';
import { WrapperCast, WrapperCards, WrapperProfile } from './Cast.styled';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getActors() {
      try {
        const response = await resultCast(movieId);
        setActors(response);
      } catch (error) {
        console.log(error);
      }
    }
    getActors();
  }, [movieId]);

  return (
    <WrapperCast>
      {actors.length === 0 && (
        <h3>We don't have any casting information for this film.</h3>
      )}
      <WrapperCards>
        {actors.map(actor => (
          <WrapperProfile key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : 'https://via.placeholder.com/200x300?text=No+foto'
              }
              alt={actor.name}
              width="200"
              loading="lazy"
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character} </p>
          </WrapperProfile>
        ))}
      </WrapperCards>
    </WrapperCast>
  );
};

export default Cast;