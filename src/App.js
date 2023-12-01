import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import FavoritesList from './components/FavoritesList';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null);

  const handleSearch = (movies) => {
    setSearchResults(movies);
    setSelectedMovie(null);
  };
  console.log(searchResults)
  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const handleAddToFavorites = (movie) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, movie];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleLogin = (credentials) => {
 
    setUser({ email: credentials.email });
  };

  const handleSignup = (userInfo) => {
    // Perform signup logic, e.g., API call
    // For simplicity, just setting the user for now
    setUser({ email: userInfo.email });
  };

  const handleLogout = () => {
    // Clear user data to simulate logout
    setUser(null);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
            {!user ? (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </>
            ) : (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <SearchBar onSearch={handleSearch} />
                <MovieList
                  movies={searchResults}
                  onSelect={handleSelectMovie}
                  onAddToFavorites={handleAddToFavorites}
                />
                {selectedMovie && <MovieDetails movie={selectedMovie} />}
              </div>
            }
          />
          <Route path="/favorites" element={<FavoritesList favorites={favorites} />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignupForm onSignup={handleSignup} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
