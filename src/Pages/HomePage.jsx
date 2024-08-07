import React from 'react';
import MovieList from '../Components/MovieList';
import SideBar from '../Components/SideBar';
import './HomePage.css'; 
import { Link } from 'react-router-dom'; 
import Header from '../Components/Header';

const HomePage = () => (
  <div className="home-page">
   {/* <Header/> */}
    {/* <SideBar /> */}
    <MovieList />
  </div>
);

export default HomePage;
