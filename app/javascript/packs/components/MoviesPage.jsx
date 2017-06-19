import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as movieActions from '../actions/movieActions';

import MoviesList from './MoviesList';

class MoviesPage extends React.Component {
  render() {
    return (
      <div className="col-md-12">
        <h1>Movies</h1>
        <div className="col-md-4">
          <MoviesList movies={this.props.movies} />
        </div>
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
