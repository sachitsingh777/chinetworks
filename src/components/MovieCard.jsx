// src/components/MovieCard.js
import React from 'react';
import { Box, Image, Heading, Text, Button } from '@chakra-ui/react';

const MovieCard = ({ movie, onAddToFavorites, showButton = true }) => {
  const handleAddToFavorites = () => {
    onAddToFavorites(movie);
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Image src={movie.Poster} alt={movie.Title} width="100%" height="auto" />
      <Box p="4">
        <Heading fontSize="1.2rem" color="blue.500">
          {movie.Title}
        </Heading>
        <Text color="gray.600">{movie.Year}</Text>
        {showButton && (
          <Button
            colorScheme="blue"
            mt="2"
            onClick={handleAddToFavorites}
          >
            Add to Favorites
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default MovieCard;
