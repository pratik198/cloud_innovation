import React from 'react';
import { useLocation } from 'react-router-dom';
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginTop:"50px"
  },
  title: {
    fontSize: '2em',
    marginBottom: '20px',
    color: '#333',
  },
  image: {
    width: '300px',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  details: {
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '1.2em',
    color: '#666',
  },
  notFound: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '1.5em',
    color: '#666',
  },
};
const MovieDetail = () => {
  const location = useLocation();
  const { movie } = location.state || {};

  if (!movie) {
    return <div style={styles.notFound}>Movie not found</div>;
  }

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>{movie.Title}</h3>
      <img src={movie.Poster} alt={movie.Title} style={styles.image} />
      <div style={styles.details}>
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Type:</strong> {movie.Type}</p>
        <p><strong>Rating:</strong> {movie.rating}</p>
      </div>
    </div>
  );
};



export default MovieDetail;
