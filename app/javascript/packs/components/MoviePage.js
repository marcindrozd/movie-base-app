import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class MoviePage extends React.Component {
  render() {
    return (
      <div className="col-md-8 col-offset-2">
        <h1>{this.props.movie.title}</h1>
        <p>Description: {this.props.movie.description}</p>
        <p>Year: {this.props.movie.year}</p>
      </div>
    )
  }
}

MoviePage.propTypes = {
  movie: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownProps) {
  let movie = { title: '', description: '', year: 0, actor_ids: []};
  const movieId = parseInt(ownProps.match.params.id);

  if (state.movies.length > 0) {
    movie = Object.assign({}, state.movies.find(movie => movie.id === movieId))
  };

  return { movie };
}

export default connect(mapStateToProps)(MoviePage);
