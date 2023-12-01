const API_KEY = 'd9b4928e';

const fetchMovies = async (searchQuery) => {
  try {
    const response = await fetch(`https://www.omdbapi.com/?apiKey=d9b4928e&s=${searchQuery}`);
    const data = await response.json();
    return data.Search || [];
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export { fetchMovies };
