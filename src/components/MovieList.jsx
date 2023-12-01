// MovieList.jsx
import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onSelect, onAddToFavorites }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onSelect={onSelect}
          onAddToFavorites={onAddToFavorites} 
        />
      ))}
    </SimpleGrid>
  );
};

export default MovieList;
