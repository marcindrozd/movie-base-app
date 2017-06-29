import React from 'react';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  return (
    <ul className="list-group">
      { movies.map(movie =>
        <li className="list-group-item" key={movie.id}>
          {movie.title}
        </li>
      ) }
    </ul>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
}

export default MoviesList;
