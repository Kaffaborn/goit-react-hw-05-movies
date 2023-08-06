const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmM4YTFmYzFjNTJkNDI2MzdiOWY0YzM4Y2YwMTE1ZiIsInN1YiI6IjY0MzczYzAzMWY3NDhiMDA3NzE1NWRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xP9IjysvP2DNJPfyp9LiVDmBl5Ma23Yd9KpANBssuVc',
  },
};

const getFilmByName = queryName =>
  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${queryName}&include_adult=false&language=en-US&page=1`,
    options
  ).then(response => response.json());

export default getFilmByName;
