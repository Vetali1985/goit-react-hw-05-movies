import { List } from 'pages/Home/Home.styled';
import { MovieCard } from 'pages/MovieCard/MovieCard';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchPopularFilms } from '../../service/fetchService';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchPopularFilms()
      .then(setFilms)
      .catch(e => console.log(e.message));
  }, []);

  return (
    <List>
      {films.map(film => {
        const { id, poster_path, title, name } = film;
        return (
          <MovieCard
            key={id}
            posterPath={poster_path}
            title={title ?? name}
            movieId={id}
          />
        );
      })}
    </List>
  );
};
export default Home;
