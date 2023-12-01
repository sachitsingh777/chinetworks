import React from 'react';

const MovieDetails = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.year}</p>
      {/* Display more detailed information */}
    </div>
  );
};

export default MovieDetails;
