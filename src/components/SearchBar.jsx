import React, { useState } from 'react';
import { Input, Button, Flex } from '@chakra-ui/react';
import { fetchMovies } from '../services/api';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const movies = await fetchMovies(query);
    onSearch(movies);
  };

  return (
    <Flex align="center" mb="4">
      <Input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        mr="2"
      />
      <Button colorScheme="blue" onClick={handleSearch}>
        Search
      </Button>
    </Flex>
  );
};

export default SearchBar;
