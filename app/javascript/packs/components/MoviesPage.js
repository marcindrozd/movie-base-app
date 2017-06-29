import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieActions from '../actions/movieActions';

import MoviesList from './MoviesList';
import MoviePage from './MoviePage';

class MoviesPage extends React.Component {
  render() {
    const movies = this.props.movies;

    return (
      <div className="col-md-12">
        <h1>Movies</h1>
        <div className="col-md-4">
          <MoviesList movies={movies} />
        </div>
        <Route path="/movies/:id" component={MoviePage} />
      </div>
    )
  }
}

MoviesPage.propTypes = {
  movies: PropTypes.array.isRequired,
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(MoviesPage);
