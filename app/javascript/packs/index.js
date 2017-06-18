import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { loadMovies } from './actions/movieActions';
import App from './App';

const store = configureStore();
store.dispatch(loadMovies());

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("app")
  );
});
