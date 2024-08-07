
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchMovies } from './Redux/MovieReducer/action';
import MoviesList from './Components/MovieList';
import HomePage from './Pages/HomePage';
import LogIn from './Pages/LogIn';
import MovieDetail from './Pages/MovieDetail';
import MainRoutes from './Pages/MainRoutes';
import Header from './Components/Header';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      
      <Header/>
<MainRoutes/>
    </div>
  );
};

export default App;
