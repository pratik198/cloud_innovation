import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import LogIn from './LogIn';
import MovieDetail from './MovieDetail';
import { useSelector } from 'react-redux';
import Header from '../Components/Header';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuth);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const MainRoutes = () => (
  <Routes>
    <Route path="/login" element={<LogIn />} />
    <Route path="/movie/:id" element={<MovieDetail />} />
    <Route path="/" element={<HomePage />} />
  </Routes>
);

export default MainRoutes;
