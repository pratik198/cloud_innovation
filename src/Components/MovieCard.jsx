import React from 'react';
import { Link } from 'react-router-dom';
const styles = {
  card: {
    width: '200px',
    margin: '20px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '350px',
    objectFit: 'cover',
  },
  details: {
    padding: '15px',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  name: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    margin: '10px 0',
    color: '#333',
  },
  year: {
    fontSize: '1em',
    margin: '5px 0',
    color: '#666',
  },
  type: {
    fontSize: '1em',
    margin: '5px 0',
    color: '#666',
  },
  rating: {
    fontSize: '1em',
    margin: '10px 0',
    color: '#666',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  }
};

const MovieCard = ({ movie }) => (
  <div style={styles.card}>
    <Link 
      to={`/movie/${movie.id}`} 
      state={{ movie }} 
      style={styles.link}
    >
      <img src={movie.Poster} alt={movie.Title} style={styles.image} />
      <div style={styles.details}>
        <p style={styles.name}>{movie.Title}</p>
        <p style={styles.year}>{movie.Year}</p>
        <p style={styles.type}>{movie.Type}</p>
        <p style={styles.rating}>Rating: {movie.rating}</p>
      </div>
    </Link>
  </div>
);


export default MovieCard;
