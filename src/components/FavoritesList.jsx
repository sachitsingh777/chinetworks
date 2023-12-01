// src/components/FavoritesList.js
import React from 'react';
import MovieCard from './MovieCard';

const FavoritesList = ({ favorites }) => {
  return (
    <div className="favorites-list">
      <h2>Favorites</h2>
      {favorites.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} showButton={false} />
      ))}
    </div>
  );
};

export default FavoritesList;
