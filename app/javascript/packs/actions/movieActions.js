import movieApi from '../api/movieApi';
import * as types from './actionTypes';

export function loadMovies() {
  return function(dispatch) {
    return movieApi.getAllMovies().then(movies => {
      dispatch(loadMoviesSuccess(movies));
    }).catch(error => {
      throw error;
    });
  };
}

export function loadMoviesSuccess(movies) {
  return { type: types.LOAD_MOVIES_SUCCESS, movies }
}
