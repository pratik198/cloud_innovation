import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import SideBar from './SideBar';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('asc');
  const [filter, setFilter] = useState([]);

  // Fetch movies and store in local storage
  useEffect(() => {
    fetch('http://localhost:8080/movies')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('movies', JSON.stringify(data));
        setMovies(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        setLoading(false);
      });
  }, []);

  // Apply sorting and filtering to the movies
  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    console.log('Stored Movies:', storedMovies); // Debugging

    // Convert the 'year' property to a number and apply filters
    let filteredMovies = storedMovies
      .filter(movie => filter.length === 0 || filter.includes(movie.rating))
      .map(movie => ({
        ...movie,
        year: parseInt(movie.year, 10)  // Ensure year is a number
      }));

    console.log('Filtered Movies:', filteredMovies); // Debugging

    // Sort movies based on the selected order
    filteredMovies.sort((a, b) => 
      sortOrder === 'asc' ? a.year - b.year : b.year - a.year
    );

    console.log('Sorted Movies:', filteredMovies); // Debugging

    setFilteredMovies(filteredMovies);
  }, [sortOrder, filter]);

  if (loading) return <div>Loading...</div>;

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    padding: '16px',
  };

  const sideBarStyle = {
    flex: '1',
    paddingRight: '16px',
  };

  const gridStyle = {
    flex: '3',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
  };

  return (
    <div style={containerStyle}>
      <div style={sideBarStyle}>
        <SideBar onFilterChange={setFilter} onSortChange={setSortOrder} />
      </div>
      <div style={gridStyle}>
        {filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
