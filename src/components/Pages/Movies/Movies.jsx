import { resultQuery } from 'components/Api/Api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import MoviesList from 'components/MoviesList/MoviesList';
import { Button, Input, WrapperForm } from './Movies.styled';

const Movies = () => {
  const [namesMovies, setNamesMovies] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = searchParams.get('query') ?? '';



  const onFormSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    setSearchParams({ query: form.elements.movie.value.trim() });
    form.reset();
  };

  useEffect(() => {
    if (filter === '') return;
    async function getSearchResult() {
      try {
        const response = await resultQuery(filter);
        const arr = response.map(el => ({
          title: el.title,
          id: el.id,
        }));
        if (arr && arr.length > 0) {
          setNamesMovies(arr);
        }
        if (arr.length === 0) {
          return Notiflix.Notify.info(
            'Sorry, the movie you requested was not found. Please try again.'
          );
        }
      } catch (error) {
        Notiflix.Notify.failure(
          'Sorry, something went wrong, please try again later'
        );
      }
    }
    getSearchResult();
  }, [filter]);

  return (
    <main>
      <WrapperForm onSubmit={onFormSubmit}>
        <Input type="text" placeholder="Search movie..." name="movie" />
        <Button type="submit">Search</Button>
      </WrapperForm>
      {namesMovies && <MoviesList titles={namesMovies} />}
    </main>
  );
};

export default Movies;