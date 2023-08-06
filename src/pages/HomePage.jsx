import getPopularFilms from 'components/API/API';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListItem } from './HomePage.styled';
const HomePage = () => {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    getPopularFilms()
      .then(response => setFilms(response.results))
      .catch(err => console.error(err));
  }, []); 

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {films &&
          films.map(film => (
            <ListItem key={film.id}>
              <Link to={`movies/${film.id}`}>{film.title}</Link>
            </ListItem>
          ))}
      </ul>
    </>
  );
};

export default HomePage;
