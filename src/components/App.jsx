import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import FilmDetails from './FilmDetails/FilmDetails';
import Cast from '../components/Cast/Cast';
import Rewievs from '../components/Rewievs/Rewievs';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="movies"
          element={
            <Suspense>
              <MoviesPage />
            </Suspense>
          }
        />
        <Route path="movies/:filmId" element={<FilmDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="rewievs" element={<Rewievs />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default App;
